# Java规范 ⭐️⭐️

## 1、项目规范

写代码，看源码，怎么少得了意会和神通？代码要带感，命名也风骚。命名起的好，代码会看起来很爽，大家也都喜欢。

说不清楚的事情，给一段代码，咱就能懂！就是这么神奇！

### 1.1、项目命名规范

> 全部采用小写方式， 以中划线分隔。

```text
正例：mall-management-system / order-service-client / user-api

反例：mall_management-system / mallManagementSystem / orderServiceClient
```

### 1.2、代码目录结构

> 统一的目录结构是所有项目的基础。

```text
src                               源码目录
|-- common                        各个项目的通用类库
|   |-- anno                      通用注解，比如权限，登录等等
|   |-- constant                  通用常量，比如 ResponseCodeConst
|   |-- domain                    全局的 javabean，比如 BaseEntity,PageParamDTO 等
|   |-- exception                 全局异常，如 BusinessException
|   |-- json                      json 类库，如 LongJsonDeserializer，LongJsonSerializer
|   |-- swagger                   swagger 文档
|   |-- validator                 适合各个项目的通用 validator，如 CheckEnum，CheckBigDecimal 等
|-- config                        项目的配置信息
|-- constant                      全局公共常量
|-- handler                       全局处理器
|-- interceptor                   全局连接器
|-- listener                      全局监听器
|-- controller                    全局控制器
|-- module                        各个业务(方便将来拆成微服务)
|   |-- uac                       用户管理模块 UAC (User Account Control): 适用于需要管理用户账户和权限的系统。
|   |   |-- service
|   |   |-- mapper
|   |   |-- entity
|   |-- fms                       文件管理模块 FMS (File Management System): 适用于需要管理文件和图片的系统。
|   |   |-- service
|   |   |-- mapper
|   |   |-- entity
|   |-- wfm                       工作流管理模块 WFM (Workflow Management): 适用于需要管理业务流程的系统。
|   |   |-- service
|   |   |-- mapper
|   |   |-- entity
|-- third                         三方服务，比如redis, oss，微信sdk等等
|-- util                          全局工具类
|-- Application.java              启动类
```

## 2、命名规范

代码规范的命名对看懂代码结构和意图有着关键的作用。好的命名，能够让代码更容易被理解，也能让代码更具有可读性。借鉴流行的开源软件（spring系列，netty，libgdx，guava，logback等等），总结常见的类命名。

### 2.1、管理类命名

> 写代码，少不了对统一资源的管理，清晰的启动过程可以有效的组织代码。为了让程序运行起来，少不了各种资源的注册、调度，少不了公共集合资源的管理。

::: code-group

```java [Bootstrap|Starter]
/**
 * 一般作为程序启动器使用，或者作为启动器的基类。
 * 通俗来说，可以认为是main函数的入口。
 */

class ServerBootstrap extends AbstractBootstrap {
}

class MacosXApplicationStarter {
}

class DNSTaskStarter {
}
```

```java [Processor]
/**
 * 某一类功能的处理器，用来表示某个处理过程，是一系列代码片段的集合。
 * 如果你不知道一些顺序类的代码怎么命名，就可以使用它，显得高大上一些。
 */

class CompoundProcessor {
}

class BinaryComparisonProcessor {
}

class DefaultDefaultValueProcessor {
}
```

```java [Manager]
/** 对有生命状态的对象进行管理，通常作为某一类资源的管理入口。*/

class AccountManager {
}

class DevicePolicyManager {
}

class TransactionManager {
}
```

```java [Holder]
/** 表示持有某个或者某类对象的引用，并可以对其进行统一管理。多见于不好回收的内存统一处理，或者一些全局集合容器的缓存。*/

class QueryHolder {
}

class InstructionHolder {
}

class ViewHolder {
}
```

```java [Factory]
/** 毫无疑问，工厂模式的命名，耳熟能详。尤其是Spring中，多不胜数。*/

class SessionFactory {
}

class ScriptEngineFactory {
}

class LiveCaptureFactory {
}
```

```java [Provider]
/**
 * Provider = Strategy + Factory Method。它更高级一些，把策略模式和方法工厂揉在了一块，让人用起来很顺手。
 * Provider一般是接口或者抽象类，以便能够完成子实现。
 */

class AccountFeatureProvider {
}

class CollatorProvider {
}
```

```java [Registrar]
/** 注册并管理一系列资源。*/

class ImportServiceRegistrar {
}

class IKryoRegistrar {
}

class PipelineOptionsRegistrar {
}
```

```java [Engine]
/** 一般是核心模块，用来处理一类功能。引擎是个非常高级的名词，一般的类是没有资格用它的。*/

class ScriptEngine {
}

class DataQLScriptEngine {
}

class C2DEngine {
}
```

```java [service]
/** 某个服务。太简单，不忍举例。范围太广，不要滥用哦。*/

class IntegratorServiceImpl {
}

class ISelectionService {
}

class PersistenceService {
}
```

```java [Task]
/** 某个任务。通常是个runnable */

class WorkflowTask {
}

class FutureTask {
}

class ForkJoinTask {
}
```

:::

### 2.2、传播类命名

> 为了完成一些统计类或者全局类的功能，有些参数需要一传到底。传播类的对象就可以通过统一封装的方式进行传递，并在合适的地方进行拷贝或者更新。

::: code-group

```java [Context]
/**
 * 在Java中，由于ThreadLocal的存在，Context甚至可以不用在参数之间进行传递。
 * 如果你的程序执行，有一些变量，需要从函数执行的入口开始，一直传到大量子函数执行完毕之后。
 * 这些变量或者集合，如果以参数的形式传递，将会让代码变得冗长无比。这个时候，你就可以把变量统一塞到Context里面，以单个对象的形式进行传递。
 */

class AppContext {
}

class ServletContext {
}

class ApplicationContext {
}
```

```java [Propagat]
/**
 * 传播，繁殖。
 * 用来将context中传递的值进行复制，添加，清除，重置，检索，恢复等动作。
 * 通常，它会提供一个叫做propagate的方法，实现真正的变量管理。
 */

class TextMapPropagator {
}

class FilePropagator {
}

class TransactionPropagator {
}
```

:::

### 2.3、回调类命名

> 使用多核可以增加程序运行的效率，不可避免的引入异步化。我们需要有一定的手段，获取异步任务执行的结果，对任务执行过程中的关键点进行检查。回调类API可以通过监听、通知等形式，获取这些事件。

```java
/**
 * Handler通常表示持有真正消息处理逻辑的对象，它是有状态的；
 */
class ChannelHandler {
}

/**
 * callback通常是一个接口，用于响应某类消息，进行后续处理；
 */
class SuccessCallback {
}

/**
 * trigger触发器代表某类事件的处理，属于Handler，通常不会出现在类的命名中；
 */
class CronTrigger {
}

/**
 * Listener的应用更加局限，通常在观察者模式中用来表示特定的含义。
 */
class EventListener {
}

/**
 * Aware就是感知的意思，一般以该单词结尾的类，都实现了Aware接口。拿spring来说，Aware 的目的是为了让bean获取spring容器的服务。具体回调方法由子类实现，比如ApplicationContextAware。它有点回调的意思。
 */
class ApplicationContextAware implements Aware {
}

class ApplicationStartupAware implements Aware {
}

class ApplicationEventPublisherAware implements Aware {

}
```

### 2.4、监控类命名

> 现在的程序都比较复杂，运行状态监控已经成为居家必备之良品。监控数据的收集往往需要侵入到程序的边边角角，如何有效的与正常业务进行区分，是非常有必要的。

::: code-group

```java [Metric]
/** 表示监控数据。不要用Monitor了，比较丑。 */

class TimelineMetric {
}

class HistogramMetric {
}
```

```java [Estimator]
/** 估计，统计。用于计算某一类统计数值的计算器。 */

class ConditionalDensityEstimator {
}

class FixedFrameRateEstimator {
}

class NestableLoadProfileEstimator {
}
```

```java [Accumulator]
/** 累加器的意思。用来缓存累加的中间计算结果，并提供读取通道。*/

class AbstractAccumulator {
}

class StatsAccumulator {
}

class TopFrequencyAccumulator {
}
```

```java [Tracker]
/** 一般用于记录日志或者监控值，通常用于apm中。*/

class VelocityTracker {
}

class RocketTracker {
}

class MediaTracker {
}
```

:::

### 2.5、内存管理类命名

> 如果你的应用用到了自定义的内存管理，那么下面这些名词是绕不开的。比如Netty，就实现了自己的内存管理机制。

::: code-group

```java [Allocator]
/**
 * 与存储相关，通常表示内存分配器或者管理器。
 * 如果你得程序需要申请有规律得大块内存，allocator是你得不二选择。
 */

class AbstractByteBufAllocator {
}

class ArrayAllocator {
}

class RecyclingIntBlockAllocator {
}
```

```java [Chunk]
/**
 * 表示一块内存。如果你想要对一类存储资源进行抽象，并统一管理，可以采用它。
 */

class EncryptedChunk {
}

class ChunkFactory {
}

class MultiChunk {
}
```

```java [Arena]
/**
 * 英文是舞台、竞技场的意思。
 * 由于Linux把它用在内存管理上发扬光大，它普遍用于各种存储资源的申请、释放与管理。
 * 为不同规格的存储chunk提供舞台，好像也是非常形象的表示。
 */

class BookingArena {
}

class StandaloneArena {
}

class PoolArena {
}
```

```java [Pool]
/**
 * 表示池子。内存池，线程池，连接池，池池可用。
 */

class ConnectionPool {
}

class ObjectPool {
}

class MemoryPool {
}
```

:::

### 2.6、过滤检测类命名

> 程序收到的事件和信息是非常多的，有些是合法的，有些需要过滤扔掉。根据不同的使用范围和功能性差别，过滤操作也有多种形式。你会在框架类代码中发现大量这样的名词。

::: code-group

```java [Pipeline]
/**
 * 一般用在责任链模式中。
 * Netty，Spring MVC，Tomcat等都有大量应用。
 * 通过将某个处理过程加入到责任链的某个位置中，就可以接收前面处理过程的结果，强制添加或者改变某些功能。
 * 就像Linux的管道操作一样，最终构造出想要的结果。
 */

class Pipeline {
}

class ChildPipeline {
}

class DefaultResourceTransformerChain {
}

class FilterChain {
}
```

```java [Filte]
/**
 * 过滤器，用来筛选某些满足条件的数据集，或者在满足某些条件的时候执行一部分逻辑。
 * 如果和责任链连接起来，则通常能够实现多级的过滤。
 */

class FilenameFilter {
}

class AfterFirstEventTimeFilter {
}

class ScanFilter {
}
```

```java [Intercep]
/**
 * 拦截器，其实和Filter差不多。
 * 不过在Tomcat中，Interceptor可以拿到controller对象，但filter不行。
 * 拦截器是被包裹在过滤器中。
 */

class HttpRequestInterceptor {
}
```

```java [Evaluato]
/**
 * 英文里是评估器的意思。
 * 可用于判断某些条件是否成立，一般内部方法`evaluate`会返回bool类型。
 * 比如你传递进去一个非常复杂的对象，或者字符串，进行正确与否的判断。
 */

class ScriptEvaluator {
}

class SubtractionExpressionEvaluator {
}

class StreamEvaluator {
}
```

```java [Detector]
/**
 * 探测器。
 * 用来管理一系列探测性事件，并在发生的时候能够进行捕获和响应。
 * 比如Android的手势检测，温度检测等。
 */

class FileHandlerReloadingDetector {
}

class TransformGestureDetector {
}

class ScaleGestureDetector {
}
```

:::

### 2.7、结构类命名

> 除了基本的数据结构，如数组、链表、队列、栈等，其他更高一层的常见抽象类，能够大量减少大家的交流，并能封装常见的变化。

::: code-group

```java [Cache]
/**
 * 缓存。
 * 大块的缓存。常见的缓存算法有LRU、LFU、FIFO等。
 */

class LoadingCache {
}

class EhCacheCache {
}
```

```java [Buffer]
/**
 * buffer是缓冲，不同于缓存，它一般用在数据写入阶段。
 */

class ByteBuffer {
}

class RingBuffer {
}

class DirectByteBuffer {
}
```

```java [Composit]
/**
 * 将相似的组件进行组合，并以相同的接口或者功能进行暴露，使用者不知道这到底是一个组合体还是其他个体。
 */

class CompositeData {
}

class CompositeMap {
}

class ScrolledComposite {
}
```

```java [Wrappe]
/**
 * 用来包装某个对象，做一些额外的处理，以便增加或者去掉某些功能。
 */

class IsoBufferWrapper {
}

class ResponseWrapper {
}

class MavenWrapperDownloader {
}
```

```java [Option]
/**
 * 用来表示配置信息。说实话，它和Properties的区别并不大，但由于Option通常是一个类，所以功能可以扩展的更强大一些。
 * 它通常比Config的级别更小，关注的也是单个属性的值。
 */
class SpecificationOption {
}

class SelectOption {
}

/**
 * Param一般是作为参数存在，对象生成的速度要快一些。
 */
class AlarmParam {
}

class ModelParam {
}
```

```java [Aggregat]
/**
 * 聚合器，可以做一些聚合计算。
 * 比如分库分表中的sum，max，min等聚合函数的汇集。
 */

class BigDecimalMaxAggregator {
}

class PipelineAggregator {
}

class TotalAggregator {
}
```

```java [Iterator]
/**
 * 迭代器。
 * 可以实现Java的迭代器接口，也可以有自己的迭代方式。在数据集很大的时候，需要进行深度遍历，迭代器可以说是必备的。
 * 使用迭代器还可以在迭代过程中安全的删除某些元素。
 */

class BreakIterator {
}

class StringCharacterIterator {
}
```

```java [Batch]
/**
 * 某些可以批量执行的请求或者对象。
 */

class SavedObjectBatch {
}

class BatchRequest {
}
```

```java [Limiter]
/**
 * 限流器，使用漏桶算法或者令牌桶来完成平滑的限流。
 */

class RateLimiter {
}

class TimeBasedLimiter {
}
```

:::

### 2.8、常见设计模式命名

> 设计模式是名词的重灾区，这里只列出最常使用的几个。

::: code-group

```java [Strategy]
/**
 * 策略模式。
 * 将抽象部分与它的实现部分分离，使它们都可以独立地变化。
 * 相同接口，不同实现类，同一方法结果不同，实现策略不同。
 * 比如一个配置文件，是放在xml里，还是放在json文件里，都可以使用不同的provider去命名。
 */

class RemoteAddressStrategy {
}

class StrategyRegistration {
}

class AppStrategy {
}
```

```java [Adapter]
/**
 *  适配器模式。
 * 将一个类的接口转换为客户希望的另一个接口，Adapter模式使得原本由于接口不兼容而不能一起工作的那些类一起工作。
 * 不过，相对于传统的适配器进行api转接，如果你的某个Handler里面方法特别的多，可以使用Adapter实现一些默认的方法进行0适配。
 * 那么其他类使用的时候，只需要继承Adapter，然后重写他想要重写的方法就可以了。这也是Adapter的常见用法。
 */

class ExtendedPropertiesAdapter {
}

class ArrayObjectAdapter {
}

class CardGridCursorAdapter {
}
```

```java [Action]
/**
 * 用来表示一系列动作指令，用来实现命令模式，封装一系列动作或者功能。
 * Action一般用在UI操作上，后端框架可以无差别的使用。
 */
class DeleteAction {
}

class BoardCommand {
}
```

```java [Event]
/**
 * 表示一系列事件。
 * 一般的，在语义上，Action，Command等，来自于主动触发；Event来自于被动触发。
 */

class ObservesProtectedEvent {
}

class KeyEvent {
}
```

```java [Delegate]
/**
 * 代理或者委托模式。
 * 委托模式是将一件属于委托者做的事情，交给另外一个被委托者来处理。
 */

class LayoutDelegate {
}

class FragmentDelegate {
}
```

```java [Builder]
/**
 * 构建者模式的标准命名。
 * 比如StringBuilder。当然StringBuffer是个另类。这也说明了，规则是人定的，人也可以破坏。
 */
class JsonBuilder {
}

class RequestBuilder {
}
```

```java [Template]
/**
 * 模板方法类的命名。
 * 定义一个操作中的算法的骨架，而将一些步骤延迟到子类中。
 * 模板方法使得子类可以不改变一个算法的结构即可重定义该算法的某些特定步骤。
 */

class JDBCTemplate {
}
```

```java [Proxy]
/**
 * 代理模式。
 * 为其他对象提供一种代理以控制对这个对象的访问。
 */

class ProxyFactory {
}

class SlowQueryProxy {
}
```

:::

### 2.9、解析类命名

> 写代码要涉及到大量的字符串解析、日期解析、对象转换等。根据语义和使用场合的区别，它们也分为多种。

::: code-group

```java [转换和解析]
/**
 * 一般用于不同对象之间的格式转换，把一类对象转换成另一类。
 * 注意它们语义上的区别，一般特别复杂的转换或者有加载过程的需求，可以使用Resolver。
 */

class DataSetToListConverter {
}

class LayoutCommandLineConverter {
}

class InitRefResolver {
}

class MustacheViewResolver {
}
```

```java [Parser]
/**
 * 用来表示非常复杂的解析器，比如解析DSL。
 */

class SQLParser {
}

class JSONParser {
}
```

```java [Customizer]
/**
 * 用来表示对某个对象进行特别的配置。由于这些配置过程特别的复杂，值得单独提取出来进行自定义设置。
 */

class ContextCustomizer {
}

class DeviceFieldCustomizer {
}
```

```java [Formatter]
/**
 * 格式化类。主要用于字符串、数字或者日期的格式化处理工作。
 */

class DateFormatter {
}

class StringFormatter {
}
```

:::

### 2.10、网络类命名

> 网络编程的同学，永远绕不过去的几个名词。

::: code-group

```java [Packet]
/**
 * 通常用于网络编程中的数据包
 */

class DhcpPacket {
}

class PacketBuffer {
}
```

```java [Protocol]
/**
 * 同样用户网络编程中，用来表示某个协议。
 */

class RedisProtocol {
}

class HttpProtocol {
}
```

```java [Encoder、Decoder、Codec]
/**
 * 编码解码器 Encoder: 解码器 | Decoder: 编码器
 */

class RedisEncoder {
}

class RedisDecoder {
}

class RedisCodec {
}
```

:::

### 2.11、其他命名

::: code-group

```java [Util，Helper]
/**
 * 都表示工具类，
 * Util一般是无状态的，
 * Helper以便需要创建实例才能使用。
 * 但是一般没有使用Tool作为后缀的。
 */

class HttpUtil {
}

class TestKeyFieldHelper {
}

class CreationHelper {
}
```

```java [Mode，Typ]
/**
 * 看到mode这个后缀，就能猜到这个类大概率是枚举。
 * 它通常把常见的可能性都列到枚举类里面，其他地方就可以引用这个Mode。
 */

class OperationMode {
}

class BridgeMode {
}

class ActionType {
}
```

```java [Invoker，Invocation]
/**
 * invoker是一类接口，通常会以反射或者触发的方式，执行一些具体的业务逻辑。
 * 通过抽象出invoke方法，可以在invoke执行之前对入参进行记录或者处理；
 * 在invoke执行之后对结果和异常进行处理，是AOP中常见的操作方式。
 */

class MethodInvoker {
}

class Invoker {
}

class ConstructorInvocation {
}
```

```java [Initializer]
/**
 * 如果你的应用程序，需要经过大量的初始化操作才能启动，那就需要把它独立出来，专门处理初始化动作。
 */

class MultiBackgroundInitialize {
}

class ApplicationContextInitializer {
}
```

```java [Feature，Promise]
/**
 * 它们都是用在多线程之间的，进行数据传递。
 * Feature相当于一个占位符，代表一个操作将来的结果。一般通过get可以直接阻塞得到结果，或者让它异步执行然后通过callback回调结果。
 * 但如果回调中嵌入了回调呢？如果层次很深，就是回调地狱。Java中的CompletableFuture其实就是Promise，用来解决回调地狱问题。Promise是为了让代码变得优美而存在的。
 */

```

```java [Selector]
/**
 * 根据一系列条件，获得相应的同类资源。
 * 它比较像Factory，但只处理单项资源。
 */

class X509CertSelector {
}

class NodeSelector {
}
```

```java [Reporter]
/**
 * 用来汇报某些执行结果
 */

class ExtentHtmlReporter {
}

class MetricReporter {
}
```

```java [Constants]
/**
 * 一般用于常量列表
 */
```

```java [Accessor]
/**
 * 封装了一系列get和set方法的类。
 * 像lombok就有Accessors注解，生成这些方法。
 * 但Accessor类一般是要通过计算来完成get和set，而不是直接操作变量。
 * 这适合比较复杂的对象存取服务。
 */

class ComponentAccessor {
}

class StompHeaderAccessor {
}
```

```java [Generator]
/**
 * 生成器，一般用于生成代码，生成id等。
 */
class CodeGenerator {
}

class CipherKeyGenerator {
}
```

:::

## 3、注释模板

阿里模板下载地址: <https://github.com/alibaba/p3c/tree/master/p3c-formatter>

idea配置注释模板：`settings`->`Editor`->`File and Code Templates`->`files`->`class`

::: code-group

```java [class]
/**
 * 【说明类功能】
 *
 * @author ${USER}
 * @since ${DATE}
 */
public class ClassName {
}
```

```java [interface]
/**
 * 【接口功能说明】
 *
 * @author ${USER}
 * @since ${DATE}
 */
public interface InterfaceName {
}

```

```java [enum]
/**
 * 【枚举功能说明】
 *
 * @author ${USER}
 * @since ${DATE}
 */
public enum EnumName {
}
```

```java [record]
/**
 * 【记录功能说明】
 * <简要描述该记录的作用，例如：用于表示一个用户信息>
 *
 * @author ${USER}
 * @since ${DATE}
 */
public record RecordName(String name, int age) {
}
```

```java [@interface]
/**
 * 【注解功能说明】
 * <简要描述该注解的作用，例如：用于标记方法需要缓存、标识某个字段的约束等>
 *
 * @author ${USER}
 * @since ${DATE}
 */
public @interface AnnotationName {
}
```

```text [全局配置]
# Help->Edit Custom VM Options...

-Duser.name=haijun.zhang
```

:::
