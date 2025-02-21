# Java异步编程CompletableFuture(串行,并行,批量执行)

## 什么是CompletableFuture?

在Java中CompletableFuture用于异步编程，异步编程是编写非阻塞的代码，运行的任务在一个单独的线程，与主线程隔离，并且会通知主线程它的进度，成功或者失败。在这种方式中，主线程不会被阻塞，不需要一直等到子线程完成。主线程可以并行的执行其他任务。 使用这种并行方式，可以极大的提高程序的性能。

CompletableFuture 是 Java 8 引入的一个类，用于简化异步编程模型。它是 Future 接口的一个增强版本，提供了更加丰富的功能和更灵活的用法

CompletableFuture是一个Java库中的类，用于处理异步编程。它提供了一种简化异步操作的方式，可以更方便地编写异步代码，并处理异步任务的结果。

使用CompletableFuture可以简化异步编程的复杂性，并提供更灵活和强大的功能。它是Java 8中新增的功能之一，为开发者提供了更好的异步编程体验。

CompletableFuture可以用于以下几种情况：

- 异步执行任务：可以使用CompletableFuture来执行一个耗时的任务，而不会阻塞主线程。
- 组合多个异步任务的结果：可以将多个CompletableFuture串联起来，以便在它们都完成后执行一些操作。
- 处理异常情况：可以使用CompletableFuture来处理异步任务中可能出现的异常情况。
- 并发执行多个任务 ：可以使用CompletableFuture来同时执行多个任务，并等待它们全部完成。


```java
@Sl4j
@DisplayName("示例CompletableFuture")
class AsyncTest{
  
  @Test
  @DisplayName("串行执行")
  void serial(){
    CompletableFuture<Void> future = CompletableFuture.runAsync(() -> {
      sleep(1000);
      log.info("执行任务1");
    }).thenRunAsync(() -> {
      sleep(1000);
      log.info("执行任务2");
    });
    future.join();
  }
  
}
```
