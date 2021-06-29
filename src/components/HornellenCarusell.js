import React , { useState } from 'react';
import {
  Container,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap'

const items = [
  { src:'https://lh3.googleusercontent.com/plgx34tsyQh0AwlEYfLuoZ-qdqsk_k40UFeJVjQsN7cWqz2Yo1Xmml3jyKlg1rPaehbzAkRyfyQgFUviGCQ6NoAdJs1OGbKqmBWzjhfKAZWDwmWC4cRvO8N7c8gFW3HHWU-vmXl3ESo=w1920-h1080',altText: '',  caption: ''},
 { src:'https://lh3.googleusercontent.com/7h1HTFjecm0jkfGaTfgW367d0foHI5USgZ-URlntv6iQQW9UhovmBxuxNm8f4zaCvCHz17oSw2tkxJALpfWMbEPLNPTwqnJWig2EX8aV9KmmeLnUj9hJrtXB7YVIkFQjHHeqI7yORg0=w1920-h1080',altText: '',  caption: ''},
 { src:'https://lh3.googleusercontent.com/JgRpI8GQNPNNk7f0Tx8Obc_V3F22Eoof2YWRztRawi__e5Ev0D9O2ioWBsnUBDs58pSe0lkDttjSTXQPHrLaVUXe8UHFgru1isX-Ek9V_zBN9R8cD-KbWKmUzMSGL1FO1Jm155pGCgI=w1920-h1080',altText: '',  caption: ''},
 { src:'https://lh3.googleusercontent.com/On_r4ixI0ghNJ9vba74Y2G8hVhZf8xPAfJZbikfCW7uSZNNmg_4UfWfyy1CahIVEyzA_O0htMsKHrarm1vHGsOeo-MuInO0VJ1PErM4aZTp7T99ktSMQw12i4cMQSlegkU8hMwFDesI=w1920-h1080',altText: '',  caption: ''},
 { src:'https://lh3.googleusercontent.com/tFXjJQ7hp6XKLh1U82Y6i3Lb5g3QT7qcGHYk29V866iFQGQylOeDkogVPoaYtSirYQQXQ8L8N3ekIc9NBtel3_v33UhNHvy93-kOLUCsfuS82eKr0TJUgZm7sB_eLIFvgERMVKHZ5qI=w1920-h1080',altText: '',  caption: ''},
 { src:'https://lh3.googleusercontent.com/xKz9x9jrbuggy2AKc6cqi7Q5pPl78oFkGleyitAMeqsY93ebz_KWL_XqeoZSGvdoc_zTFWq1dKA8sowKEJOaTFQ_SXuvkgMhaHGeIsL1m9X71UNdf2VY20Zc-KpLzUnw5e2z8mAGIKk=w1920-h1080',altText: '',  caption: ''},
 { src:'https://lh3.googleusercontent.com/lDVysWcAJODThUvlE-hxBwj-0EnAFc7ZgXkEZOBjv0oCGcSGgK7LbgUC1SaHHsQCl8zWBwVdnRLy0ZKMg1wtaczlWonSrezsU5FztDfEjwlNPetNGh9FmTSL_YveWVc9z7PAwkwdVXg=w1920-h1080',altText: '',  caption: ''},
 { src:'https://lh3.googleusercontent.com/dA603gkqwwj2cERvsFq6Chn4fntTUP1fKZ3d-1uW7AK3uqutuRyEuuVv2n91f1Ja6XGftzaDHY_RU-IM3WVeCQ-4pVa6k-_Gvl3yiyhnEqWk-D5iYRyJI2A08M-aMJPximRWR2HiqkI=w1920-h1080',altText: '',  caption: ''},
 { src:'https://lh3.googleusercontent.com/vzmiM1miG9Uj-vMvo-U3MIuVGG4d8WpD0rIPWlnR4ngGMbO97_UkOj8bNLL2KJhNTkfchC-QzLCUcx1yf2RZboNLNZspRxG1OJenDgFdmHc9hvd3DqL4bPsx0dJpa2d5ceg31Yld8Xw=w1920-h1080',altText: '',  caption: ''},
 { src:'https://lh3.googleusercontent.com/WFn-q8bYAU1A10Rgk4DQ3Q32xdJvkYtUy02DuQgAfase1sOzUXnWll3-FCDHqACi_3RP20Frp1y23-cO36fbaeEGXps2xkNcqJM-CjOKgTf2xtH46AJkzVsZ8zqxWSUD3MbFqv0AcnE=w1920-h1080',altText: '',  caption: ''},
 { src:'https://lh3.googleusercontent.com/VHS2uoR6ZMzOuoQ1VZLMak7g8lYQaMBlgsyn9Z1fW0NN9iI_GI9sMYx13P5HKaFS7jhHJ14n69li-ZiRDINJUCwXW6bz168N-hmkuVr_XSD971vfE1Qq2Vd3ybDbirl0w0sXGap25ZI=w1920-h1080',altText: '',  caption: ''},
 { src:'https://lh3.googleusercontent.com/1BVxnSiKlynhWb-F0W2ysY12uy5XLD-2s_03YlCgGudyV2YTDfnaBvwcHbm_88QdxCRXy2k-Z2eIWJy5OObAM_-Dojj8vJ5Ad-Ytx2ibPjXFTkCLwucs0pfKBHFQwa_JwFyEpkSSvuM=w1920-h1080',altText: '',  caption: ''},
 { src:'https://lh3.googleusercontent.com/wIpJipiw-f3unTtqR7sN_f7vKZHsOe92cb-8eaW4KxMwtDU_3VNM-drSMRXSgw0AtOWTotzTkHP0EunXBnEpnSA3mK9Ojjy9QNzTZzyCWGnktAwP-e-_XvRKP5pV_3lRJmWtzSPFr2U=w1920-h1080',altText: '',  caption: ''},
 { src:'https://lh3.googleusercontent.com/HArFZJjyHRnm_zzFjYQAuU6SQvIqPzBEyNJPrvGJf-QbsO9QW_1KlIyIK_B06gY1tqbNngd-hAEufrabMjAuHx_Y8tfbUN7oM7tIoXR8ljFaK1tHE_QpuEIb50n9bcjZK00QPUwNIHU=w1920-h1080',altText: '',  caption: ''},
 { src:'https://lh3.googleusercontent.com/Bu0c4yjkB3zNwNveD5PuOcovobzvFgwMw_Sf0rpm4kA1Rdbf4MGolmq4Hq8GPJRpYPxZLbRNN7j-Xq1Z3pFNhTIixgws8YtdNnmjIZfgdFTwckExxcMWXZs2lftK2gpZs0hz7aGhNa4=w1920-h1080',altText: '',  caption: ''},
 { src:'https://lh3.googleusercontent.com/FEO7n1JJ3fvWIgiypUYXzCeL9ShdwFodrpWt-fXreXNoTPraEgQXRBJcnZqE0_kiQlXDmQNTOuac3BYYoMowBob_ucqmT4Mmabmf_9RGiA_uZHwrICsUmzbJpb4gHbYmmIrGKyxWeLQ=w1920-h1080',altText: '',  caption: ''},
 { src:'https://lh3.googleusercontent.com/lVlhAcs3adAb619N32Sny86612bjTN4VcgyTS1tS0cYzykdP2q-BoUdjQiYYU_teoCsk0EHd2TXCVSmMQX6WVvtrqhWBMVyFFacXVTdcSugoGBtWEg43WyH5VwdT3Fvc1aJ-6CxPE5I=w1920-h1080',altText: '',  caption: ''},
 { src:'https://lh3.googleusercontent.com/J-w_QSLJ2JAhkLMp-teG2SR-OeHL47T84oNQu6LlCNBQsvFrEebiPSCW4H4r58YrjDarmvvXyAUZyhUCQYvvMOwZPkVMnAuLRWEI82jaq_mq3tvl1mt3KrPz-bWfG-kWigMi-x3BYbg=w1920-h1080',altText: '',  caption: ''},
 { src:'https://lh3.googleusercontent.com/s4q7zrWp0deeOLRFfl2lOpmzyjT-LWwSoIMOc_i6eaIDNPKZzKRW_qU0BqLmxW8KNv6SsMxeKXrNtLZwyRxzH6Kc9DfcG-FZ07JE8Uxeo37oL4sSTQE0OSD4yxqf5iiDpK2L6PYigoY=w1920-h1080',altText: '',  caption: ''},
 { src:'https://lh3.googleusercontent.com/WqMGVoQF1lRRiZrfyiHbsaokaKV1L1_U_o7LmpKB6Hq-e9jtynxNWTzgQ1bTH1hH93psGU1cSV3_F2X5lStn67namQltt7RcXZ-VQPaSAE1q8Ojsb_FVbnCzvmDQkKVlXFZD2CniC4s=w1920-h1080',altText: '',  caption: ''},
 { src:'https://lh3.googleusercontent.com/piXiyDhhNLFyO3FcU--7NLcWZGT11-4y1-s7vhlyr8UN7MPzfZdvNUB0YvGRYOeLuDYF6l_FHKq6-K71wqlAzAv30XxW_W3iNvErIaFz1UQcxeBrTRDbZhtC7qRTB51j6OqHg8qbvik=w1920-h1080',altText: '',  caption: ''},
 { src:'https://lh3.googleusercontent.com/uHkGtubks3bYtGLMJxi4hU_L84oGFWcSLzAidETbnQwqTrXpGggGDu4E78JFAuO6DA8-v8mgSeT-5y5qwcqCwH33kec4Mlmhp4rUB2fTob1QuP48BpIIQ7eG3XMRfRn2JzQJ2g0sv4A=w1920-h1080',altText: '',  caption: ''},
 { src:'https://lh3.googleusercontent.com/BoDlFLWNZzKw4k4ef0L0vJEAUUlZaJFkIKk4T8y03LE7qXdll8EearQfjXv2WQ736suLfUq8tsl0tJRi117Pr-Jx_sY4j_zI5rVAMc83BKsz1PSLxoAeUlCHzerly7J3g-C7QMrnWEs=w1920-h1080',altText: '',  caption: ''},
 { src:'https://lh3.googleusercontent.com/IAWUT6y8u3BMX0dF5nuAHRHnp-kl_GbeibShVfmgt6uGzJHSl6ZvbN8dr46xevfwlLV0z_ufGXFHG7xLJ07ydcQ0dyVpF-uR_PP030z7dN8QDIv0Zj7el41oan7RWup-LuQqri9r7xw=w1920-h1080',altText: '',  caption: ''},
 { src:'https://lh3.googleusercontent.com/pfuaRC50XoAR6jSFVO_R9xEUYVMlbXaPD_ANqnM6QBn0kLDZDVG_GmN0LKMIC8ZEDhLgSsJ6wFywhz85KbiIqpQYiewCJ1F2b6SM429BM2sZeCL5bIZYyDJzpdAhnIjtMpIkIOYgxMI=w1920-h1080',altText: '',  caption: ''},
 { src:'https://lh3.googleusercontent.com/g9cihn7rn45Ng-mx58X5mWnlFmZ0klKNYzvigxtEBo5xl7zYFy5SazMOTg5mXFgs6aSK1gh5EAlUhVKdI2j5dc_M9VwRxF2eqtN3aAvnum7OV49gzxuC0nyaeJwT47gLiCfmD9Fqjeg=w1920-h1080',altText: '',  caption: ''},
 { src:'https://lh3.googleusercontent.com/TuyZh4EugDHI7q2gtS789hwRCADMN1X6hFE18kSIS3OHwNsWRpkvR11wA4G4gMjEPYizr5GsiL1BnfNiBC34uIddTzOIM-Bo_ubx4ZGEKAkQc9aeTmCTpfr2NYldM1E5vNF2swyY_d0=w1920-h1080',altText: '',  caption: ''},
 { src:'https://lh3.googleusercontent.com/nEH6xDLPnBRycRAI-V_UUvXrzVa2BVCVwyQYmcJnFpAw5Bqc1fZwImHKI7D6i_CNTkaTOg00_t38tYkAYcPphvrXgRdsqL1duU5rZS9IB9Lez3Hei-eEyaAPIAf5bPi3KIF78x3Xj9A=w1920-h1080',altText: '',  caption: ''},
 { src:'https://lh3.googleusercontent.com/OFt6OPO8KGOiYAFzCAe6Uu6k4nSvyGQsSBL0XSpZpZLTyXhK3YdEDx6XgyDylVXU2NF9EGTyK4XZt_ho8WAyC-V4DR-RyjuGt5dmcNnRwU4j4cHKTBBEiDdTVBsxiv2BbWgQgjw-mWw=w1920-h1080',altText: '',  caption: ''},
 { src:'https://lh3.googleusercontent.com/2j5Qp4BVfw7kYxkeTzLFHlGDvCvADhagjvZ9dlRnswz3-dg5SrfBhQJO5X6-YEv4Xv-Ky9dDUsSOBnoVrnqGVOkete8OXy5HkOiX8-aNz-E5xafwPR3m5KbfyDP4Ju5jqRhWnPCSIrg=w1920-h1080',altText: '',  caption: ''},
 { src:'https://lh3.googleusercontent.com/xVmlQ2G3JyG371BpILQRVMstEIOiaVH-9r37pF9_i1urr2Ed9koORFNY1KVrATnTqC1rhyzrSz3_xK_e_auXrtPgv0MzPY3JcLoXiiQbpr49MK4Rf7FNlrh2nNpE3ZRN5d61eHkVXSw=w1920-h1080',altText: '',  caption: ''},
 { src:'https://lh3.googleusercontent.com/6xWzxvJtvIgcQyoiuftNR2_S2ovP6a967huIeW6NRuCU5xHB68bcHqhANMeAqH791EOqvSpfGEUR_-wxPc7066zz2KSd9uYHQaIDRBrISFLbNJYnBcqEYZm5AZUlAZmIKSqLfZqrvyw=w1920-h1080',altText: '',  caption: ''},
 { src:'https://lh3.googleusercontent.com/A00GyAH217HUOX998LQGC-0P94_vsZRHeFKOOBSAGLruBUao1c8Hd_ZiP6_2o-saMVLN0xWKZxMwUIegoi0MMIm6vmgLm0Dn5VEhmsHI8CTwyZJYKtgCUHMe-AG3zVgjd5-RinxJT50=w1920-h1080',altText: '',  caption: ''},
 { src:'https://lh3.googleusercontent.com/n7ZZ9xeG2Rdh_XYyypGNpqYS8tIsa7BmayHcxQXQ31DGJV1BVVYVFhFb0sdf6tZCAJs5hUn0eJyjUs0bBRvhZleCYd0H_k-Enz6w9wRgswfpvYaFY8HlQoqPIQzUyqHxD6I7GAZu0iA=w1920-h1080',altText: '',  caption: ''},
 { src:'https://lh3.googleusercontent.com/W3NIZ8l_8rcwh_F7ius6Z11SeIw9ovZ1PdSiN0rSFzkZyWtnfiH78JLe2RLsP-WBboVJrGyDLxcfweiTRaLO_R_dVRsjw6RSHFxrtt2iYbb7WT69gasNAqleqGGA9k7x615OL5QEGaU=w1920-h1080',altText: '',  caption: ''},
 { src:'https://lh3.googleusercontent.com/2QvifIzTKAFLYKQrLiCw4JmF8CManXdVeotzTSr2zArUNQeNvQXBlmzLMtREL8gC9WXyqU29zYT8tv5QUYXht7RcOTkPHakDcViztqRV4fDlBNDWKlAQcR-WiHea_x7nBzg25mSNPHM=w1920-h1080',altText: '',  caption: ''},
 { src:'https://lh3.googleusercontent.com/G8uwSJLST5Tv82nhG01FcUdr5nrz-h54N3izm5yd33HauLqgB9hAg-yd4ZEXuYo34MZLxrhee-eUlg2MHWBCl3wkpA3rLnEnV5o9jk-A597oTstOJq4l0omHammgaqnMqx1KapidLLw=w1920-h1080',altText: '',  caption: ''},
 { src:'https://lh3.googleusercontent.com/mJKC46rAw61unFMJujn_Wv2Q6OqdjRVY9lA8iQtdxP0DH8_PF5DeYFFyZu17dqrbbQbHDsZ17CkgHn3TaNTzV3m1_ZgLTEKXosuGc0Bn3L7PmFIBtThosHImJp6JFJ-OnudMWRkeZzo=w1920-h1080',altText: '',  caption: ''},
 { src:'https://lh3.googleusercontent.com/-CZeONiFNiHlDqHTlfySVn9c-KyvyQkpSV-FbKSqdpJ_mmwwtgfvKcfqVw5im4Z_-7bMyKdzlxO3XW0vy7UqmA07QJ7REZ5JI_MD9Qsho_cLmUCH-KoweftTQ5eAE9HQYCScb0IZ-hk=w1920-h1080',altText: '',  caption: ''},
 { src:'https://lh3.googleusercontent.com/00dQEWPlg5a9-cGJIY4r_mjd3nL75eFvxD3oSF-JHDkIyeMXY4Al2MN2w2sxLiOg-xNRwFsslggvQVlOVONgkf_-_HQ3ff81V24PO6FPOmcFJ6BQwf3bcqszzaY-COGRm3tCsM_Uigs=w1920-h1080',altText: '',  caption: ''},
 { src:'https://lh3.googleusercontent.com/7Xf1hzcqM4fgNL3FntUpUrqp2Cza_wo4k9OqPKzCnFUExG7qpaXc5NwJbRFMsL-qhY4jP17ViFLa2HcTDk9R2iQ4p_TLaMNmoai6LHmYSRXaJWTqX0gwf9rrsvNtV20u0a6SzZN-Zbo=w1920-h1080',altText: '',  caption: ''},

];
const Hornellen = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="img-rounded mx-auto d-block" height="400" />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Container>
       <div className="card bg-dark text-white">
          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
          >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
    </div>
    </Container>
  );
}

export default Hornellen;
