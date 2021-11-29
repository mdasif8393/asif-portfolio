import React from 'react';
import './MyInfo.css'

const MyInfo = () => {
    return (
        <div>
            <header class='masthead'>
  <p class='masthead-intro'>Hi I'm</p>
  <h1 class='masthead-heading'>Asif!</h1>
</header>
<section class="introduction-section">
    <h1>Introduction</h1>
    <p>I'm React Front End Web Developer as well as Full Stack Developer.</p>
    <p>I love to explore new technology.</p>
</section>
<section class="location-section">
    <h1>Where I'm From</h1>
    <p>I'm originally from Khulna, Bangladesh. </p>
</section>
<section class="questions-section">
    <h1>More About Me</h1>
    <h2>What are your favorite hobbies?</h2>
    <p>My favorite hobby is to explore new Places and new Foods.</p>
    <h2>Why do you want to be a web developer?</h2>
    <p>Because programming is awesome and programming for the internet is even more awesome.</p>
</section>

<footer class="content-footer">
    <p>Say hi to me on these social networks:</p>
    <ul class="social">
        <li><a class="css-is-deranged" href="https://github.com/mdasif8393">GitHub</a></li>
        <li><a class="css-is-deranged" href="https://www.linkedin.com/in/md-asif-zaman/">LinkedIn</a></li>
        <li><a class="css-is-deranged" href="https://www.facebook.com/md.asif.8393/">Facebook</a></li>
    </ul>
  
</footer>
        </div>
    );
};

export default MyInfo;