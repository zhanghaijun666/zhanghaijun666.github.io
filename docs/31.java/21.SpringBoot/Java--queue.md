# Java队列

## BlockingQueue的实现子类

### ArrayBlockingQueue

> 基于数组的有界阻塞队列，大小在初始化时固定。生产者和消费者通过相同的锁进行同步。

### LinkedBlockingQueue

> 基于链表的阻塞队列，可以是有界的或无界的（如果没有指定容量，默认为 Integer.MAX_VALUE）。生产者和消费者使用不同的锁，提供了更高的并发性。

### PriorityBlockingQueue

> 基于优先级排序的无界阻塞队列，元素会根据其自然顺序或 Comparator 排序放置。没有大小限制，因此不会阻塞插入操作。

### SynchronousQueue

> 没有容量的特殊队列，每一个插入操作必须等待相应的移除操作。常用于在两个线程之间直接传递数据。

### DelayQueue

> 采用优先队列的无界阻塞队列，元素只有在其延迟时间到期后才能被获取。常用于调度任务等场景。

### LinkedTransferQueue

> 一个加强版的 LinkedBlockingQueue，提供 transfer 方法，生产者可以等待消费者接收数据。

### LinkedBlockingDeque

> 双端阻塞队列，允许从两端插入和移除元素，可以用作栈或队列使用。
