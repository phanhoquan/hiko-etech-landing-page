<template>
  <div>
    <Header />
    <AboutUs />
    <AnimationArea />
    <OurGames />
    <OurPartners />
    <ContactUs />
    <Footer />
    <div id="arrow-down" class="arrow-down" @click="navigateBackToTop()">
      <img src="../assets/images/common/arrowDown.svg" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

import Header from "@/components/header.vue";
import AboutUs from "@/components/aboutUs.vue";
import AnimationArea from "@/components/animationArea.vue";
import OurGames from "@/components/ourGames.vue";
import OurPartners from "@/components/ourPartners.vue";
import ContactUs from "@/components/contactUs.vue";
import Footer from "@/components/footer.vue";

@Component({
  name: "Index",
  layout: "default",
  components: {
    Header,
    AboutUs,
    AnimationArea,
    OurGames,
    ContactUs,
    OurPartners,
    Footer,
  },
})
export default class Index extends Vue {
  // run after show view
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    document.body.style.overflow = "auto";
  }

  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // handle add arrow down style
  handleScroll() {
    const arrowDownElement = document.getElementById("arrow-down");

    if (arrowDownElement) {
      if (window.pageYOffset > 0) {
        arrowDownElement.style.transform = "rotate(180deg)";
      } else {
        arrowDownElement.style.transform = "none";
      }
    }
  }

  // handle arrow down click
  navigateBackToTop() {
    const headerElement = document.getElementById("header");
    const footerElement = document.getElementById("footer");
    const headerOffsetTop = headerElement?.offsetTop;
    const footerOffsetTop = footerElement?.offsetTop;

    if (window.pageYOffset > 0) {
      window.scrollTo({
        top: headerOffsetTop || 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: footerOffsetTop || 500,
        behavior: "smooth",
      });
    }
  }
}
</script>
