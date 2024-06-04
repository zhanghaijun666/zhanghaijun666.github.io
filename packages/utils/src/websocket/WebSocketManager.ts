export default class WebSocketManager {
  // WebSocket 对象
  private socket: WebSocket | null = null;
  // 心跳计时器
  private pingTimeout: NodeJS.Timeout | null = null;
  // 重连间隔，单位：毫秒
  private readonly reconnectTimeout: number = 5000;
  // 最大重连尝试次数
  private readonly maxReconnectAttempts: number = 10;
  // 当前重连尝试次数
  private reconnectAttempts: number = 0;
  // 用户ID
  private readonly userId: string | null;
  // WebSocket 连接地址
  private readonly url: string | null;
  // 接收消息回调函数
  private readonly receiveMessageCallback: ((message: string) => void) | null;

  constructor(url: string | null = null, userId: string | null = null, receiveMessageCallback: ((message: string) => void) | null = null) {
    this.socket = null;
    this.userId = userId;
    this.url = url;
    this.receiveMessageCallback = receiveMessageCallback;

    this.initWebSocket();
  }

  private initWebSocket() {
    if (!this.url) {
      console.error('WebSocket URL is not provided.');
      return;
    }
    const id = `${this.userId}-${Math.random()}`;
    this.socket = new WebSocket(this.url, id);

    this.socket.onopen = () => this.onSocketOpen();
    this.socket.onclose = () => this.onSocketClose();
    this.socket.onerror = (error) => this.onSocketError(error);
    this.socket.onmessage = (event) => this.onSocketMessage(event);
  }

  private onSocketOpen() {
    console.log('WebSocket connection established.');
    this.reconnectAttempts = 0;
    this.startHeartbeat();
  }

  private onSocketClose() {
    console.log('WebSocket connection closed.');
    this.reconnect();
  }

  private onSocketError(error: any) {
    console.error('WebSocket error:', error);
    this.reconnect();
  }

  private onSocketMessage(event: MessageEvent) {
    if (typeof this.receiveMessageCallback === 'function') {
      const message = event.data.toString();
      this.receiveMessageCallback(message);
    }
  }

  private startHeartbeat() {
    if (this.pingTimeout) clearInterval(this.pingTimeout);
    this.pingTimeout = setInterval(() => {
      if (this.socket && this.socket.readyState === WebSocket.OPEN) {
        this.socket.send('ping');
      }
    }, 5000); // 每5秒发送一次心跳消息
  }

  private stopHeartbeat() {
    if (this.pingTimeout) clearInterval(this.pingTimeout);
  }

  private reconnect() {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      console.log('Attempting to reconnect...');
      this.reconnectAttempts++;
      setTimeout(() => {
        this.initWebSocket();
      }, this.reconnectTimeout);
    } else {
      console.error('Max reconnect attempts reached. Connection could not be established.');
    }
  }

  sendMessage(message: string) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(message);
    } else {
      console.error('WebSocket connection not established. Message not sent:', message);
    }
  }

  closeConnection() {
    if (this.socket) {
      this.socket.close();
      this.stopHeartbeat();
      this.reconnectAttempts = 0;
    }
  }
}
