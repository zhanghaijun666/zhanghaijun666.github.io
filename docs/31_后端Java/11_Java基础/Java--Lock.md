# Java中的锁

## ReentrantLock

### 公平锁

```java
public class ReentrantLockTest {
    //表示排到第几个人了
    volatile static int index = 0;
    //卫生间门上有个锁，人民素质高: true, 素质低: false
    static ReentrantLock lock = new ReentrantLock(true);

    public static void main(String[] args) {
        start();
    }

    /**
     * 开始活动
     */
    private static void start() {
        //下面实例化来卫生间的路线，有3个路线可以过来
        new Thread(() -> {
            for (; ; ) {
                doing(index++);
            }
        }).start();
        new Thread(() -> {
            for (; ; ) {
                doing(index++);
            }
        }).start();
        new Thread(() -> {
            for (; ; ) {
                doing(index++);
            }
        }).start();
    }

    /**
     * 上厕所这个动作
     */
    private static void doing(int person) {
        lock.lock();
        System.out.println("第 " + person + " 个人去了" + Thread.currentThread().getName() + " 坑位！");
        try {
            System.out.println("上卫生间中，顺便抽烟！");
            TimeUnit.SECONDS.sleep(2);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("第 " + person + " 个人完事了！");
        System.out.println("----------------------------");
        lock.unlock();
    }
}
//第 0 个人去了Thread-0 坑位！
//上卫生间中，顺便抽烟！
//第 0 个人完事了！
//    ----------------------------
//第 1 个人去了Thread-1 坑位！
//上卫生间中，顺便抽烟！
//第 1 个人完事了！
//    ----------------------------
//第 2 个人去了Thread-2 坑位！
//上卫生间中，顺便抽烟！
//第 2 个人完事了！
//    ----------------------------
//第 3 个人去了Thread-0 坑位！
//上卫生间中，顺便抽烟！
//第 3 个人完事了！
//    ----------------------------
//第 4 个人去了Thread-1 坑位！
//上卫生间中，顺便抽烟！
//第 4 个人完事了！
//    ----------------------------
//第 5 个人去了Thread-2 坑位！
//上卫生间中，顺便抽烟！
```

> 从执行结果可以看出来，Thread-0、Thread-1、Thread-2交替执行，很有规律，每次都是上一个人的后面，1 2 3 4 5 有顺序的，这就是公平锁。

### 非公平锁

```java
public static void main(String[] args) {
    // 我们把实例化 ReentrantLock 的参数改为 false 来看看。
    static ReentrantLock lock = new ReentrantLock(false);
}
//第 0 个人去了Thread-0 坑位！
//上卫生间中，顺便抽烟！
//第 0 个人完事了！
//    ----------------------------
//第 3 个人去了Thread-0 坑位！
//上卫生间中，顺便抽烟！
//第 3 个人完事了！
//    ----------------------------
//第 4 个人去了Thread-0 坑位！
//上卫生间中，顺便抽烟！
//第 4 个人完事了！
//    ----------------------------
//第 5 个人去了Thread-0 坑位！
//上卫生间中，顺便抽烟！
//第 5 个人完事了！
//    ----------------------------
//第 6 个人去了Thread-0 坑位！
//上卫生间中，顺便抽烟！
```

> 从执行结果可以看出，第1个人和第2个人没抢到坑位，第4、5、6个人也是 Thread-0 路线来的，所以 Thread-1 和 Thread-2 的人基本上 “憋死了”。
