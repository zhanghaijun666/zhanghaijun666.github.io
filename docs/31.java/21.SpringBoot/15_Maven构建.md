# Maven构建

在通过Maven构建Spring Boot项目时，面临以下挑战：

1. 频繁的打包流程
   :每次代码变更都需要重新构建整个项目，这不仅耗费时间，还可能引发重复性劳动。
2. 庞大的 JAR 文件
   :生成的 JAR 文件体积通常较大，上传到服务器和部署过程可能耗费较长时间。
3. 资源浪费
   :每次发布都包含未修改的依赖库，进一步增加了传输和存储的负担。

为了解决这些痛点，我们可以通过优化打包策略，将项目的依赖库和配置文件从主体中剥离出来，实现增量更新。这种方式不仅可以显著提高部署效率，还能降低文件传输的复杂性。本文将详细介绍三种优化方法，帮助开发者快速掌握生产环境下的最佳实践。

## Maven Assembly (⭐⭐⭐)

```xml

<plugin>
  <groupId>org.apache.maven.plugins</groupId>
  <artifactId>maven-assembly-plugin</artifactId>
  <executions>
    <execution>
      <id>make-assembly</id>
      <phase>package</phase>
      <goals>
        <goal>single</goal>
      </goals>
      <configuration>
        <descriptors>
          <descriptor>src/main/assembly/assembly.xml</descriptor>
        </descriptors>
      </configuration>
    </execution>
  </executions>
</plugin>
```

> Assembly 描述文件（assembly.xml）示例：

```xml

<?xml version="1.0" encoding="utf-8"?>
<assembly xmlns="http://maven.apache.org/ASSEMBLY/2.2.0"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://maven.apache.org/ASSEMBLY/2.2.0 http://maven.apache.org/xsd/assembly-2.2.0.xsd">

  <id>${project.version}</id>

  <baseDirectory>${project.artifactId}</baseDirectory> <!-- 定义归档包的顶层目录 -->
  <includeBaseDirectory>false</includeBaseDirectory> <!-- 不包含顶层目录 -->

  <formats>
    <format>dir</format>
  </formats>

  <dependencySets>
    <dependencySet>
      <outputDirectory>lib</outputDirectory>
      <unpack>false</unpack> <!-- 不解压依赖 -->
      <scope>runtime</scope> <!-- 只包含运行时依赖 -->
      <useTransitiveDependencies>false</useTransitiveDependencies> <!-- 不包含传递依赖 -->
      <useProjectArtifact>true</useProjectArtifact> <!-- 包含项目自身的依赖 -->
    </dependencySet>
  </dependencySets>

  <fileSets>
    <fileSet>
      <directory>src/main/assembly/bin</directory>
      <outputDirectory>bin</outputDirectory>
      <lineEnding>unix</lineEnding>
      <fileMode>0755</fileMode>
      <filtered>true</filtered>
    </fileSet>
    <fileSet>
      <directory>src/main/assembly</directory>
      <outputDirectory>/</outputDirectory>
      <lineEnding>unix</lineEnding>
      <fileMode>0644</fileMode>
      <filtered>true</filtered>
      <includes>
        <include>docker-compose.yml</include>
        <include>dockerfile</include>
      </includes>
    </fileSet>
    <fileSet>
      <directory>src/main/resources</directory>
      <outputDirectory>conf</outputDirectory>
      <filtered>true</filtered>
      <lineEnding>unix</lineEnding>
      <fileMode>0644</fileMode>
      <includes>
        <include>**/*.properties</include>
        <include>**/*.xml</include>
        <include>**/*.yml</include>
        <include>**/*.json</include>
      </includes>
      <excludes>
        <exclude>README.txt</exclude>
        <exclude>NOTICE.txt</exclude>
      </excludes>
    </fileSet>
  </fileSets>

  <files>
    <file>
      <source>${project.build.directory}/${project.build.finalName}.jar</source>
      <outputDirectory>/</outputDirectory>
      <destName>${project.artifactId}.jar</destName>
    </file>
  </files>

</assembly>

```

## Spring Boot Maven （⭐⭐）

### 1、配置文件单独打包至 config 目录

```xml

<resources>
  <resource>
    <directory>src/main/resources</directory>
    <filtering>true</filtering>
    <targetPath>${project.build.directory}/config</targetPath>
    <includes>
      <include>**/*.properties</include>
      <include>**/*.yml</include>
      <include>**/*.xml</include>
      <include>mapper/*.xml</include>
    </includes>
  </resource>
</resources>
```

### 2、排除依赖库，仅打包核心代码

```xml

<plugin>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-maven-plugin</artifactId>
  <configuration>
    <jvmArguments>-Dfile.encoding=UTF-8</jvmArguments>
    <layout>ZIP</layout>
    <includes>
      <include>
        <groupId>no-exists-jar</groupId>
        <artifactId>non-exists-jar</artifactId>
      </include>
    </includes>
  </configuration>
  <executions>
    <execution>
      <goals>
        <goal>repackage</goal>
      </goals>
    </execution>
  </executions>
</plugin>
```

### 3、依赖库集中到 lib 目录

```xml

<plugin>
  <groupId>org.apache.maven.plugins</groupId>
  <artifactId>maven-dependency-plugin</artifactId>
  <executions>
    <execution>
      <id>copy-dependencies</id>
      <phase>package</phase>
      <goals>
        <goal>copy-dependencies</goal>
      </goals>
      <configuration>
        <outputDirectory>${project.build.directory}/lib</outputDirectory>
        <includeScope>runtime</includeScope>
      </configuration>
    </execution>
  </executions>
</plugin>
```

### 4、打包目录

```text
target/
|-- config/    # 配置文件
|-- lib/       # 依赖库
|-- app.jar    # 可执行 JAR 文件
```

> 启动命令示例：

```shell
java -jar -Dloader.path=./lib app.jar
```

## Maven Jar Plugin （⭐）

### 1、配置文件打包到 config 目录

```xml

<plugin>
  <groupId>org.apache.maven.plugins</groupId>
  <artifactId>maven-resources-plugin</artifactId>
  <executions>
    <execution>
      <id>copy-configs</id>
      <phase>package</phase>
      <goals>
        <goal>copy-resources</goal>
      </goals>
      <configuration>
        <outputDirectory>${project.build.directory}/config</outputDirectory>
        <resources>
          <resource>
            <directory>src/main/resources</directory>
          </resource>
        </resources>
      </configuration>
    </execution>
  </executions>
</plugin>
```

### 2、排除依赖库，仅打包可执行 JAR

```xml

<plugin>
  <groupId>org.apache.maven.plugins</groupId>
  <artifactId>maven-jar-plugin</artifactId>
  <configuration>
    <outputDirectory>${project.build.directory}/app</outputDirectory>
    <archive>
      <manifest>
        <mainClass>com.haijunit.Application</mainClass>
        <addClasspath>true</addClasspath>
        <classpathPrefix>./libs/</classpathPrefix>
      </manifest>
      <manifestEntries>
        <Class-Path>./config/</Class-Path>
      </manifestEntries>
    </archive>
    <excludes>
      <exclude>*.yml</exclude>
      <exclude>mapper/**</exclude>
    </excludes>
  </configuration>
</plugin>
```

### 3、依赖库打包到 lib 目录

```xml

<plugin>
  <groupId>org.apache.maven.plugins</groupId>
  <artifactId>maven-dependency-plugin</artifactId>
  <executions>
    <execution>
      <id>copy-dependencies</id>
      <phase>package</phase>
      <goals>
        <goal>copy-dependencies</goal>
      </goals>
      <configuration>
        <outputDirectory>${project.build.directory}/app/libs</outputDirectory>
        <includeScope>runtime</includeScope>
      </configuration>
    </execution>
  </executions>
</plugin>
```

## 完整示例

### pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>top.haijunit</groupId>
  <artifactId>spring-demo</artifactId>
  <version>1.0.0-SNAPSHOT</version>
  <name>spring-demo</name>
  <description>Spring Boot 示例配置</description>
  <url/>
  <licenses>
    <license/>
  </licenses>
  <developers>
    <developer/>
  </developers>
  <scm>
    <connection/>
    <developerConnection/>
    <tag/>
    <url/>
  </scm>
  <properties>
    <java.version>17</java.version>
  </properties>
  <dependencies>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
      <groupId>org.projectlombok</groupId>
      <artifactId>lombok</artifactId>
      <optional>true</optional>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-test</artifactId>
      <scope>test</scope>
    </dependency>
    <!-- SpringBoot的依赖配置-->
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-dependencies</artifactId>
      <version>3.4.1</version>
      <type>pom</type>
      <scope>import</scope>
    </dependency>
    <!-- knife4j 文档 https://doc.xiaominfo.com/ -->
    <dependency>
      <groupId>com.github.xiaoymin</groupId>
      <artifactId>knife4j-dependencies</artifactId>
      <version>4.5.0</version>
      <type>pom</type>
      <scope>import</scope>
    </dependency>
    <!-- hutool 的依赖配置 https://hutool.cn/ -->
    <dependency>
      <groupId>cn.hutool</groupId>
      <artifactId>hutool-bom</artifactId>
      <version>5.8.26</version>
      <type>pom</type>
      <scope>import</scope>
    </dependency>
  </dependencies>
  <profiles>
    <profile>
      <id>develop</id>
      <activation>
        <activeByDefault>true</activeByDefault>
      </activation>
    </profile>
    <profile>
      <id>release</id>
      <build>
        <plugins>
          <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <version>3.13.0</version>
            <configuration>
              <skip>true</skip>
              <source>${java.version}</source>
              <target>${java.version}</target>
              <encoding>${project.build.sourceEncoding}</encoding>
            </configuration>
          </plugin>
          <!-- Source -->
          <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-source-plugin</artifactId>
            <version>3.3.1</version>
            <executions>
              <execution>
                <phase>package</phase>
                <goals>
                  <goal>jar-no-fork</goal>
                </goals>
              </execution>
            </executions>
          </plugin>
          <!-- javadoc -->
          <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-javadoc-plugin</artifactId>
            <version>3.3.2</version>
            <configuration>
              <failOnError>false</failOnError>
            </configuration>
            <executions>
              <execution>
                <id>attach-javadocs</id>
                <goals>
                  <goal>jar</goal>
                </goals>
              </execution>
            </executions>
          </plugin>
          <!-- GPG -->
          <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-gpg-plugin</artifactId>
            <version>3.2.7</version>
            <executions>
              <execution>
                <phase>verify</phase>
                <goals>
                  <goal>sign</goal>
                </goals>
              </execution>
            </executions>
          </plugin>
        </plugins>
      </build>
    </profile>
  </profiles>
  <build>
    <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-compiler-plugin</artifactId>
        <configuration>
          <annotationProcessorPaths>
            <path>
              <groupId>org.projectlombok</groupId>
              <artifactId>lombok</artifactId>
            </path>
          </annotationProcessorPaths>
        </configuration>
      </plugin>
      <plugin>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-maven-plugin</artifactId>
        <configuration>
          <excludes>
            <exclude>
              <groupId>org.projectlombok</groupId>
              <artifactId>lombok</artifactId>
            </exclude>
          </excludes>
        </configuration>
      </plugin>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-assembly-plugin</artifactId>
        <executions>
          <execution>
            <id>make-assembly</id>
            <phase>package</phase>
            <goals>
              <goal>single</goal>
            </goals>
            <configuration>
              <descriptors>
                <descriptor>src/main/assembly/assembly.xml</descriptor>
              </descriptors>
            </configuration>
          </execution>
        </executions>
      </plugin>
    </plugins>
  </build>
</project>

```

### docker运行

```yaml
version: '3'

services:
  db:
    image: mariadb:10.5
    restart: always
    volumes:
      - ./db/data:/var/lib/mysql
      - ./db/init:/docker-entrypoint-initdb.d
      - ./db/logs:/var/log/mysql
    environment:
      MYSQL_ROOT_PASSWORD: admin@123
      MYSQL_DATABASE: db_navi
      MYSQL_USER: navi
      MYSQL_PASSWORD: admin@123
      MYSQL_ROOT_HOST: '%'
    ports:
      - "3306:3306"
    healthcheck:
      test: [ "CMD", "mysqladmin" ,"ping", "-h", "localhost" ]
      interval: 5s
      timeout: 10s
      retries: 10

  redis:
    image: redis
    restart: always
    ports:
      - "6379:6379"
    volumes:
      - ./redis/data:/data
      - ./redis/conf/redis.conf:/usr/local/etc/redis/redis.conf
    command: redis-server /usr/local/etc/redis/redis.conf
    environment:
      REDIS_PASSWORD: admin@123
    healthcheck:
      test: [ "CMD", "redis-cli" ,"ping" ]
      interval: 5s
      timeout: 10s
      retries: 10

  server:
    image: navi-server
    restart: always
    ports:
      - "8080:8080"
    environment:
      DB_HOST: db
      DB_PORT: 3306
      DB_USER: navi
      DB_PASS: admin@123
      DB_DATABASE: db_navi
      REDIS_HOST: redis
      REDIS_PORT: 6379
      REDIS_PASSWORD: admin@123
    volumes:
      - ./server/config:/app/config
      - ./server/logs:/app/logs
    depends_on:
      - db
      - redis
    healthcheck:
      test: [ "CMD", "curl" ,"-f", "http://localhost:8080/healthz" ]
      interval: 5s
      timeout: 10s
      retries: 10

  web:
    image: nginx:1.21
    restart: always
    ports:
      - "80:80"
      - "443:443"
    depends_on:
      - server
    volumes:
      - ./web/certs:/etc/nginx/ssl
      - ./web/conf:/etc/nginx/conf.d
      - ./web/logs:/var/log/nginx
      - ./web/html:/usr/share/nginx/html
    healthcheck:
      test: [ "CMD", "curl" ,"-f", "https://localhost/" ]
      interval: 5s
      timeout: 10s
      retries: 10
```
