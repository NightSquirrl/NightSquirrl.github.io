import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,a as p}from"./app-jzX7c5DY.js";const t={},e=p(`<h1 id="常见的七种查找算法" tabindex="-1"><a class="header-anchor" href="#常见的七种查找算法"><span>常见的七种查找算法：</span></a></h1><p>​ 数据结构是数据存储的方式，算法是数据计算的方式。所以在开发中，算法和数据结构息息相关。今天的讲义中会涉及部分数据结构的专业名词，如果各位铁粉有疑惑，可以先看一下哥们后面录制的数据结构，再回头看算法。</p><h2 id="_1-基本查找" tabindex="-1"><a class="header-anchor" href="#_1-基本查找"><span>1. 基本查找</span></a></h2><p>​ 也叫做顺序查找</p><p>​ 说明：顺序查找适合于存储结构为数组或者链表。</p><p><strong>基本思想</strong>：顺序查找也称为线形查找，属于无序查找算法。从数据结构线的一端开始，顺序扫描，依次将遍历到的结点与要查找的值相比较，若相等则表示查找成功；若遍历结束仍没有找到相同的，表示查找失败。</p><p>示例代码：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">A01_BasicSearchDemo1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//基本查找/顺序查找</span>
        <span class="token comment">//核心：</span>
        <span class="token comment">//从0索引开始挨个往后查找</span>

        <span class="token comment">//需求：定义一个方法利用基本查找，查询某个元素是否存在</span>
        <span class="token comment">//数据如下：{131, 127, 147, 81, 103, 23, 7, 79}</span>


        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">131</span><span class="token punctuation">,</span> <span class="token number">127</span><span class="token punctuation">,</span> <span class="token number">147</span><span class="token punctuation">,</span> <span class="token number">81</span><span class="token punctuation">,</span> <span class="token number">103</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">79</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> number <span class="token operator">=</span> <span class="token number">82</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">basicSearch</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> number<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token comment">//参数：</span>
    <span class="token comment">//一：数组</span>
    <span class="token comment">//二：要查找的元素</span>

    <span class="token comment">//返回值：</span>
    <span class="token comment">//元素是否存在</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">basicSearch</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">,</span> <span class="token keyword">int</span> number<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//利用基本查找来查找number在数组中是否存在</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> number<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-二分查找" tabindex="-1"><a class="header-anchor" href="#_2-二分查找"><span>2. 二分查找</span></a></h2><p>​ 也叫做折半查找</p><p>说明：元素必须是有序的，从小到大，或者从大到小都是可以的。</p><p>如果是无序的，也可以先进行排序。但是排序之后，会改变原有数据的顺序，查找出来元素位置跟原来的元素可能是不一样的，所以排序之后再查找只能判断当前数据是否在容器当中，返回的索引无实际的意义。</p><p><strong>基本思想</strong>：也称为是折半查找，属于有序查找算法。用给定值先与中间结点比较。比较完之后有三种情况：</p><ul><li><p>相等</p><p>说明找到了</p></li><li><p>要查找的数据比中间节点小</p><p>说明要查找的数字在中间节点左边</p></li><li><p>要查找的数据比中间节点大</p><p>说明要查找的数字在中间节点右边</p></li></ul><p>代码示例：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>itheima<span class="token punctuation">.</span>search</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">A02_BinarySearchDemo1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//二分查找/折半查找</span>
        <span class="token comment">//核心：</span>
        <span class="token comment">//每次排除一半的查找范围</span>

        <span class="token comment">//需求：定义一个方法利用二分查找，查询某个元素在数组中的索引</span>
        <span class="token comment">//数据如下：{7, 23, 79, 81, 103, 127, 131, 147}</span>

        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">79</span><span class="token punctuation">,</span> <span class="token number">81</span><span class="token punctuation">,</span> <span class="token number">103</span><span class="token punctuation">,</span> <span class="token number">127</span><span class="token punctuation">,</span> <span class="token number">131</span><span class="token punctuation">,</span> <span class="token number">147</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">binarySearch</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">,</span> <span class="token keyword">int</span> number<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//1.定义两个变量记录要查找的范围</span>
        <span class="token keyword">int</span> min <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> max <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

        <span class="token comment">//2.利用循环不断的去找要查找的数据</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>min <span class="token operator">&gt;</span> max<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">//3.找到min和max的中间位置</span>
            <span class="token keyword">int</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span>min <span class="token operator">+</span> max<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
            <span class="token comment">//4.拿着mid指向的元素跟要查找的元素进行比较</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;</span> number<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">//4.1 number在mid的左边</span>
                <span class="token comment">//min不变，max = mid - 1；</span>
                max <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> number<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">//4.2 number在mid的右边</span>
                <span class="token comment">//max不变，min = mid + 1;</span>
                min <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                <span class="token comment">//4.3 number跟mid指向的元素一样</span>
                <span class="token comment">//找到了</span>
                <span class="token keyword">return</span> mid<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-插值查找" tabindex="-1"><a class="header-anchor" href="#_3-插值查找"><span>3. 插值查找</span></a></h2><p>在介绍插值查找之前，先考虑一个问题：</p><p>​ 为什么二分查找算法一定要是折半，而不是折四分之一或者折更多呢？</p><p>其实就是因为方便，简单，但是如果我能在二分查找的基础上，让中间的mid点，尽可能靠近想要查找的元素，那不就能提高查找的效率了吗？</p><p>二分查找中查找点计算如下：</p><p>mid=(low+high)/2, 即mid=low+1/2*(high-low);</p><p>我们可以将查找的点改进为如下：</p><p>mid=low+(key-a[low])/(a[high]-a[low])*(high-low)，</p><p>这样，让mid值的变化更靠近关键字key，这样也就间接地减少了比较次数。</p><p>基本思想：基于二分查找算法，将查找点的选择改进为自适应选择，可以提高查找效率。当然，差值查找也属于有序查找。</p><p>**细节：**对于表长较大，而关键字分布又比较均匀的查找表来说，插值查找算法的平均性能比折半查找要好的多。反之，数组中如果分布非常不均匀，那么插值查找未必是很合适的选择。</p><p>代码跟二分查找类似，只要修改一下mid的计算方式即可。</p><h2 id="_4-斐波那契查找" tabindex="-1"><a class="header-anchor" href="#_4-斐波那契查找"><span>4. 斐波那契查找</span></a></h2><p>在介绍斐波那契查找算法之前，我们先介绍一下很它紧密相连并且大家都熟知的一个概念——黄金分割。</p><p>黄金比例又称黄金分割，是指事物各部分间一定的数学比例关系，即将整体一分为二，较大部分与较小部分之比等于整体与较大部分之比，其比值约为1:0.618或1.618:1。</p><p>0.618被公认为最具有审美意义的比例数字，这个数值的作用不仅仅体现在诸如绘画、雕塑、音乐、建筑等艺术领域，而且在管理、工程设计等方面也有着不可忽视的作用。因此被称为黄金分割。</p><p>在数学中有一个非常有名的数学规律：斐波那契数列：1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89…….</p><p>（从第三个数开始，后边每一个数都是前两个数的和）。</p><p>然后我们会发现，随着斐波那契数列的递增，前后两个数的比值会越来越接近0.618，利用这个特性，我们就可以将黄金比例运用到查找技术中。</p><figure><img src="https://img.picgo.net/2023/11/06/image-2023110618502100014a6fbd79890bc08.png" alt="image-20231106185021000" tabindex="0" loading="lazy"><figcaption>image-20231106185021000</figcaption></figure><p>基本思想：也是二分查找的一种提升算法，通过运用黄金比例的概念在数列中选择查找点进行查找，提高查找效率。同样地，斐波那契查找也属于一种有序查找算法。</p><p>斐波那契查找也是在二分查找的基础上进行了优化，优化中间点mid的计算方式即可</p><p>代码示例：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FeiBoSearchDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> maxSize <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">89</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">1234</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">search</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">1234</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getFeiBo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>maxSize<span class="token punctuation">]</span><span class="token punctuation">;</span>
        arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> maxSize<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> arr<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> arr<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">search</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">,</span> <span class="token keyword">int</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> low <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> high <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token comment">//表示斐波那契数分割数的下标值</span>
        <span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> mid <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token comment">//调用斐波那契数列</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> f <span class="token operator">=</span> <span class="token function">getFeiBo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//获取斐波那契分割数值的下标</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>high <span class="token operator">&gt;</span> <span class="token punctuation">(</span>f<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            index<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//因为f[k]值可能大于a的长度，因此需要使用Arrays工具类，构造一个新法数组，并指向temp[],不足的部分会使用0补齐</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> temp <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> f<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//实际需要使用arr数组的最后一个数来填充不足的部分</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> high <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> temp<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            temp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>high<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//使用while循环处理，找到key值</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>low <span class="token operator">&lt;=</span> high<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            mid <span class="token operator">=</span> low <span class="token operator">+</span> f<span class="token punctuation">[</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">&lt;</span> temp<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//向数组的前面部分进行查找</span>
                high <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token comment">/*
                  对k--进行理解
                  1.全部元素=前面的元素+后面的元素
                  2.f[k]=k[k-1]+f[k-2]
                  因为前面有k-1个元素没所以可以继续分为f[k-1]=f[k-2]+f[k-3]
                  即在f[k-1]的前面继续查找k--
                  即下次循环,mid=f[k-1-1]-1
                 */</span>
                index<span class="token operator">--</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">&gt;</span> temp<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//向数组的后面的部分进行查找</span>
                low <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
                index <span class="token operator">-=</span> <span class="token number">2</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span><span class="token comment">//找到了</span>
                <span class="token comment">//需要确定返回的是哪个下标</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>mid <span class="token operator">&lt;=</span> high<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> mid<span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> high<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-分块查找" tabindex="-1"><a class="header-anchor" href="#_5-分块查找"><span>5. 分块查找</span></a></h2><p>当数据表中的数据元素很多时，可以采用分块查找。</p><p>汲取了顺序查找和折半查找各自的优点，既有动态结构，又适于快速查找</p><p>分块查找适用于数据较多，但是数据不会发生变化的情况，如果需要一边添加一边查找，建议使用哈希查找</p><p>分块查找的过程：</p><ol><li>需要把数据分成N多小块，块与块之间不能有数据重复的交集。</li><li>给每一块创建对象单独存储到数组当中</li><li>查找数据的时候，先在数组查，当前数据属于哪一块</li><li>再到这一块中顺序查找</li></ol><p>代码示例：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>itheima<span class="token punctuation">.</span>search</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">A03_BlockSearchDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">/*
            分块查找
            核心思想：
                块内无序，块间有序
            实现步骤：
                1.创建数组blockArr存放每一个块对象的信息
                2.先查找blockArr确定要查找的数据属于哪一块
                3.再单独遍历这一块数据即可
        */</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span><span class="token number">21</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span>
                     <span class="token number">32</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">37</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">,</span> <span class="token number">45</span><span class="token punctuation">,</span> <span class="token number">34</span><span class="token punctuation">,</span>
                     <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">48</span><span class="token punctuation">,</span> <span class="token number">61</span><span class="token punctuation">,</span> <span class="token number">52</span><span class="token punctuation">,</span> <span class="token number">73</span><span class="token punctuation">,</span> <span class="token number">66</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token comment">//创建三个块的对象</span>
        <span class="token class-name">Block</span> b1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Block</span><span class="token punctuation">(</span><span class="token number">21</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Block</span> b2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Block</span><span class="token punctuation">(</span><span class="token number">45</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Block</span> b3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Block</span><span class="token punctuation">(</span><span class="token number">73</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token number">17</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//定义数组用来管理三个块的对象（索引表）</span>
        <span class="token class-name">Block</span><span class="token punctuation">[</span><span class="token punctuation">]</span> blockArr <span class="token operator">=</span> <span class="token punctuation">{</span>b1<span class="token punctuation">,</span>b2<span class="token punctuation">,</span>b3<span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token comment">//定义一个变量用来记录要查找的元素</span>
        <span class="token keyword">int</span> number <span class="token operator">=</span> <span class="token number">37</span><span class="token punctuation">;</span>

        <span class="token comment">//调用方法，传递索引表，数组，要查找的元素</span>
        <span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token function">getIndex</span><span class="token punctuation">(</span>blockArr<span class="token punctuation">,</span>arr<span class="token punctuation">,</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//打印一下</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>



    <span class="token punctuation">}</span>

    <span class="token comment">//利用分块查找的原理，查询number的索引</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">getIndex</span><span class="token punctuation">(</span><span class="token class-name">Block</span><span class="token punctuation">[</span><span class="token punctuation">]</span> blockArr<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">,</span> <span class="token keyword">int</span> number<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//1.确定number是在那一块当中</span>
        <span class="token keyword">int</span> indexBlock <span class="token operator">=</span> <span class="token function">findIndexBlock</span><span class="token punctuation">(</span>blockArr<span class="token punctuation">,</span> number<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span>indexBlock <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//表示number不在数组当中</span>
            <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">//2.获取这一块的起始索引和结束索引   --- 30</span>
        <span class="token comment">// Block b1 = new Block(21,0,5);   ----  0</span>
        <span class="token comment">// Block b2 = new Block(45,6,11);  ----  1</span>
        <span class="token comment">// Block b3 = new Block(73,12,17); ----  2</span>
        <span class="token keyword">int</span> startIndex <span class="token operator">=</span> blockArr<span class="token punctuation">[</span>indexBlock<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">getStartIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> endIndex <span class="token operator">=</span> blockArr<span class="token punctuation">[</span>indexBlock<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">getEndIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//3.遍历</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> startIndex<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> endIndex<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> number<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> i<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token comment">//定义一个方法，用来确定number在哪一块当中</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">findIndexBlock</span><span class="token punctuation">(</span><span class="token class-name">Block</span><span class="token punctuation">[</span><span class="token punctuation">]</span> blockArr<span class="token punctuation">,</span><span class="token keyword">int</span> number<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//100</span>


        <span class="token comment">//从0索引开始遍历blockArr，如果number小于max，那么就表示number是在这一块当中的</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> blockArr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>number <span class="token operator">&lt;=</span> blockArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">getMax</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> i<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>



<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Block</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> max<span class="token punctuation">;</span><span class="token comment">//最大值</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> startIndex<span class="token punctuation">;</span><span class="token comment">//起始索引</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> endIndex<span class="token punctuation">;</span><span class="token comment">//结束索引</span>


    <span class="token keyword">public</span> <span class="token class-name">Block</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Block</span><span class="token punctuation">(</span><span class="token keyword">int</span> max<span class="token punctuation">,</span> <span class="token keyword">int</span> startIndex<span class="token punctuation">,</span> <span class="token keyword">int</span> endIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>max <span class="token operator">=</span> max<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>startIndex <span class="token operator">=</span> startIndex<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>endIndex <span class="token operator">=</span> endIndex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取
     * <span class="token keyword">@return</span> max
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getMax</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> max<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 设置
     * <span class="token keyword">@param</span> <span class="token parameter">max</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setMax</span><span class="token punctuation">(</span><span class="token keyword">int</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>max <span class="token operator">=</span> max<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取
     * <span class="token keyword">@return</span> startIndex
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getStartIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> startIndex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 设置
     * <span class="token keyword">@param</span> <span class="token parameter">startIndex</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setStartIndex</span><span class="token punctuation">(</span><span class="token keyword">int</span> startIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>startIndex <span class="token operator">=</span> startIndex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取
     * <span class="token keyword">@return</span> endIndex
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getEndIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> endIndex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 设置
     * <span class="token keyword">@param</span> <span class="token parameter">endIndex</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setEndIndex</span><span class="token punctuation">(</span><span class="token keyword">int</span> endIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>endIndex <span class="token operator">=</span> endIndex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Block{max = &quot;</span> <span class="token operator">+</span> max <span class="token operator">+</span> <span class="token string">&quot;, startIndex = &quot;</span> <span class="token operator">+</span> startIndex <span class="token operator">+</span> <span class="token string">&quot;, endIndex = &quot;</span> <span class="token operator">+</span> endIndex <span class="token operator">+</span> <span class="token string">&quot;}&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-哈希查找" tabindex="-1"><a class="header-anchor" href="#_6-哈希查找"><span>6. 哈希查找</span></a></h2><p>哈希查找是分块查找的进阶版，适用于数据一边添加一边查找的情况。</p><p>一般是数组 + 链表的结合体或者是数组+链表 + 红黑树的结合体</p><p>在课程中，为了让大家方便理解，所以规定：</p><ul><li>数组的0索引处存储1~100</li><li>数组的1索引处存储101~200</li><li>数组的2索引处存储201~300</li><li>以此类推</li></ul><p>但是实际上，我们一般不会采取这种方式，因为这种方式容易导致一块区域添加的元素过多，导致效率偏低。</p><p>更多的是先计算出当前数据的哈希值，用哈希值跟数组的长度进行计算，计算出应存入的位置，再挂在数组的后面形成链表，如果挂的元素太多而且数组长度过长，我们也会把链表转化为红黑树，进一步提高效率。</p><p>具体的过程，大家可以参见B站阿玮讲解课程：从入门到起飞。在集合章节详细讲解了哈希表的数据结构。全程采取动画形式讲解，让大家一目了然。</p><p>在此不多做阐述。</p><h2 id="_7-树表查找" tabindex="-1"><a class="header-anchor" href="#_7-树表查找"><span>7. 树表查找</span></a></h2><p>本知识点涉及到数据结构：树。</p><p>建议先看一下后面阿玮讲解的数据结构，再回头理解。</p><p>基本思想：二叉查找树是先对待查找的数据进行生成树，确保树的左分支的值小于右分支的值，然后在就行和每个节点的父节点比较大小，查找最适合的范围。 这个算法的查找效率很高，但是如果使用这种查找方法要首先创建树。</p><p>二叉查找树（BinarySearch Tree，也叫二叉搜索树，或称二叉排序树Binary Sort Tree），具有下列性质的二叉树：</p><p>1）若任意节点左子树上所有的数据，均小于本身；</p><p>2）若任意节点右子树上所有的数据，均大于本身；</p><p>二叉查找树性质：对二叉查找树进行中序遍历，即可得到有序的数列。</p><p>​ 不同形态的二叉查找树如下图所示：</p><figure><img src="https://img.picgo.net/2023/11/06/image-202311061857065633acf386ac196f711.png" alt="image-20231106185706563" tabindex="0" loading="lazy"><figcaption>image-20231106185706563</figcaption></figure><p>基于二叉查找树进行优化，进而可以得到其他的树表查找算法，如平衡树、红黑树等高效算法。</p><p>具体细节大家可以参见B站阿玮讲解课程：从入门到起飞。在集合章节详细讲解了树数据结构。全程采取动画形式讲解，让大家一目了然。</p><p>在此不多做阐述。</p><p>​ 不管是二叉查找树，还是平衡二叉树，还是红黑树，查找的性能都比较高</p><h1 id="十大排序算法" tabindex="-1"><a class="header-anchor" href="#十大排序算法"><span>十大排序算法：</span></a></h1><h2 id="_1-冒泡排序" tabindex="-1"><a class="header-anchor" href="#_1-冒泡排序"><span>1. 冒泡排序</span></a></h2><p>冒泡排序（Bubble Sort）也是一种简单直观的排序算法。</p><p>它重复的遍历过要排序的数列，一次比较相邻的两个元素，如果他们的顺序错误就把他们交换过来。</p><p>这个算法的名字由来是因为越大的元素会经由交换慢慢&quot;浮&quot;到最后面。</p><p>当然，大家可以按照从大到小的方式进行排列。</p><h3 id="_1-1-算法步骤" tabindex="-1"><a class="header-anchor" href="#_1-1-算法步骤"><span>1.1 算法步骤</span></a></h3><ol><li>相邻的元素两两比较，大的放右边，小的放左边</li><li>第一轮比较完毕之后，最大值就已经确定，第二轮可以少循环一次，后面以此类推</li><li>如果数组中有n个数据，总共我们只要执行n-1轮的代码就可以</li></ol><h3 id="_1-2-动图演示" tabindex="-1"><a class="header-anchor" href="#_1-2-动图演示"><span>1.2 动图演示</span></a></h3><figure><img src="https://img.picgo.net/2023/11/06/945f6e80c54e560535f4d2207e4d55b352d36768d371d208.gif" alt="冒泡" tabindex="0" loading="lazy"><figcaption>冒泡</figcaption></figure><h3 id="_1-3-代码示例" tabindex="-1"><a class="header-anchor" href="#_1-3-代码示例"><span>1.3 代码示例</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">A01_BubbleDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">/*
            冒泡排序：
            核心思想：
            1，相邻的元素两两比较，大的放右边，小的放左边。
            2，第一轮比较完毕之后，最大值就已经确定，第二轮可以少循环一次，后面以此类推。
            3，如果数组中有n个数据，总共我们只要执行n-1轮的代码就可以。
        */</span>


        <span class="token comment">//1.定义数组</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token comment">//2.利用冒泡排序将数组中的数据变成 1 2 3 4 5</span>

        <span class="token comment">//外循环：表示我要执行多少轮。 如果有n个数据，那么执行n - 1 轮</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//内循环：每一轮中我如何比较数据并找到当前的最大值</span>
            <span class="token comment">//-1：为了防止索引越界</span>
            <span class="token comment">//-i：提高效率，每一轮执行的次数应该比上一轮少一次。</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//i 依次表示数组中的每一个索引：0 1 2 3 4</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token keyword">int</span> temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
                    arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                    arr<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token function">printArr</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>




    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">printArr</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//3.遍历数组</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-选择排序" tabindex="-1"><a class="header-anchor" href="#_2-选择排序"><span>2. 选择排序</span></a></h2><h3 id="_2-1-算法步骤" tabindex="-1"><a class="header-anchor" href="#_2-1-算法步骤"><span>2.1 算法步骤</span></a></h3><ol><li>从0索引开始，跟后面的元素一一比较</li><li>小的放前面，大的放后面</li><li>第一次循环结束后，最小的数据已经确定</li><li>第二次循环从1索引开始以此类推</li><li>第三轮循环从2索引开始以此类推</li><li>第四轮循环从3索引开始以此类推。</li></ol><h3 id="_2-2-动图演示" tabindex="-1"><a class="header-anchor" href="#_2-2-动图演示"><span>2.2 动图演示</span></a></h3><figure><img src="https://img.picgo.net/2023/11/06/945f6e80c54e560535f4d2207e4d55b352d36768d371d208.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">A02_SelectionDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">/*
            选择排序：
                1，从0索引开始，跟后面的元素一一比较。
                2，小的放前面，大的放后面。
                3，第一次循环结束后，最小的数据已经确定。
                4，第二次循环从1索引开始以此类推。

         */</span>


        <span class="token comment">//1.定义数组</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>


        <span class="token comment">//2.利用选择排序让数组变成 1 2 3 4 5</span>
       <span class="token comment">/* //第一轮：
        //从0索引开始，跟后面的元素一一比较。
        for (int i = 0 + 1; i &lt; arr.length; i++) {
            //拿着0索引跟后面的数据进行比较
            if(arr[0] &gt; arr[i]){
                int temp = arr[0];
                arr[0] = arr[i];
                arr[i] = temp;
            }
        }*/</span>

        <span class="token comment">//最终代码：</span>
        <span class="token comment">//外循环：几轮</span>
        <span class="token comment">//i:表示这一轮中，我拿着哪个索引上的数据跟后面的数据进行比较并交换</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//内循环：每一轮我要干什么事情？</span>
            <span class="token comment">//拿着i跟i后面的数据进行比较交换</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token keyword">int</span> temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
                    arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
                    arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>


        <span class="token function">printArr</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">printArr</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//3.遍历数组</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-插入排序" tabindex="-1"><a class="header-anchor" href="#_3-插入排序"><span>3. 插入排序</span></a></h2><p>插入排序的代码实现虽然没有冒泡排序和选择排序那么简单粗暴，但它的原理应该是最容易理解的了，因为只要打过扑克牌的人都应该能够秒懂。插入排序是一种最简单直观的排序算法，它的工作原理是通过创建有序序列和无序序列，然后再遍历无序序列得到里面每一个数字，把每一个数字插入到有序序列中正确的位置。</p><p>插入排序在插入的时候，有优化算法，在遍历有序序列找正确位置时，可以采取二分查找</p><h3 id="_3-1-算法步骤" tabindex="-1"><a class="header-anchor" href="#_3-1-算法步骤"><span>3.1 算法步骤</span></a></h3><p>将0索引的元素到N索引的元素看做是有序的，把N+1索引的元素到最后一个当成是无序的。</p><p>遍历无序的数据，将遍历到的元素插入有序序列中适当的位置，如遇到相同数据，插在后面。</p><p>N的范围：0~最大索引</p><h3 id="_3-2-动图演示" tabindex="-1"><a class="header-anchor" href="#_3-2-动图演示"><span>3.2 动图演示</span></a></h3><figure><img src="https://img.picgo.net/2023/11/06/f47975c6697025527457503c47cfb80c6fad97773d39144b.gif" alt="插入排序" tabindex="0" loading="lazy"><figcaption>插入排序</figcaption></figure><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>itheima<span class="token punctuation">.</span>mysort</span><span class="token punctuation">;</span>


<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">A03_InsertDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">/*
            插入排序：
                将0索引的元素到N索引的元素看做是有序的，把N+1索引的元素到最后一个当成是无序的。
                遍历无序的数据，将遍历到的元素插入有序序列中适当的位置，如遇到相同数据，插在后面。
                N的范围：0~最大索引

        */</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">38</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">47</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">36</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">46</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">48</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token comment">//1.找到无序的哪一组数组是从哪个索引开始的。  2</span>
        <span class="token keyword">int</span> startIndex <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                startIndex <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">//2.遍历从startIndex开始到最后一个元素，依次得到无序的哪一组数据中的每一个元素</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> startIndex<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//问题：如何把遍历到的数据，插入到前面有序的这一组当中</span>

            <span class="token comment">//记录当前要插入数据的索引</span>
            <span class="token keyword">int</span> j <span class="token operator">=</span> i<span class="token punctuation">;</span>

            <span class="token keyword">while</span><span class="token punctuation">(</span>j <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">//交换位置</span>
                <span class="token keyword">int</span> temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
                arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                arr<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
                j<span class="token operator">--</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span>
        <span class="token function">printArr</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">printArr</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//3.遍历数组</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-快速排序" tabindex="-1"><a class="header-anchor" href="#_4-快速排序"><span>4. 快速排序</span></a></h2><p>快速排序是由东尼·霍尔所发展的一种排序算法。</p><p>快速排序又是一种分而治之思想在排序算法上的典型应用。</p><p>快速排序的名字起的是简单粗暴，因为一听到这个名字你就知道它存在的意义，就是快，而且效率高！</p><p>它是处理大数据最快的排序算法之一了。</p><h3 id="_4-1-算法步骤" tabindex="-1"><a class="header-anchor" href="#_4-1-算法步骤"><span>4.1 算法步骤</span></a></h3><ol><li>从数列中挑出一个元素，一般都是左边第一个数字，称为 &quot;基准数&quot;;</li><li>创建两个指针，一个从前往后走，一个从后往前走。</li><li>先执行后面的指针，找出第一个比基准数小的数字</li><li>再执行前面的指针，找出第一个比基准数大的数字</li><li>交换两个指针指向的数字</li><li>直到两个指针相遇</li><li>将基准数跟指针指向位置的数字交换位置，称之为：基准数归位。</li><li>第一轮结束之后，基准数左边的数字都是比基准数小的，基准数右边的数字都是比基准数大的。</li><li>把基准数左边看做一个序列，把基准数右边看做一个序列，按照刚刚的规则递归排序</li></ol><h3 id="_4-2-动图演示" tabindex="-1"><a class="header-anchor" href="#_4-2-动图演示"><span>4.2 动图演示</span></a></h3><figure><img src="https://img.picgo.net/2023/11/06/033c48c5510ca5e1314c5be734c927f3fed63be8450b0ab0.gif" alt="快速排序" tabindex="0" loading="lazy"><figcaption>快速排序</figcaption></figure><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>itheima<span class="token punctuation">.</span>mysort</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">A05_QuickSortDemo</span> <span class="token punctuation">{</span>
   <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MIN_VALUE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token comment">/*
       快速排序：
           第一轮：以0索引的数字为基准数，确定基准数在数组中正确的位置。
           比基准数小的全部在左边，比基准数大的全部在右边。
           后面以此类推。
     */</span>

       <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">}</span><span class="token punctuation">;</span>


       <span class="token comment">//int[] arr = new int[1000000];</span>

      <span class="token comment">/* Random r = new Random();
       for (int i = 0; i &lt; arr.length; i++) {
           arr[i] = r.nextInt();
       }*/</span>


       <span class="token keyword">long</span> start <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token function">quickSort</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token keyword">long</span> end <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

       <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>end <span class="token operator">-</span> start<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//149</span>

       <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token comment">//课堂练习：</span>
       <span class="token comment">//我们可以利用相同的办法去测试一下，选择排序，冒泡排序以及插入排序运行的效率</span>
       <span class="token comment">//得到一个结论：快速排序真的非常快。</span>

      <span class="token comment">/* for (int i = 0; i &lt; arr.length; i++) {
           System.out.print(arr[i] + &quot; &quot;);
       }*/</span>

   <span class="token punctuation">}</span>


   <span class="token comment">/*
    *   参数一：我们要排序的数组
    *   参数二：要排序数组的起始索引
    *   参数三：要排序数组的结束索引
    * */</span>
   <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">quickSort</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token comment">//定义两个变量记录要查找的范围</span>
       <span class="token keyword">int</span> start <span class="token operator">=</span> i<span class="token punctuation">;</span>
       <span class="token keyword">int</span> end <span class="token operator">=</span> j<span class="token punctuation">;</span>

       <span class="token keyword">if</span><span class="token punctuation">(</span>start <span class="token operator">&gt;</span> end<span class="token punctuation">)</span><span class="token punctuation">{</span>
           <span class="token comment">//递归的出口</span>
           <span class="token keyword">return</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span>



       <span class="token comment">//记录基准数</span>
       <span class="token keyword">int</span> baseNumber <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
       <span class="token comment">//利用循环找到要交换的数字</span>
       <span class="token keyword">while</span><span class="token punctuation">(</span>start <span class="token operator">!=</span> end<span class="token punctuation">)</span><span class="token punctuation">{</span>
           <span class="token comment">//利用end，从后往前开始找，找比基准数小的数字</span>
           <span class="token comment">//int[] arr = {1, 6, 2, 7, 9, 3, 4, 5, 10, 8};</span>
           <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
               <span class="token keyword">if</span><span class="token punctuation">(</span>end <span class="token operator">&lt;=</span> start <span class="token operator">||</span> arr<span class="token punctuation">[</span>end<span class="token punctuation">]</span> <span class="token operator">&lt;</span> baseNumber<span class="token punctuation">)</span><span class="token punctuation">{</span>
                   <span class="token keyword">break</span><span class="token punctuation">;</span>
               <span class="token punctuation">}</span>
               end<span class="token operator">--</span><span class="token punctuation">;</span>
           <span class="token punctuation">}</span>
           <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>end<span class="token punctuation">)</span><span class="token punctuation">;</span>
           <span class="token comment">//利用start，从前往后找，找比基准数大的数字</span>
           <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
               <span class="token keyword">if</span><span class="token punctuation">(</span>end <span class="token operator">&lt;=</span> start <span class="token operator">||</span> arr<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token operator">&gt;</span> baseNumber<span class="token punctuation">)</span><span class="token punctuation">{</span>
                   <span class="token keyword">break</span><span class="token punctuation">;</span>
               <span class="token punctuation">}</span>
               start<span class="token operator">++</span><span class="token punctuation">;</span>
           <span class="token punctuation">}</span>



           <span class="token comment">//把end和start指向的元素进行交换</span>
           <span class="token keyword">int</span> temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token punctuation">;</span>
           arr<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>end<span class="token punctuation">]</span><span class="token punctuation">;</span>
           arr<span class="token punctuation">[</span>end<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
       <span class="token punctuation">}</span>

       <span class="token comment">//当start和end指向了同一个元素的时候，那么上面的循环就会结束</span>
       <span class="token comment">//表示已经找到了基准数在数组中应存入的位置</span>
       <span class="token comment">//基准数归位</span>
       <span class="token comment">//就是拿着这个范围中的第一个数字，跟start指向的元素进行交换</span>
       <span class="token keyword">int</span> temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
       arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token punctuation">;</span>
       arr<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>

       <span class="token comment">//确定6左边的范围，重复刚刚所做的事情</span>
       <span class="token function">quickSort</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span>i<span class="token punctuation">,</span>start <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token comment">//确定6右边的范围，重复刚刚所做的事情</span>
       <span class="token function">quickSort</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span>start <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>

   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,109),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","20-Algorithm.html.vue"]]),d=JSON.parse('{"path":"/rear-end/Java/20-Algorithm.html","title":"😢 20.算法","lang":"zh-CN","frontmatter":{"title":"😢 20.算法","tag":["Java"],"recommend":21,"description":"常见的七种查找算法： ​ 数据结构是数据存储的方式，算法是数据计算的方式。所以在开发中，算法和数据结构息息相关。今天的讲义中会涉及部分数据结构的专业名词，如果各位铁粉有疑惑，可以先看一下哥们后面录制的数据结构，再回头看算法。 1. 基本查找 ​ 也叫做顺序查找 ​ 说明：顺序查找适合于存储结构为数组或者链表。 基本思想：顺序查找也称为线形查找，属于无序...","head":[["meta",{"property":"og:url","content":"https://soft-vault.com/rear-end/Java/20-Algorithm.html"}],["meta",{"property":"og:site_name","content":"Night.Soul"}],["meta",{"property":"og:title","content":"😢 20.算法"}],["meta",{"property":"og:description","content":"常见的七种查找算法： ​ 数据结构是数据存储的方式，算法是数据计算的方式。所以在开发中，算法和数据结构息息相关。今天的讲义中会涉及部分数据结构的专业名词，如果各位铁粉有疑惑，可以先看一下哥们后面录制的数据结构，再回头看算法。 1. 基本查找 ​ 也叫做顺序查找 ​ 说明：顺序查找适合于存储结构为数组或者链表。 基本思想：顺序查找也称为线形查找，属于无序..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.picgo.net/2023/11/06/image-2023110618502100014a6fbd79890bc08.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-05T17:55:50.000Z"}],["meta",{"property":"article:author","content":"Night.Soul"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:modified_time","content":"2024-02-05T17:55:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"😢 20.算法\\",\\"image\\":[\\"https://img.picgo.net/2023/11/06/image-2023110618502100014a6fbd79890bc08.png\\",\\"https://img.picgo.net/2023/11/06/image-202311061857065633acf386ac196f711.png\\",\\"https://img.picgo.net/2023/11/06/945f6e80c54e560535f4d2207e4d55b352d36768d371d208.gif\\",\\"https://img.picgo.net/2023/11/06/945f6e80c54e560535f4d2207e4d55b352d36768d371d208.gif\\",\\"https://img.picgo.net/2023/11/06/f47975c6697025527457503c47cfb80c6fad97773d39144b.gif\\",\\"https://img.picgo.net/2023/11/06/033c48c5510ca5e1314c5be734c927f3fed63be8450b0ab0.gif\\"],\\"dateModified\\":\\"2024-02-05T17:55:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Night.Soul\\",\\"url\\":\\"https://github.com/NightSquirrl\\"}]}"]]},"headers":[{"level":2,"title":"1. 基本查找","slug":"_1-基本查找","link":"#_1-基本查找","children":[]},{"level":2,"title":"2. 二分查找","slug":"_2-二分查找","link":"#_2-二分查找","children":[]},{"level":2,"title":"3. 插值查找","slug":"_3-插值查找","link":"#_3-插值查找","children":[]},{"level":2,"title":"4. 斐波那契查找","slug":"_4-斐波那契查找","link":"#_4-斐波那契查找","children":[]},{"level":2,"title":"5. 分块查找","slug":"_5-分块查找","link":"#_5-分块查找","children":[]},{"level":2,"title":"6. 哈希查找","slug":"_6-哈希查找","link":"#_6-哈希查找","children":[]},{"level":2,"title":"7. 树表查找","slug":"_7-树表查找","link":"#_7-树表查找","children":[]},{"level":2,"title":"1. 冒泡排序","slug":"_1-冒泡排序","link":"#_1-冒泡排序","children":[{"level":3,"title":"1.1 算法步骤","slug":"_1-1-算法步骤","link":"#_1-1-算法步骤","children":[]},{"level":3,"title":"1.2 动图演示","slug":"_1-2-动图演示","link":"#_1-2-动图演示","children":[]},{"level":3,"title":"1.3 代码示例","slug":"_1-3-代码示例","link":"#_1-3-代码示例","children":[]}]},{"level":2,"title":"2. 选择排序","slug":"_2-选择排序","link":"#_2-选择排序","children":[{"level":3,"title":"2.1 算法步骤","slug":"_2-1-算法步骤","link":"#_2-1-算法步骤","children":[]},{"level":3,"title":"2.2 动图演示","slug":"_2-2-动图演示","link":"#_2-2-动图演示","children":[]}]},{"level":2,"title":"3. 插入排序","slug":"_3-插入排序","link":"#_3-插入排序","children":[{"level":3,"title":"3.1 算法步骤","slug":"_3-1-算法步骤","link":"#_3-1-算法步骤","children":[]},{"level":3,"title":"3.2 动图演示","slug":"_3-2-动图演示","link":"#_3-2-动图演示","children":[]}]},{"level":2,"title":"4. 快速排序","slug":"_4-快速排序","link":"#_4-快速排序","children":[{"level":3,"title":"4.1 算法步骤","slug":"_4-1-算法步骤","link":"#_4-1-算法步骤","children":[]},{"level":3,"title":"4.2 动图演示","slug":"_4-2-动图演示","link":"#_4-2-动图演示","children":[]}]}],"git":{"createdTime":1699277014000,"updatedTime":1707155750000,"contributors":[{"name":"zeroeldath","email":"zeroeldath@Mac-Pro.local","commits":1}]},"readingTime":{"minutes":19.31,"words":5793},"filePathRelative":"rear-end/Java/20-Algorithm.md","localizedDate":"2023年11月6日","excerpt":"\\n<p>​\\t数据结构是数据存储的方式，算法是数据计算的方式。所以在开发中，算法和数据结构息息相关。今天的讲义中会涉及部分数据结构的专业名词，如果各位铁粉有疑惑，可以先看一下哥们后面录制的数据结构，再回头看算法。</p>\\n<h2>1. 基本查找</h2>\\n<p>​\\t也叫做顺序查找</p>\\n<p>​        说明：顺序查找适合于存储结构为数组或者链表。</p>\\n<p><strong>基本思想</strong>：顺序查找也称为线形查找，属于无序查找算法。从数据结构线的一端开始，顺序扫描，依次将遍历到的结点与要查找的值相比较，若相等则表示查找成功；若遍历结束仍没有找到相同的，表示查找失败。</p>","autoDesc":true}');export{k as comp,d as data};
