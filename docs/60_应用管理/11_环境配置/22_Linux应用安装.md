# Linux应用安装

## 文件共享(Samba)

1. 安装Samba
    ```shell
    sudo yum install samba samba-client samba-common
    ```
2. 设置共享目录
   编辑Samba配置文件/etc/samba/smb.conf 在文件末尾添加以下内容：
   ```text
    [shared]
    path = /path/to/shared/directory
    writable = yes
    browseable = yes
    guest ok = yes
    ```
3. 设置Samba密码
   为了允许访问，需要为用户设置一个Samba密码：
    ```shell
    sudo smbpasswd -a your_username
    ```
4. 重启Samba服务
   ```shell
   sudo systemctl restart smb.service
   sudo systemctl restart nmb.service
   ```
5. 配置防火墙（如果已启用）
   ```shell
   sudo firewall-cmd --permanent --zone=public --add-service=samba
   sudo firewall-cmd --reload
   ```
6. 测试
   在Windows上，打开文件资源管理器并输入计算机名称或IP地址。`\\centos-ip\shared`
   在Linux上，输入以下命令：
   ```shell
   smbclient //centos-ip/shared -U your_username
   sudo mount -t cifs //computer_name/shared /path/to/mount/point -o username=your_username
   ```
