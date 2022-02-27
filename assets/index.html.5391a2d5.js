import{o as l,c as t,F as e,d as n,a as s,e as a}from"./app.22eaa598.js";import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";const p={},c=n(`<h1 id="the-basics-of-the-basics-of-c-by-darryl" tabindex="-1"><a class="header-anchor" href="#the-basics-of-the-basics-of-c-by-darryl" aria-hidden="true">#</a> The basics of the basics of C++ (by Darryl)</h1><p>Ok, so essentially, these are the things you must take note of when starting out with <code>C++</code>. I will first cover the data types.</p><h2 id="the-structure-of-a-c-program" tabindex="-1"><a class="header-anchor" href="#the-structure-of-a-c-program" aria-hidden="true">#</a> The Structure of a C++ Program</h2><div class="language-cpp ext-cpp line-numbers-mode"><pre class="shiki" style="background-color:#002B36;"><code><span class="line"><span style="color:#859900;">#include</span><span style="color:#B58900;"> </span><span style="color:#2AA198;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#859900;">using</span><span style="color:#839496;"> </span><span style="color:#93A1A1;font-weight:bold;">namespace</span><span style="color:#839496;"> </span><span style="color:#CB4B16;">std</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">int</span><span style="color:#839496;"> </span><span style="color:#268BD2;">main</span><span style="color:#839496;">() {</span></span>
<span class="line"><span style="color:#839496;">  cout </span><span style="color:#859900;">&lt;&lt;</span><span style="color:#839496;"> </span><span style="color:#2AA198;">&quot;Hello World&quot;</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>This is a basic C++ program which prints &quot;Hello World&quot; to the console.</p><p>It is made up of three essential parts:</p><ol><li><code>#include</code>: It includes the necessary header files for functions used in the program.</li><li><code>using namespace std</code>: Includes that standard library of functions.</li><li><code>int main() {}</code>: The main function, where all your code should go.</li></ol><p>Notice that we use <code>cout</code> for printing. The opposite of that, <code>cin &gt;&gt; variable</code>, is for receiving input to a variable, however that variable must be defined prior to the statement.</p><h2 id="data-types" tabindex="-1"><a class="header-anchor" href="#data-types" aria-hidden="true">#</a> Data Types</h2><h3 id="basic-data-types" tabindex="-1"><a class="header-anchor" href="#basic-data-types" aria-hidden="true">#</a> Basic Data Types</h3>`,10),r=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"Data Type"),s("th",null,"Size (in bytes)"),s("th",null,"Stores"),s("th",null,"Example")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("code",null,"int")]),s("td",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"4")]),s("annotation",{encoding:"application/x-tex"},"4")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"4")])])])]),s("td",null,[a("Numbers ("),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",null,"\u2212"),s("mn",null,"2147483648")]),s("annotation",{encoding:"application/x-tex"},"-2 147 483 648")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"\u2212"),s("span",{class:"mord"},"2147483648")])])]),a(" to "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"2147483647")]),s("annotation",{encoding:"application/x-tex"},"2 147 483 647")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"2147483647")])])]),a(")")]),s("td",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"12442")]),s("annotation",{encoding:"application/x-tex"},"12 442")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"12442")])])])])]),s("tr",null,[s("td",null,[s("code",null,"float")]),s("td",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"4")]),s("annotation",{encoding:"application/x-tex"},"4")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"4")])])])]),s("td",null,[a("Decimal numbers (up to "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"7")]),s("annotation",{encoding:"application/x-tex"},"7")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"7")])])]),a(" d.p.)")]),s("td",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"5.63562")]),s("annotation",{encoding:"application/x-tex"},"5.63562")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"5.63562")])])])])]),s("tr",null,[s("td",null,[s("code",null,"double")]),s("td",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"8")]),s("annotation",{encoding:"application/x-tex"},"8")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"8")])])])]),s("td",null,[a("Decimal numbers (up to "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"15")]),s("annotation",{encoding:"application/x-tex"},"15")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"15")])])]),a(" d.p.)")]),s("td",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"3.1415926535879732")]),s("annotation",{encoding:"application/x-tex"},"3.1415926535879732")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"3.1415926535879732")])])])])]),s("tr",null,[s("td",null,[s("code",null,"bool")]),s("td",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])])]),s("td",null,[s("code",null,"true"),a(" or "),s("code",null,"false"),a(" values")]),s("td",null,[s("code",null,"true"),a(", "),s("code",null,"false")])]),s("tr",null,[s("td",null,[s("code",null,"char")]),s("td",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])])]),s("td",null,"A single character"),s("td",null,[s("code",null,"'D'"),a(", "),s("code",null,"'$'")])]),s("tr",null,[s("td",null,[s("code",null,"string")]),s("td",null,"variable"),s("td",null,"Multi-character text"),s("td",null,[s("code",null,"'hi mom'")])])])],-1),i=n('<h3 id="data-type-modifiers" tabindex="-1"><a class="header-anchor" href="#data-type-modifiers" aria-hidden="true">#</a> Data Type Modifiers</h3><p>Numeric data types (<code>int</code> and <code>double</code>) can be modified with:</p><ul><li><code>short</code></li><li><code>long</code> (or even <code>long long</code>)</li><li><code>signed</code></li><li><code>unsigned</code></li></ul><p>which give a variety of ranges of the same numerical datatype.</p><p>Note that the default modified datatype is <code>int</code>.</p>',5),d=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"Modified Datatype"),s("th",null,"Size (in bytes)"),s("th",null,"Range")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("code",null,"short")]),s("td",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"2")]),s("annotation",{encoding:"application/x-tex"},"2")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"2")])])])]),s("td",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",null,"\u2212"),s("mn",null,"32768")]),s("annotation",{encoding:"application/x-tex"},"-32 768")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"\u2212"),s("span",{class:"mord"},"32768")])])]),a(" to "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"32767")]),s("annotation",{encoding:"application/x-tex"},"32 767")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"32767")])])])])]),s("tr",null,[s("td",null,[s("code",null,"unsigned short")]),s("td",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"2")]),s("annotation",{encoding:"application/x-tex"},"2")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"2")])])])]),s("td",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"0")]),s("annotation",{encoding:"application/x-tex"},"0")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"0")])])]),a(" to "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"65535")]),s("annotation",{encoding:"application/x-tex"},"65 535")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"65535")])])])])]),s("tr",null,[s("td",null,[s("code",null,"unsigned")]),s("td",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"4")]),s("annotation",{encoding:"application/x-tex"},"4")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"4")])])])]),s("td",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"0")]),s("annotation",{encoding:"application/x-tex"},"0")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"0")])])]),a(" to "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"4294967295")]),s("annotation",{encoding:"application/x-tex"},"4 294 967 295")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"4294967295")])])])])]),s("tr",null,[s("td",null,[s("code",null,"long")]),s("td",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"4")]),s("annotation",{encoding:"application/x-tex"},"4")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"4")])])])]),s("td",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",null,"\u2212"),s("mn",null,"2147483648")]),s("annotation",{encoding:"application/x-tex"},"-2 147 483 648")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"\u2212"),s("span",{class:"mord"},"2147483648")])])]),a(" to "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"2147483647")]),s("annotation",{encoding:"application/x-tex"},"2 147 483 647")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"2147483647")])])])])]),s("tr",null,[s("td",null,[s("code",null,"unsigned long")]),s("td",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"4")]),s("annotation",{encoding:"application/x-tex"},"4")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"4")])])])]),s("td",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"0")]),s("annotation",{encoding:"application/x-tex"},"0")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"0")])])]),a(" to "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"4294967295")]),s("annotation",{encoding:"application/x-tex"},"4 294 967 295")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"4294967295")])])])])]),s("tr",null,[s("td",null,[s("code",null,"long long")]),s("td",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"8")]),s("annotation",{encoding:"application/x-tex"},"8")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"8")])])])]),s("td",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",null,"\u2212"),s("msup",null,[s("mn",null,"2"),s("mn",null,"63")])]),s("annotation",{encoding:"application/x-tex"},"-2^{63}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8974em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"\u2212"),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"63")])])])])])])])])])])]),a(" to "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mn",null,"2"),s("mn",null,"63")]),s("mo",null,"\u2212"),s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"2^{63} - 1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8974em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"63")])])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"\u2212"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])])])]),s("tr",null,[s("td",null,[s("code",null,"unsigned long long")]),s("td",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"8")]),s("annotation",{encoding:"application/x-tex"},"8")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"8")])])])]),s("td",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"0")]),s("annotation",{encoding:"application/x-tex"},"0")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"0")])])]),a(" to "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"18446744073709551615")]),s("annotation",{encoding:"application/x-tex"},"18 446 744 073 709 551 615")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"18446744073709551615")])])])])]),s("tr",null,[s("td",null,[s("code",null,"long double")]),s("td",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"12")]),s("annotation",{encoding:"application/x-tex"},"12")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"12")])])])]),s("td",null,"-")])])],-1),h=n(`<h2 id="control-flow" tabindex="-1"><a class="header-anchor" href="#control-flow" aria-hidden="true">#</a> Control Flow</h2><h3 id="if-statements" tabindex="-1"><a class="header-anchor" href="#if-statements" aria-hidden="true">#</a> If Statements</h3><p>For leaving decisions to your computer.</p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="shiki" style="background-color:#002B36;"><code><span class="line"><span style="color:#859900;">#include</span><span style="color:#B58900;"> </span><span style="color:#2AA198;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#859900;">using</span><span style="color:#839496;"> </span><span style="color:#93A1A1;font-weight:bold;">namespace</span><span style="color:#839496;"> </span><span style="color:#CB4B16;">std</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">int</span><span style="color:#839496;"> </span><span style="color:#268BD2;">main</span><span style="color:#839496;">() {</span></span>
<span class="line"><span style="color:#839496;">  </span><span style="color:#93A1A1;font-weight:bold;">int</span><span style="color:#839496;"> a;</span></span>
<span class="line"><span style="color:#839496;">  cout </span><span style="color:#859900;">&lt;&lt;</span><span style="color:#839496;"> </span><span style="color:#2AA198;">&quot;enter your age: &quot;</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">  cin </span><span style="color:#859900;">&gt;&gt;</span><span style="color:#839496;"> a;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#839496;">  </span><span style="color:#859900;">if</span><span style="color:#839496;"> (a </span><span style="color:#859900;">&lt;</span><span style="color:#839496;"> </span><span style="color:#D33682;">18</span><span style="color:#839496;">) { cout </span><span style="color:#859900;">&lt;&lt;</span><span style="color:#839496;"> </span><span style="color:#2AA198;">&quot;access denied&quot;</span><span style="color:#839496;">; }</span></span>
<span class="line"><span style="color:#839496;">  </span><span style="color:#859900;">else</span><span style="color:#839496;"> { cout </span><span style="color:#859900;">&lt;&lt;</span><span style="color:#839496;"> </span><span style="color:#2AA198;">&quot;have a drink!&quot;</span><span style="color:#839496;">; }</span></span>
<span class="line"><span style="color:#839496;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>Notice that the conditions are surrounded by <strong>parentheses</strong> and the following code to be executed is in curly braces.</p><p>If you know how programming works, you can also use <code>else if</code> for multiple conditions.</p><h4 id="logical-operators" tabindex="-1"><a class="header-anchor" href="#logical-operators" aria-hidden="true">#</a> Logical Operators</h4><table><thead><tr><th>Op.</th><th>Means</th><th>True Example</th><th>False Example</th></tr></thead><tbody><tr><td><code>&amp;&amp;</code></td><td>&quot;and&quot;</td><td><code>(5 &gt; 3 &amp;&amp; 2 &lt; 4)</code></td><td><code>(3 &gt; 5 &amp;&amp; 2 &lt; 4)</code></td></tr><tr><td><code>||</code></td><td>&quot;or&quot;</td><td><code>(&#39;s&#39; == &#39;s&#39; or &#39;t&#39; == &#39;u&#39;)</code></td><td><code>(&#39;s&#39; == &#39;t&#39; or &#39;t&#39; == &#39;u&#39;)</code></td></tr><tr><td><code>!</code></td><td>&quot;not&quot;</td><td><code>(!(5 &lt; 3))</code></td><td><code>(!(&#39;a&#39; == &#39;a&#39;))</code></td></tr></tbody></table><h4 id="comparison-operators" tabindex="-1"><a class="header-anchor" href="#comparison-operators" aria-hidden="true">#</a> Comparison Operators</h4><table><thead><tr><th>Op.</th><th>Means</th><th>True Example</th></tr></thead><tbody><tr><td><code>==</code></td><td>is equal to</td><td><code>(5 == 5)</code></td></tr><tr><td><code>!=</code></td><td>is not equal to</td><td><code>(5 != 3)</code></td></tr><tr><td><code>&gt;</code></td><td>is greater than</td><td><code>(5 &gt; 3)</code></td></tr><tr><td><code>&gt;=</code></td><td>is greater than or equal to</td><td><code>(5 &gt;= 5)</code></td></tr><tr><td><code>&lt;</code></td><td>is smaller than</td><td><code>(3 &lt; 5)</code></td></tr><tr><td><code>&lt;=</code></td><td>is smaller than or equal to</td><td><code>(5 &lt;= 5)</code></td></tr></tbody></table><h3 id="loops" tabindex="-1"><a class="header-anchor" href="#loops" aria-hidden="true">#</a> Loops</h3><h4 id="for-loop" tabindex="-1"><a class="header-anchor" href="#for-loop" aria-hidden="true">#</a> For Loop</h4><p>That&#39;s it.</p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="shiki" style="background-color:#002B36;"><code><span class="line"><span style="color:#859900;">#include</span><span style="color:#B58900;"> </span><span style="color:#2AA198;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#859900;">using</span><span style="color:#839496;"> </span><span style="color:#93A1A1;font-weight:bold;">namespace</span><span style="color:#839496;"> </span><span style="color:#CB4B16;">std</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">int</span><span style="color:#839496;"> </span><span style="color:#268BD2;">main</span><span style="color:#839496;">() {</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;">  //  initialize, cond., inc./dec.</span></span>
<span class="line"><span style="color:#839496;">  </span><span style="color:#859900;">for</span><span style="color:#839496;"> (</span><span style="color:#93A1A1;font-weight:bold;">int</span><span style="color:#839496;"> i </span><span style="color:#859900;">=</span><span style="color:#839496;"> </span><span style="color:#D33682;">1</span><span style="color:#839496;">; i </span><span style="color:#859900;">&lt;=</span><span style="color:#839496;"> </span><span style="color:#D33682;">5</span><span style="color:#839496;">; i</span><span style="color:#859900;">++</span><span style="color:#839496;">) { cout </span><span style="color:#859900;">&lt;&lt;</span><span style="color:#839496;"> i </span><span style="color:#859900;">&lt;&lt;</span><span style="color:#839496;"> </span><span style="color:#2AA198;">&#39; &#39;</span><span style="color:#839496;">; }</span></span>
<span class="line"><span style="color:#839496;">  </span><span style="color:#859900;">for</span><span style="color:#839496;"> (</span><span style="color:#93A1A1;font-weight:bold;">int</span><span style="color:#839496;"> i </span><span style="color:#859900;">=</span><span style="color:#839496;"> </span><span style="color:#D33682;">4</span><span style="color:#839496;">; i </span><span style="color:#859900;">&gt;</span><span style="color:#839496;"> </span><span style="color:#D33682;">0</span><span style="color:#839496;">; i</span><span style="color:#859900;">--</span><span style="color:#839496;">) { cout </span><span style="color:#859900;">&lt;&lt;</span><span style="color:#839496;"> i </span><span style="color:#859900;">&lt;&lt;</span><span style="color:#839496;"> </span><span style="color:#2AA198;">&#39; &#39;</span><span style="color:#839496;">; }</span></span>
<span class="line"><span style="color:#839496;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="while-loop" tabindex="-1"><a class="header-anchor" href="#while-loop" aria-hidden="true">#</a> While Loop</h4><p>That&#39;s also it.</p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="shiki" style="background-color:#002B36;"><code><span class="line"><span style="color:#859900;">#include</span><span style="color:#B58900;"> </span><span style="color:#2AA198;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#859900;">using</span><span style="color:#839496;"> </span><span style="color:#93A1A1;font-weight:bold;">namespace</span><span style="color:#839496;"> </span><span style="color:#CB4B16;">std</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">int</span><span style="color:#839496;"> </span><span style="color:#268BD2;">main</span><span style="color:#839496;">() {</span></span>
<span class="line"><span style="color:#839496;">  </span><span style="color:#93A1A1;font-weight:bold;">int</span><span style="color:#839496;"> i </span><span style="color:#859900;">=</span><span style="color:#839496;"> </span><span style="color:#D33682;">10</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">  </span><span style="color:#859900;">while</span><span style="color:#839496;"> (i </span><span style="color:#859900;">&gt;</span><span style="color:#839496;"> </span><span style="color:#D33682;">0</span><span style="color:#839496;">) {</span><span style="color:#586E75;font-style:italic;"> // put condition in parens.</span></span>
<span class="line"><span style="color:#839496;">    cout </span><span style="color:#859900;">&lt;&lt;</span><span style="color:#839496;"> i </span><span style="color:#859900;">&lt;&lt;</span><span style="color:#839496;"> </span><span style="color:#2AA198;">&#39; &#39;</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">    i</span><span style="color:#859900;">--</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">  }</span></span>
<span class="line"><span style="color:#839496;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="functions" tabindex="-1"><a class="header-anchor" href="#functions" aria-hidden="true">#</a> Functions</h2><div class="language-cpp ext-cpp line-numbers-mode"><pre class="shiki" style="background-color:#002B36;"><code><span class="line"><span style="color:#93A1A1;font-weight:bold;">int</span><span style="color:#839496;"> </span><span style="color:#268BD2;">add</span><span style="color:#839496;">(</span><span style="color:#93A1A1;font-weight:bold;">int</span><span style="color:#839496;"> a, </span><span style="color:#93A1A1;font-weight:bold;">int</span><span style="color:#839496;"> b, </span><span style="color:#93A1A1;font-weight:bold;">int</span><span style="color:#839496;"> c) {</span></span>
<span class="line"><span style="color:#839496;">  </span><span style="color:#859900;">return</span><span style="color:#839496;"> a </span><span style="color:#859900;">+</span><span style="color:#839496;"> b </span><span style="color:#859900;">+</span><span style="color:#839496;"> c;</span></span>
<span class="line"><span style="color:#839496;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>The return type of the function is always specified, followed by its parameters (with their specific types).</p>`,20);function m(u,y){return l(),t(e,null,[c,r,i,d,h],64)}var w=o(p,[["render",m]]);export{w as default};
