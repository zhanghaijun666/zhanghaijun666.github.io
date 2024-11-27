# Java关键字

[[toc]]

## transient

> 在 `Java` 中，`transient` 是一个关键字，用来修饰类的字段，表示该字段在序列化时不会被序列化。

```java

@Data
class User implements Serializable {
  private String username;
  private transient String password; // 不会被序列化
}
```

## volatile

> 在 `Java` 中，`volatile` 是一个关键字，用于修饰变量，确保该变量在多线程环境中具有可见性和禁止指令重排序。

## native

> `native` 是一个方法修饰符，表示该方法是通过本地代码（通常是 C 或 C++）实现的。它与线程同步无直接关系，但在底层的操作系统层面可能会使用。
