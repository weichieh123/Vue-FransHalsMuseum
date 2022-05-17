<template>
  <div class="home">
    <!-- hero section -->
    <div class="hero-section">
      <div class="logo"><img :src="logo" alt="" /></div>
      <h1>WELCOME</h1>
      <p>Location Hof: Museum in Bloom</p>
    </div>
    <!-- button section -->
    <div class="button-row first">
      <div class="button first">
        <el-icon class="icon"><CaretLeft /></el-icon>
        <span> BUY TICKETS</span>
      </div>
    </div>
    <div class="button-row second">
      <div class="button second">
        <span>ALL EXHIBITIONS</span>
        <el-icon class="icon"><CaretRight /></el-icon>
      </div>
    </div>
    <!-- exhibition section -->
    <div class="exhi-section" v-dragscroll="true">
      <div class="wrap">
        <div class="card" v-for="(pic, i) in ePics" :key="'ePic' + i">
          <div class="pic">
            <img
              :class="{ notSquare: !pic.isSquare }"
              :src="require('@/assets/images/' + pic.img)"
              :alt="pic.img"
            />
          </div>
          <p>{{ pic.time }}</p>
          <div class="info">
            <h3 :class="{ isLong: pic.isLong }">{{ pic.title }}</h3>
          </div>
          <div class="ticket">
            <el-icon><Ticket /></el-icon>
          </div>
        </div>
      </div>
    </div>
    <!-- discover section -->
    <div class="discover-section">
      <div class="left">
        <div class="pic">
          <img :src="discoverPic1" alt="" />
        </div>
        <div class="pic">
          <img :src="discoverPic2" alt="" />
        </div>
      </div>
      <div class="right">
        <h2>DISCOVER</h2>
        <div class="location">
          <div class="pic">
            <img :src="discoverPic3" alt="" />
          </div>
          <div class="address">
            <h5>HOF</h5>
            <p>Groot Heiligland 62</p>
            <p>2011 ES Haarlem</p>
          </div>
          <span><a href="">Opening hours</a></span>
        </div>
        <div class="location">
          <div class="pic">
            <img :src="discoverPic4" alt="" />
          </div>
          <div class="address">
            <h5>HOF</h5>
            <p>Grote Markt 16</p>
            <p>2011 RD Haarlem</p>
          </div>
          <span><a href="">Opening hours</a></span>
        </div>
        <h4>One museum two locations</h4>
        <p class="content">
          Welcome to the Frans Hals Museum. One museum at two locations. With art from the 16th and
          17th centuries, modern and contemporary art and a stimulating mix of both.
        </p>
      </div>
    </div>
    <!-- new section -->
    <div class="new-section">
      <div class="left">
        <div class="pic">
          <img :src="newPic1" alt="" />
        </div>
        <div class="pic">
          <img :src="newPic2" alt="" />
        </div>
      </div>
      <div class="right">
        <h2>NEW</h2>
        <p>
          <span>
            <el-icon size="20"><Notebook class="icon" /></el-icon>
          </span>
          <a href="">Explore museum highlights and more</a>
        </p>
        <div class="card">
          <div class="pic"><img :src="newPic3" alt="" /></div>
          <div class="info">
            <span>News 17th February 2022</span>
            <p>New exhibition: Anna Bella Geiger. Native Brazil / Alien Brazil</p>
            <span>The first solo exhibition in the Netherlands by…</span>
          </div>
        </div>
        <div class="card">
          <div class="pic pic-offset"><img class="offset" :src="newPic4" alt="" /></div>
          <div class="info">
            <span>News 30th December 2021</span>
            <p>See you in 2022</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import logo from '@/assets/images/logo.svg';
import discoverPic1 from '@/assets/images/discoverPic-top.jpeg';
import discoverPic2 from '@/assets/images/discoverPic-bottom.jpeg';
import discoverPic3 from '@/assets/images/discoverPic-right1.jpg';
import discoverPic4 from '@/assets/images/discoverPic-right2.jpg';
import newPic1 from '@/assets/images/newPic-top.jpeg';
import newPic2 from '@/assets/images/newPic-bottom.jpeg';
import newPic3 from '@/assets/images/newPic-right1.png';
import newPic4 from '@/assets/images/newPic-right2.jpg';
import ePics from './home';
</script>
<style lang="scss" scoped>
@import '@/assets/home.scss';
</style>
