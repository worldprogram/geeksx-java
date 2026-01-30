---
title: P2-Java进阶修炼
---

# ⚔️ Java 进阶修炼计划（60天）

适合已掌握基础语法的同学，深入理解 Java 底层机制与高级特性。

## 第 1-2 周：并发编程

- **目标**: 理解 JMM，掌握线程安全与高并发处理
- **内容**:
  - 线程基础：生命周期、Thread 方法、中断
  - 线程安全：synchronized、volatile、CAS、Atomic 类
  - 锁机制：ReentrantLock、ReadWriteLock、Condition
  - 并发工具：CountDownLatch、CyclicBarrier、Semaphore
  - 线程池：ThreadPoolExecutor 参数详解、拒绝策略、Executors 陷阱
  - 并发容器：ConcurrentHashMap、BlockingQueue

## 第 3-4 周：JVM 深入

- **目标**: 理解内存模型、GC 机制与性能调优
- **内容**:
  - 内存结构：堆、栈、方法区、程序计数器
  - 类加载机制：双亲委派、自定义类加载器
  - 垃圾回收：GC 算法（标记-清除/复制/整理）、垃圾收集器（CMS/G1/ZGC）
  - 性能调优：JVM 参数设置、OOM 排查、VisualVM/Arthas 使用

## 第 5 周：网络编程与 Netty

- **目标**: 掌握网络通信原理与高性能 IO
- **内容**:
  - 网络基础：TCP/IP、HTTP、Socket
  - IO 模型：BIO、NIO、AIO 区别与原理
  - Netty 入门：Reactor 模型、Bootstrap、Channel、Handler
  - 实战：基于 Netty 实现简单的 RPC 框架或 HTTP 服务器

## 第 6 周：设计模式

- **目标**: 提升代码设计能力
- **内容**:
  - 创建型：单例（5种写法）、工厂（简单/方法/抽象）、建造者
  - 结构型：适配器、装饰器、代理（JDK/CGLIB 动态代理）
  - 行为型：策略、模板方法、观察者、责任链

## 第 7-8 周：综合强化与源码阅读

- **目标**: 融会贯通，从源码中学习
- **内容**:
  - 阅读 JDK 源码：String、ArrayList、HashMap、AQS
  - 阅读 Spring 核心源码（IoC/AOP 流程）
  - **期末项目**: 手写一个简易版 Spring 框架或 RPC 框架

## ✅ 验收标准

1. 能手写 DCL 单例与阻塞队列
2. 能分析 GC 日志并进行简单调优
3. 能说出 HashMap 扩容机制与 ConcurrentHashMap 线程安全原理
4. 完成一个具有一定技术深度的造轮子项目
