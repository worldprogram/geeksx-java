# Java集合面试题

## 集合概述

### 数组到底是不是对象？

先说说对象的概念。对象是根据某个类创建的一个实例，表示某类事物中一个具体的个体。
对象具有各种属性，并且具有一些特定的行为。
站在计算机的角度，对象就是内存中的一个内存块，在这个内存块封装了一些数据，也就是类中定义的各个属性。
所以，对象是用来封装数据的。
java中的数组具有java中其他对象的一些基本特点。比如封装了一些数据，可以访问属性，也可以调用方法。
因此，可以说，数组是对象。
也可以通过代码验证数组是对象的事实。

```java
public class ArrayIsObject {
    public static void main(String[] args) {
        int[] arr = new int[10];
        System.out.println(arr instanceof Object); // true
    }
}
```

### 为什么使用基本类型数组进行Arrays.sort时不能自定义比较器？

Arrays.sort()默认是升序排序，如果要降序排序，需要自定义比较起

Arrays.sort()有多个重载版本，其中针对基本类型数组的版本不接受自定义比较器
具体来说，Arrays.sort有以下几种主要的重载方法

1. `Arrays.sort(int[] a)` : 用于排序`int`数组，按自然顺序排序，不接受比较器
2. `Arrays.sort(T[] a, Comparator<? super T> c)`:用于排序泛型对象数组，按自定义比较起排序

**根本原因**：Comparator 是泛型接口，而泛型不能使用基本类型，因此 Arrays.sort(primitive[], Comparator) 在类型系统层面就不可能存在。

### Comparator和Comparable有什么区别？

Comparator和Comparable都是Java中用于对象排序的接口，它们之间有一下关键的区别。

Comparable接口是在对象自身的类中实现的，它定义了对象的自然排序方式。一个类实现类Comparable接口后，可以使用compareTo方法来比较当前对象和其他对象的大小关系。这个接口只能在对象自身的类中实现，不需要额外的比较器。

Comparator接口是一个独立的比较起，它可以用于对不同类的对象进行排序。Comparator接口允许在对象类之外创建一个单独的比较器或匿名类，并使用它来定义对象的排序规则。比较器通过实现compare()方法来比较两个对象的大小关系。

因此，主要区别如下：

- Comparable接口是在对象自身的类中实现，定义了对象的自然排序方式。
- Comparator接口是一个单独的比较器，定义了用于排序的规则，可以用于不同类的对象排序。
- Comparable是内部排序，对象的类必须实现Comparable接口才能进行排序。
- Comparator是外部排序，可以定义独立的规则，并与任何类的对象一起使用

在使用时，如果需要对对象的默认排序进行操作，可以实现Comparable接口，并重写compareTo()方法。如果需要自定义排序规则，则需要定义一个比较器，并实现Comparator接口，并重写compare()方法。

### Java中的集合框架有哪些核心接口？有什么区别？

Java中的集合提供了一组接口和类，用于存储和操作数据集合。其中一些核心接口包括：

- `Collection`：这是最基本的集合接口，它定义了集合的基本操作，如添加、删除、遍历等。
- `List`：这是继承自Collection的接口，它定义了列表（有序的）操作，如获取索引位置的元素、设置索引位置的元素、获取列表的长度等。
- `Set`：这是继承自Collection的接口，它定义了集合中的元素不重复，即不允许重复元素。
- `Map`：这是继承自Collection的接口，它定义了键值对（键-值）的集合，如获取键对应的值、判断键是否存在、获取键值对个数等。
- `Queue`：这是继承自Collection的接口，它定义了队列操作，如添加元素、移除元素、获取队列长度等。

### 常见的集合有哪些？

Java集合类主要由两个接口Collection和Map派生出来的，Collection有三个子接口List、Set和Queue，而Map有HashMap、LinkedHashMap、TreeMap、Hashtable、Properties等。
![alt text](./image-2.png)
![alt text](./image-3.png)

### 集合框架底层数据结构总结

#### List

- ArrayList: Object[] 数组
- Vector: Object[] 数组
- LinkedList: 双向链表

#### Queue

- ProrityQueue: Object[] 数组来实现小顶堆
- ArrayDeque: 可扩容动态双向数组
-

#### Set

- HashSet: 无序、唯一，基于HashMap实现，底层采用HashMap存储元素
- LinkedHashSet: 唯一、有序，基于LinkedHashMap实现，底层采用LinkedHashMap存储元素
- TreeSet: 有序、唯一，基于红黑树实现，底层采用红黑树存储元素

#### Map

- HashMap: 基于哈希表实现，键值对存储，不保证有序
- LinkedHashMap: 基于哈希表和链表实现，键值对存储，有序
- TreeMap: 基于红黑树实现，键值对存储，有序
- Hashtable: 基于哈希表实现，键值对存储，不保证有序

#### 并发容器

- CopyOnWriteArrayList: 线程安全的 ArrayList,`CopyOnWriteArrayList`是读写分离的,好处是提高线程访问效率。
- ConcurrentHashMap: 是一个支持高并发更新与查询的哈希表
- ConcurrentLinkedQueue: 线程安全的队列，基于链表实现，FIFO
- BlockingQueue: 阻塞队列，线程安全的队列，支持阻塞操作，如 take()、put()

### 如何选用集合？

主要根据集合的特点来选择合适的集合。

- 如果需要存储唯一的元素，且不要求有序，则使用 HashSet。
- 如果需要存储唯一的元素，且要求有序，则使用 LinkedHashSet。
- 如果需要根据元素的自然顺序排序，则使用 TreeSet。
- 如果需要存储键值对，且不要求有序，则使用 HashMap。
- 如果需要存储键值对，且要求有序，则使用 LinkedHashMap。
- 如果需要根据键的自然顺序排序，则使用 TreeMap。
- 如果需要线程安全的哈希表，则使用 ConcurrentHashMap。
- 如果需要线程安全的队列，则使用 ConcurrentLinkedQueue 或 BlockingQueue。
- 如果需要读写分离的线程安全的列表，则使用 CopyOnWriteArrayList。

## List

### ArrayList了解吗？
