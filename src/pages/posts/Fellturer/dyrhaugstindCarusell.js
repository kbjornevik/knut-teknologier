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
  {
    src: 'https://lh3.googleusercontent.com/N8KmNzWVTQcjT8vnq7vmKpJRN2XkNf5FCs6RcwOozNirBIemSRwZASVDUzjyJsr1m3N9_S15pWTHhvTeJQsttj0U3iNJ2QWImF9aw97NNQsAKHBp57m2HMx5zKhZaILHteOdKEsO3g=w1920-h1080',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  { src: 'https://lh3.googleusercontent.com/LnnTAIrC_d6Fqt6ssjtVpbfLmfQvhMaGRL6DrnRmF2hvi8usN2r3Xm2Ix_CFpoasVZ0J8UVcRyQPW-wq0a5fE6b_x3ea2QYLUc7JiY6WyCgQJ_rz1Qo0XKPdQ8fk7qAE-nABVIGemw=w1920-h1080', 
  altText: 'Slide 2',  
  caption: 'Slide 2'},
  { src: 'https://lh3.googleusercontent.com/FESLAcCU1xwvjH0krg4RMXG10t4HAAt5I9VR_lT0yWTTEajO9yGaTRCRVxzUVTB_6MUoFu5NMeLwxAPnDlf5E_fNCo_b-1BN_vepY89KoTjEyjlz858ivbPANEnT1KUVhUleEK4liA=w1920-h1080',
   altText: 'Slide 3',
     caption: 'Slide 3'},
  { src: 'https://lh3.googleusercontent.com/JbUvn8yRWgqyMfqDMSfch-ZeUX8T-8tNfX4uhSqC7TonjgOzAA-nejgxpgMMYlyWGDA-h_tkwRnp1oeT5QpTgW30KGzJEqYa03teWngGJ1Iyp2TqaYefPPu8dFi2siJTf1r-4kOYoQ=w1920-h1080', 
  altText: 'Slide 4', 
   caption: 'Slide 4'},
  { src: 'https://lh3.googleusercontent.com/qFbCLpsN1_3DZb--2iem-9oWdK_AyY0zmIK8k32B1jgxsL1W7oQFc_I9QBSP61B-wTCmD-PK_VDGt3Y8HZLg7cVzYh3sRzaH8NNojnK2nP3d4hcuHdDqLvD1CYgDRF9IIelf_k5nuQ=w1920-h1080', 
  altText: 'Slide 5',
    caption: 'Slide 5'},
  { src: 'https://lh3.googleusercontent.com/X5Jlg_pnMSCMwq4IQt05ciWPEqKbC3XkdSO-BmroVi2dLSP8GyXi7bmz9I9P4D45B9vjCMxTNoE1bAIwdfc6ap9mFyOjCok93wx1EOIBbJGhWVtz6oI2oGZRL1gXQiGcATJnYJA7Dg=w1920-h1080', 
  altText: 'Slide 6',
    caption: 'Slide 6'},
  { src: 'https://lh3.googleusercontent.com/DP6tnATtG_q2N-pKkZgYqA6aTCVdQNWuy8VPnQVbyopeWVLJqtfK_6Krozwx5_8lS1ucu_jsxa7P2vDQybo7JdAExmqN5eRW5VT0FxX0hBYF1UNj_Aj0aBfP9xGAMBaoWgqc3cyTWg=w1920-h1080',
   altText: 'Slide 7', 
    caption: 'Slide 7'},
  { src: 'https://lh3.googleusercontent.com/twNK_Cd_7sgqPw0qq63Bp_I0rZ3efpjY_NDRXuQG0fp3gH08BTd82JWkmBprLaUaU1eiVwSZ6zG8dMhEckAmsdfomhG8lFv1DCHfNwrhKg4r826iZlLDu2SU2sOEirZXTPQY984riw=w1920-h1080',
   altText: 'Slide 8',  
   caption: 'Slide 8'},
  { src: 'https://lh3.googleusercontent.com/3csZvv_dnzNsa7SDUjzJRdJwblsBGM7lm3_shBVNL0taVN8JAu33A8hedAFELbOi8KZwif13vDDLRIHM2XhIg6u51axcog9brMGdmQDRE7nR0PMfZRUVQrOXNQygoNLPEX9Sl-OMpw=w1920-h1080',
   altText: 'Slide 9', 
    caption: 'Slide 9'},
  { src: 'https://lh3.googleusercontent.com/Hidmnxi5XfNDOg6SVXF_7S4fPWKTa2wF0U4lpARbWmtdoFtahj810IsV3HGtu_sMoOMBohWXXiv961RhelfpwjIF5gzy4uNeTqtKW2ZzvjVaGsIWXDWR2CV2plw4l0CekZ__suIPYg=w1920-h1080', 
  altText: 'Slide 10',  
  caption: 'Slide 10'},
  { src: 'https://lh3.googleusercontent.com/zcMWCd4OUQ_rGqozhUVQJ6H9GkQEUY4Ugr47EZGRZkOqFDbrmgQPeyGWnJKhqDT1nauTgUwPLAubJfdZAgUhWnKTJZVKn-l9d4F0cP09s42HgMo_3IWH9Ra_ZMMSbyjV-j9kZXZLmg=w1920-h1080', 
  altText: 'Slide 11',  
  caption: 'Slide 11'},
  { src: 'https://lh3.googleusercontent.com/ZEyHlU8yXtLuaJ0yHvoVqaflJvovECkBoCcOnFhkTfCTvchry_jgBgtxas8phu0z00XNEkLPpGk48-dVkkTzPnb4ROmcDFyD-dmYPuwOIBqxtPBVca34qNJHCbAsg2dGaLpsK7t86g=w1920-h1080', 
  altText: 'Slide 12',  
  caption: 'Slide 12'},
  { src: 'https://lh3.googleusercontent.com/JnGZ8LoP-TEX0hc9ANTR60S4zs3nLTwE9RkgWpHn-RWBINywbm108mMYUEmDpyp56tqn3fsFtZoGq_UtxYWLG2qb7Xu58XbQiDbgvdTsc4Xx5OzvrhLDcfh0tbOEgqUvJGuBb5-qDg=w1920-h1080', 
  altText: 'Slide 13', 
   caption: 'Slide 13'},
  
   { src: 'https://lh3.googleusercontent.com/NUABDtsR7wmbZjnLvpsWu8y1b5AAqmjiUauOD1G4BrtL_2R9HSbbkoWKeFvRibjl7Y048HVYTvCRy_WC7OYgAfhg-7A2eAx5Ew99A22QD_2WdSWuamR45o6TLmrs2wFPN4Q3CIDDng=w1920-h1080', altText: '12',  caption: '12'},
   { src: 'https://lh3.googleusercontent.com/y3b7Jl-AbsBm8g5IakXJgQi2aDrchghKCe20Zyu18eAlEUngvnvDmSE5ymL_MeTjk5daPYD8k8V5pA0WTr213XEIY_8HJR-sZ8n58fXptaGYtbadyz9d8g3eMkrf_nXM1KNpdycPNg=w1920-h1080', altText: '13',  caption: '13'},
   { src: 'https://lh3.googleusercontent.com/4qtxA02TwnaQiZQL_4WZb2RlFfjAA3HBxjYV71fwjnp9xU-NwDXSPLxh_EYoo8X4DanTIutnPd85UlOSbHsP7_07xfbQT-VbwoEeJYuL6Uqqlz60LniRYTilOAo9XOVany8XkN50xw=w1920-h1080', altText: '14',  caption: '14'},
   { src: 'https://lh3.googleusercontent.com/g0k093eEjlI4H0F75rElbLHRnydqcd9f4NlOZ1KxuSTBhTNBEqaJCOHsskGmxmISzrF8xGTjwkNId1D4EdJh4ZnMmRanHHrJnUH5bTCYnJ3cZsPLqFZ2DuDj9NUY5miHKOo7pe2gRA=w1920-h1080', altText: '15',  caption: '15'},
   { src: 'https://lh3.googleusercontent.com/ZIJoUiPbQG-gT7WSnKGbiwLA-QRCy5ceC0P0cg_bJNf78OFeiDnldoMjqGfB4N0rtEbPdy5FeDc3cfxfxxZJGjknsMpq7ml5aLlL36UPZy_mmKyqtsQQ_MmMWCWlhC92M9PPEcHhWQ=w1920-h1080', altText: '16',  caption: '16'},
   { src: 'https://lh3.googleusercontent.com/z_8C6uu6OmsfWQEaiSah1qEPR62eWlGnxrDE-87ugwbo6RU1_tPJxAw7oze9s-vcdcy6I80oTT77kgAgV-bfxBa3XF_7YwGO9vPl2R1Tk7u0S1ruoMi6IbD8GpM47WwMWnJvw3aexA=w1920-h1080', altText: '17',  caption: '17'},
   { src: 'https://lh3.googleusercontent.com/od705fXiquABxEgjOvNJuuVmxYNUEOuWe-cL5OVaFLe1aLt6R3bPGvUqVC8uRu-D_AOqaWd93yUyKxa9yPbqLVEsQJzb1FXrg_XE3pR-rUsMd6I2NK3uIWkYym1JL3-Vr_PqIHApnQ=w1920-h1080', altText: '18',  caption: '18'},
   { src: 'https://lh3.googleusercontent.com/IAmrhhyWbQuMuZ9bznHHgaCLj2nnx_dlUb5GVQ8xP0QzjOCkG4KxmMJV0VukWe7-do-qEHhDv_SFvy4YwUFgrDWQ2lZI5fdr8WmOA9ecQaHr1xU42KJf7Y6N3741TMfwCt0kwIdSpw=w1920-h1080', altText: '19',  caption: '19'},
   { src: 'https://lh3.googleusercontent.com/uncPgFXV3DHvi1nuLZkobzMCavKfXCh-L7Xih7F0ulPxh7-68R7q_cAaZFLwH5uPqM9ozMnhHdzYRicNQfEoewx7I3ImQOE2wA8doG5LbwJKehUjarFX2LnBwxuhF6DaTDBdyrZrJQ=w1920-h1080', altText: '20',  caption: '20'},
   { src: 'https://lh3.googleusercontent.com/mdYqCYlY_kTlcmqUQIAmaHhZrxNNcEikCveyZZ_hqHXssrppKuV-rVkURGK5zqCpSVXvQOEOmc7XlVyjryFPC2qhwzqqVFMKhYHX2UaP7nU3A3n57g2J9CSjzz8o5L0Nl988LTuOEg=w1920-h1080', altText: '21',  caption: '21'},
   { src: 'https://lh3.googleusercontent.com/kfyhOafErtQELuMHW_-8b44mgymY9OvQnbraFtWHfos6P40euOTPRghj1GIC0swinY_VeNgN9pUUwfMCja0_gcUf6TmCu2YvPhslFgjHeWCKNCMCLxvnBdC9bhW_E98SgKYLeVpa9Q=w1920-h1080', altText: '22',  caption: '22'},
   { src: 'https://lh3.googleusercontent.com/eKbH55I3FlvVMZLI12Iph5HLyhBiYxSxRk58rl4fTQAJ0NyG68wvCPxjifty56pVTm6XJsikRrgB0rs_zx2idt06LhaSXuTf96OmFZw7PRR1kAb_NKS0kgN10vS4W5qxctqseOZ6Pg=w1920-h1080', altText: '23',  caption: '23'},
   { src: 'https://lh3.googleusercontent.com/xVjZdml84TcIt7sBm-BT-JVgdwgY0gw2czQhPNnG4BAsVK8mUTY_41d-LRhX90ux8dys1UTWU1MQWg4LAbVkvzSl8oudmJMyUNcQMxgT9Y0IN_kUHtG_mt6YDTqow2pnZLCM-b2lXA=w1920-h1080', altText: '24',  caption: '24'},
   { src: 'https://lh3.googleusercontent.com/LNBrNuFYjH_wAtqkSajw20aG7l1CDmYHhr4ep9WH6lzUCkfF_el9kTVO62MPYBi6nXCwQ6zANRkNNODYiSyFzRTCvSLwDe0kX_pN4aL9CbrNk-bQEGRPGlD7oG8yk9NQc2foEpae_Q=w1920-h1080', altText: '25',  caption: '25'},
   { src: 'https://lh3.googleusercontent.com/QYmFypuZ2Z79Tj-KO1wBmLhoPR2WTUqC1k5_8qLwJeEoy-pAKAT8Wcx2vtrZ6GIKBS_5SB8k0bauOHzArEmoAzlHt0zQQKVmaPbVA_GgnxMTyj1esbH0_YRDp8kP9HWAvD0yL5gEoQ=w1920-h1080', altText: '26',  caption: '26'},
   { src: 'https://lh3.googleusercontent.com/GZuzV6puvgL0ty8H2VQObldUt-Dr59VSqy3ktZ1nmTobSREfOcN_-izC6ei33kYlfBlPSV1reco7XyExgBfvfm8kSCFTiU7U8qmEvwQWGD8UWf4maz2MBYR_BtPrUlpTm27dDQTn5Q=w1920-h1080', altText: '27',  caption: '27'},
   { src: 'https://lh3.googleusercontent.com/TMqomvfMzKeSEF_gwwKmcrmLnWf38DFOrv02Wt0PSKE2djgkTi573LO1oi2myA-K4YT-LFkiISmBcVKRHH3_A_dtMDOmH1Kqib1HgszutSuB2SUMWYTBy5ODnTuV1LSAhesHJSszjQ=w1920-h1080', altText: '28',  caption: '28'},
   { src: 'https://lh3.googleusercontent.com/9cyWQ9dNFO2T2E0xt1ER1D4HYC4lCrrduORKvu2I8U4UtaNM3jYhk-fgV_cQnxUcIJY1gc_WBvnv4bYqvWWv0Y-V1tiCdlWlxMm6AkgsMwNSmAKJcHClMLolBIYEOOSS65TvMWxMXg=w1920-h1080', altText: '29',  caption: '29'},
   { src: 'https://lh3.googleusercontent.com/VBjp2jbESSYHimOaN_IFwHR6cFnvNIFfmkM60H4f6iRV2EpTGBthqYZielA42w-3uq5WxgcvwZD1ernjb6vlqZI-D63VsFbQqHDVf7oK2DREyGIZbFd-SeJo6GMylFIn2A6BX0n_lw=w1920-h1080', altText: '30',  caption: '30'},
   { src: 'https://lh3.googleusercontent.com/ICpEfekvUzryDqo0jugPEbdP8UjeKwf3-HUDobocKqjsrTSFzNDBOfCA0GkE1tNGg57oNhcKtLhn-HgAvFSx9HvGjiyyWBZTQFRaGKF871mBp9s2sGxiodz362uKkIq2i3r3K1yPLg=w1920-h1080', altText: '31',  caption: '31'},
   { src: 'https://lh3.googleusercontent.com/6MFhU-cBIqAWt7oc8ItKncHjHFNi4ANH4EKTUKkb38YYX8MjCah_h88_uZ-OvWhfzL5yiWPMY6CYz6XxXCXruNEsoxae2iaM2iaocgXkiws03SdBos9WI7kFMYU9F9zGK3w2oSAmFw=w1920-h1080', altText: '32',  caption: '32'},
   { src: 'https://lh3.googleusercontent.com/wv_-OYV1BDCGfh2Sxag2CmRhjjoHIT6_2oViq_yrx8CV0ubpAFpL6rV8FSinYS821Fkb6ECSApQh_vG6AMYGavPXeXFtJpNnzX2Uj_zDM8VD_sOqkR1FgdewFcD_KJQOvQc5g09gsQ=w1920-h1080',  altText: '35',  caption: '35'},
   { src: 'https://lh3.googleusercontent.com/_fGtmXhhI_xp0L5CceIHwLvHQaObmxWFQLy83MbWX2O6-460TjNmYHQuOQWhLzV--rzZlXyYIvfF0pjakMTHF17nrU1ly9cxUqMSsU_xaWooIAavdS6Icc0K0yM0GY5hQCvin5i2Og=w1920-h1080', altText: '36',  caption: '36'},
   { src: 'https://lh3.googleusercontent.com/eWG86PCc59iPEvRsKdvrj60DVaXb8VKev1wm_npEQVjvcIJDB-t0VW3KjaWoE9RZWOy0MSV9lHL4QriGaZyvkfcfkX51LFaj_DxQewVg1aTdH4i3ytQJ4iyjEYOw19LapbRfNFwR1w=w1920-h1080', altText: '37',  caption: '37'},
   { src: 'https://lh3.googleusercontent.com/_Fp39332ljY7oyrmfTbzHUmAQoZ-TpziGJNgMnSTrguhPa0BhXdqnYxvkAqosCtzINu7rsHWB6-FNuuRxGqKo8QbNUjiddwuQYlqLOLZmtikHd-ByMhaIry5jsx6fX8Hc9R7kM8zHA=w1920-h1080', altText: '38',  caption: '38'},
   { src: 'https://lh3.googleusercontent.com/OWpnA2H5SBnuzEYP6YUh1Y2_Y9CWuowQsb5pfzQQtnFAZ84SNiG73d9uH75c3oIvbB2-ygwis5WRizVkzUet3WWFqfyxzbiV4j2hYD0sJ424OCLLPu53E5T6800Rmj3Z-jjyxAwB3g=w1920-h1080', altText: '40',  caption: '40'},
   { src: 'https://lh3.googleusercontent.com/QL-0JGP6dXmfN5iBGM2mNvsZqg-m2ERKsx5cnrz5J8vGjLSYR1cEqZFfVdsLDxRmbGK7KtjGlRtrFV5Hdv7q1eEBQf5NAT1npocw8Sd2MQIWf_6zSSXFFh4Oo75oeYG5HuSBz3WoUg=w1920-h1080', altText: '41',  caption: '41'},
   { src: 'https://lh3.googleusercontent.com/Dx6D0cKaU1O3AyKUuZASYaAcEsypzYB5IOV7hxnLNJ_tCWAYv_tZnszhB9ddT_bcWAwfKYfvb80WtjyZBxj0CIaPrJdhCKln2hKP2qo29GSvBT8QOc4fHR-oZtDqPuUFpgimRkXPIA=w1920-h1080', altText: '42',  caption: '42'},
   { src: 'https://lh3.googleusercontent.com/K_M7avTeNXEXlWQJ3ixJtSaBTBdVbuDkCdvV1j5IOAJkxVqZjJir8KJYWyQ1Jze20G1HzQ8kNGAyfqPuAMc3fgDkwyDAkzn0To4ldwjvnYDhX_YNc1-zV05lZsslmO2_OurgvbhESw=w1920-h1080', altText: '43',  caption: '43'},
   { src: 'https://lh3.googleusercontent.com/6U7O5YVhX9fwh9fk5iTGplh5_3wuXiCCi4JDBY1ciT257DmGHkTfVSHraznJt-gfQpvyLSoBttX5VCeBHw__g_VY2JR5PyF3PJoNH1zP5SgWXHcVDJ7elzvQMSehuUuDFw3cO6xKCA=w1920-h1080', altText: '44',  caption: '44'},
   { src: 'https://lh3.googleusercontent.com/NjDixu2YUCYkD-bbt168UHNyA7AunWXOZEBAwWZICPsEiGBaS_u5kz4t3Zs46Zm07fbqP-nzQtwm7NEoaaBwcKkrPxQqKXuyAgCDPGUEju7IGj6rACcmTZYu21f7CK_E55hdADn09g=w1920-h1080', altText: '45',  caption: '45'},
   { src: 'https://lh3.googleusercontent.com/bxC_v7qTZB9kjOemvxFhn1wGhTbKa3JFb2u3mJlMTPvm475L7iHCCBQegt4nASZcKCvolpfbOQ0viB0pkbmWcYvf7Lhoxrco5b-E2XNmqXIe9Wg0UPyXEBl2Zf2Jya54MKiOVpB2ew=w1920-h1080', altText: '46',  caption: '46'},
   { src: 'https://lh3.googleusercontent.com/rDJBhmjBq75qs9AqEQpNwkqEpFhDOEwGrMOTZmKvi6hZVZm4rSqRakVQsoKZsMJrwsrQ8zu6hBjD0WX6ZwPowUnbGDNt8Q6I4NZvW8F0T1r2tknnFG3AugEm0Wtsekq722xDmzuMGw=w1920-h1080', altText: '47',  caption: '47'},
   { src: 'https://lh3.googleusercontent.com/SkfzI-Ecf1giOiLMlbz87uBBd3RbBAOthA62LbyNliFKUJT7rx2MKa7vo_UVRkdApCLhZCkPLrk5e_kf6mBLmzQMHDnTRUFJfGOgACVlbfbn1vSQpZsNVXD1RY6FuSIFVrdZoBGykw=w1920-h1080', altText: '48',  caption: '48'},
   { src: 'https://lh3.googleusercontent.com/nhaqFahkHyFKYTIJHysPsk0YqSKMbg2HflsdRmhjCP-wUdgiE4Uys19enNjKmgmEm9uZfIgu7_m-UXPrq1rQC6Y8TayAJuWXtFyKwojVZR5Pc_7MVrUfl481i6_vNXMywsz2pE8eog=w1920-h1080', altText: '49',  caption: '49'},
   { src: 'https://lh3.googleusercontent.com/nTYW_A0Qt--7WmGm1Ab7IqV4TDLRgeDoWfBZbgK833jUd0uy4aMKbsblH91JdcSD6X5xDlapefo3iB92CDk5ADEGP0Nk_VARqCxgo6Cpv5pFAys4X8wgmCmJ7WZwDHwHj4EHzJpUiA=w1920-h1080', altText: '50',  caption: '50'},
   { src: 'https://lh3.googleusercontent.com/LxQpsnC2OF5wXINI1ZR_3S4aILYzSFmsdGehOSmA_JUUjPyD0uMVIHIE74wkyT2ZXWXHJZdJXW-HtCD0tjAgPTGgZWzAnNr6TIo9XnILzzfz8YLon8CxbNfmWd8PV1IwCba9-59XxQ=w1920-h1080', altText: '51',  caption: '51'},
   { src: 'https://lh3.googleusercontent.com/3V6mXEv1by0fzGylv26-2lPYk4AR_0EBg_gL9mSBPzyvwQWYmt8vK801VJBmMNxLSLtZ_PHxxklyIy1R8fj3XaNpowg0in1ZkBvnT8q2DUv4HLRQRL3HenzNFRI3m4Ofz5gz8WPjGQ=w1920-h1080', altText: '52',  caption: '52'},
   { src: 'https://lh3.googleusercontent.com/jVjZ1dgqYd-K68-LQpHoLW2Psf_G9eTC-VstfIF82QxX7xhYEIWw9vYuegVYnyH3RVFob_RAp9_7AbcgBwuV14MxzvrqAUkEPggP4u91CnUqXylInt9W2-8b8l_Bs5m-4NPWhNQRmw=w1920-h1080', altText: '53',  caption: '53'},
   { src: 'https://lh3.googleusercontent.com/zz5-15-dx3OB7l1AHfRGMjSUMPUigMG4Hjj0q4-dQIVSg6Fcrtwlt_uWX4tAoCV7atGa3f0j_j4XYZoHVjuBbZ8Qz8eBu4PugHLhCEGuLCF_ValJsMxglRrNhOyQ97nUHhHdRzsWSw=w1920-h1080', altText: '54',  caption: '54'},
   { src: 'https://lh3.googleusercontent.com/go_6H05er-PDD7wLUPwVF24ysVBOG531f2Qd7XDXUN3WfPkZEgUb6s6gplosCzU7uio4bMXmTm37R7rvc05afUgX6nsQUoB6shAnjmDFhsqam6oPnA-gn1IBPLkhJvYGidXgOKndnQ=w1920-h1080', altText: '55',  caption: '55'},
   { src: 'https://lh3.googleusercontent.com/Ia7K9D3vh8GNGe5fNKqN47RV92LteF8lbSCLfJv3iKBwLLL91A20ZJNzi58YwLxwymkewdO66o0QXRFREZ0MPcTD8jnmoYpuKMPGqnlq2udvz1gY_dF86ZDGsdDeyqL15CvLErHu-w=w1920-h1080', altText: '56',  caption: '56'},
   { src: 'https://lh3.googleusercontent.com/d4XpynoIkSpAjNt45FAOUfAGPYPzbi4VNzsRyliHlNGgkGrQ44jGuAmdTAPfHhhpmhQTgugXemy45pjRJ2UY1RbX-3fKkbDce075Yby_HO5MOUtBfPJmC0XGlVeEnEh0E54fgJqS-A=w1920-h1080', altText: '57',  caption: '57'},
   { src: 'https://lh3.googleusercontent.com/3VCx6zQ3HYPBZKmXnuQg1Qfb7Mmw15fNy6Ird9iXs3hzcDkys-u08IbompFpOsH0wQSzBKAphWAhZ-YM4BST2RXmXrsrXx0CoCXauUz2-iNAZbuygtrGulJe6GabibE7uk4qjYzL2g=w1920-h1080', altText: '58',  caption: '58'},
   { src: 'https://lh3.googleusercontent.com/OViYI_8C8hZ_WsVb5Q_mdxygt04mXYZ8L-v-laoPPbR3zOUsqb1B38HqAnRy3oYBJzFvtjthQtfR7yo5rD932fCTfpPEvWWIgini3hM8OvRDpsyfrhYzVvo4SXXmHzPXzZbvJ4DdwQ=w1920-h1080', altText: '59',  caption: '59'},
   { src: 'https://lh3.googleusercontent.com/TuVOX9aIrnfh8lb66Z62647QA9mOjFJjo4Xr5vlmGJOFSDe7xJKZm-ESqgbBVo3rt5gmPJC6NPRNga3llroaqFDSEQStmXQnS1MHGqEXpKt-PEx90bztuIWOpWrXexcMfPYtpAtc6g=w1920-h1080', altText: '60',  caption: '60'},
   { src: 'https://lh3.googleusercontent.com/VUhs3nMYuPQSyf1Wb3AQB_JCcSod0pC417o8TX0Iv9dmGZHQc3YrS26jngxUhuJCB0aM0OuB0EvOAhmq4POny6csZzU9wa61CVjmzJD2z82hG3cdm1BnDWw438onBnTW1Su1jfxqtQ=w1920-h1080', altText: '61',  caption: '61'},
   { src: 'https://lh3.googleusercontent.com/n0AFAHLfSe0yif5jOs-iaJ8APcy3buf-D1Aol_4tt9WWMJKPdDZWfFkdp7bDMMRCtBZHQ6TfwVIIj0icaOtzirfY0ZzcwlAaMynZS5WprcmPcqoNIDfx-O5kj5k3lhmBs1T7FeqJJg=w1920-h1080', altText: '62',  caption: '62'},
   { src: 'https://lh3.googleusercontent.com/GL31L-kIBrBTsCHCfmS-cqaGbS2izszj7QwKK-Ue7ZSO0FQ1ohb7dcx3i67JAA59uIvdAmTEMlWJMvbtaOgusjmE_eX0KsW6nA7T02-HRODUYHZMzxkHKctI0Jx5e1PCcxtT5Wr_TQ=w1920-h1080', altText: '63',  caption: '63'},
   { src: 'https://lh3.googleusercontent.com/pGxPdQSeec2e1LPe39xmTM6UAfDIYAl8fuH0mCW-4K15du7Qiyql5KIBBgntBQQ5fG5kxfP3I6zpEUX0BJGQ0iaD2W1G8VWACH1joP1iTdki1eHGnpxCgL8QZs5n5SRcOw_tTHAHPw=w1920-h1080', altText: '64',  caption: '64'},
   { src: 'https://lh3.googleusercontent.com/rfkX2m4VAOrUa3NsMBcwg2ofu2p-rNnj3nQ4BfvtM2gspm5p9uTNl8FoxId4CXwQsf-MNxSLb7kM2LkBE_atSJBLh93WpAIrm4Q9h9uedCqhypbs8A3dC4AG2KEzW6tZYpe9NP93Jw=w1920-h1080', altText: '65',  caption: '65'},
   { src: 'https://lh3.googleusercontent.com/13hUAIBOyPd272myBfZEJ7eAj4kI7YpJMNQtwLmLVvq1POeTf-WfFYEct63F2wRZceu-RkWmWg8nJlbW3ytXvjyaHkhM4JFStXOf76aJuePaJi13PKYstT0CcIPw0BP9Oyh4OsLrvQ=w1920-h1080', altText: '66',  caption: '66'},
   { src: 'https://lh3.googleusercontent.com/vXuElCMxvU7TXUTGstxUGNwJebSgIyjkMYIWuOQU_35u9VE2eCuf2uGfkXVKjrHkgk5pY0drdPqXA9N2beQZphFhu-4EMtuAWrk3c0gWfxBweKgYbbTcHn0ILnvAmFu4hQ9I1IAhgQ=w1920-h1080', altText: '67',  caption: '67'},
   { src: 'https://lh3.googleusercontent.com/ZLkZ7eGm3NykqghA37FMw1Tip_ptSriq3LYU1W_rzQiSK1pZ218m9Z03WmXjohAHEbJ1hcbFH4z25qbFJgEReZdjFf34WNdKOSrVqqQoajn0BSTgtjvemSRyB2uX1k07vpr6newRcBs=w1920-h1080',altText: '70',  caption: '70'},
   { src: 'https://lh3.googleusercontent.com/cxesl7cLQQOafFha9rDmqhlZbRkcK3Aadj6CiolERtbkool6_S53628euhSuveP2wO7HbCddt0T5jjVEMVxfWhDiEGXK-rWQOOzjf3WVqAqtGQ0DZhhB1bZGNeenTjZy7gqUhW0E6g=w1920-h1080', altText: '71',  caption: '71'},
   { src: 'https://lh3.googleusercontent.com/ie3BDNs7Rw3VuBaobPK65QNIQAfPYd7PuadtzLYBVqx8HvHX0L9ApuBgoxF-yxTtW7-yd7cH81NA5NNIrFyyVoQTT2lcCef0shSFHsCnBrF2DYO6jvN3TBLss3G4-Vv8c53X21ya6A=w1920-h1080', altText: '74',  caption: '74'},
   { src: 'https://lh3.googleusercontent.com/WHM9qrl16rWhujLNIhBhCCNe_9c5Ql0O9uv4ZvavKuhHR5CDtnvB3Di_ii4hnAYlcVKywCKaRTlF7P4gMlprpdM5BZFYMCRPfoQxh6gQSmEHkeDeBGzfPa2VmYS5y2Kl61-FW0E4oA=w1920-h1080', altText: '75',  caption: '75'},
   { src: 'https://lh3.googleusercontent.com/4Bc4Yg_Q239zVcQ_EidWLWFWwQUy0uY6weXMS1c_TM92vfkRJOsvrBkJ_AILnqIiE9zc2SGhgLLIQqy7Rf3C03na2G90UVxk81wLgaXBWH8qaVzLbFKwY1xNUgAtQ0Q3uSnAvludUg=w1920-h1080', altText: '76',  caption: '76'},
   { src: 'https://lh3.googleusercontent.com/6Q91Czt6hUUpKiIYZ-Of4i51f_nJtNWbcaFiA8hFTE5dHO_AfDVx6Bxc1e3WNzdMFh6sZHHBkzMtqytXTysDBwutkSTWEi0JgH1IejR4D-OHDdzmPc_w2mRKwavoBm5EpLRgVZf4NQ=w1920-h1080', altText: '77',  caption: '77'},
   { src: 'https://lh3.googleusercontent.com/GnpJg4rTncq2rx8f7Vu-aqFwjyn4KlfiuXN780QtuNw2N277UAL-NHbu2-D-FG97o6QO7sCpcK95jKuLStuiXhiMr0ZDQ--pjCUAspX8Xt_DP0r3BqsNt4Xz-S9bDtSu9K8kMyPfCQ=w1920-h1080', altText: '78',  caption: '78'},
   { src: 'https://lh3.googleusercontent.com/GC5ox4WCdRtUDQh0zPywA-PoSi1gVzssmhvDs7mcIr_i6Yl0FN3EoHf2LnulrP423VviQKG5tMc9U8NkGNeqLcoG-2_j1FzgG5gNiCeR-_44V63XOtH79tQIKbblYHHHNPfrFVAKLw=w1920-h1080', altText: '80',  caption: '80'},
   { src: 'https://lh3.googleusercontent.com/JYm7rh4w3YahS4KMw27H7JnMHxPjKMkDEL-2MVC2M-_PQIsvBrLtQgpAuPlzXtUjJW79tP0jZjtFVX84FiMYg8gb-IUYxSwRCFxlzNpm_4cPymt3dNTW5It9cE4DJHzBBRXQI_s64g=w1920-h1080', altText: '81',  caption: '81'},
   { src: 'https://lh3.googleusercontent.com/zpjeEEA_-efM12jdkke-0L_IV_xpj1__x4QlqqLxPM-Raqk4wgiXfQF9twDXQSFD1O-5rDPqvBwtA28jjmSxqJuD1Gg8WxwO4qJIWoDeDKmmchJpfCfbp77EQymzb7eT5Wug83Yi4w=w1920-h1080', altText: '83',  caption: '83'},
   { src: 'https://lh3.googleusercontent.com/dUpRmsshOVtS5EM9yTh6TvSAyZ0YazyZ8hyAvfwfk7ThA8ZcMz64y36Sz3obkJiCy5Uq0FRXFL3y2MGtkD_ZR08D7R4wm5utm1YzLuxHCGYm1qTON6oF_hu9UwXck9sVfylqDC7_kvE=w1920-h1080',altText: '85',  caption: '85'},
   
   { src: 'https://lh3.googleusercontent.com/reiFJhHpCK68mZ-vUFysHjgAgW3DuYOp8evS4RQo_XNvbgQucutnuIV_fI5_hqi8JyBgtCmOwdJCwvPr2lEaF5-i7EfuieLyN4rryAhOQSSqYoyZ2pDLduJLTMecylZeKEfWs3ihD44=w1920-h1080',altText: '89',  caption: '89'},
   { src: 'https://lh3.googleusercontent.com/ji8Z7exaXdjlfRytjbydEY3GT0zaGEu7g47DsYsHlsRGvWO8Bh6gIpMS8-FLT-dC7NzZfVK9hjyizRJ5jIoYs3mEooqF33YetFMc4acODr9J9Ff7pfgHkEG3Qcwop6JLAocZ6SKgNw=w1920-h1080', altText: '90',  caption: '90'},
   { src: 'https://lh3.googleusercontent.com/mNZ6TjCTyO-ONXpWHBiUM7jIBiUwKgxTx5p9zp8wW8vxWpz5eE-DxkeWSN-ZoA4xRAFxLCmrWYsmcSzi5T5EOY0vpSUUZhszSi0zK9pgANbXriXAT63UwT__ycU7NMGAHpQRSrUYnA=w1920-h1080', altText: '91',  caption: '91'},
   { src: 'https://lh3.googleusercontent.com/ndtxEVzEhSWyX0pu96M5Co8D7Gfc75RABee-kKd4U5sNRNcrCVRy5DsPritJfrxvZ2aCwte6FhZLqloPoQYFRyIdoANeccxFnVB2cvjRSARaRQstTjIVvhz90CKdmpkDLNfzZBrqwg=w1920-h1080', altText: '94',  caption: '94'},
   { src: 'https://lh3.googleusercontent.com/W5_u29kARBFHF80CPPCvgrTVybdFK6XpjzjBBN120b3aAb_vxDxUzWnqZgYZtF5JrrOp0uYlIoQrcaOtll98teRfg8BqSIDFX2oGvvkHvTkJkGqkWxFksCFurc_gZXD1UuI4FLQVhY8=w1920-h1080',altText: '95',  caption: '95'},

   { src: 'https://lh3.googleusercontent.com/HdwLNvPEe2hDl0GgQvB-5Fb06VS_XZrcS4mooE12IXYUbTh0sM2l1NGMdWjz1O_69UKSA2F9EoGSVuG6a9CTjgcc3NCJLoNO0iLjBSHgRk7Zms3cajlLvZ4S9q5BqA2fGeuqWDSNMok=w1920-h1080',altText: '97',  caption: '97'},


  {
    src: 'https://lh3.googleusercontent.com/eatSuPhFrRikBtLsCXTxxnlU7fWP0EFNlxidW-pE4ZaFBebXWMQ--LQb7qjiUV60n8lpblFEgYDaHDxADdnr929O4I0M8y3OmdQIgxE30uvGYsi3L3oys0bLcC3MNotphguSJO83zw=w1920-h1080',
    altText: 'Slide 99',
    caption: 'Slide 15'
  }
 
];
const Example = (props) => {
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
        <img src={item.src} alt={item.altText} class="img-rounded mx-auto d-block" height="400"/>
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Container>
       <div class="card bg-dark text-white">
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

export default Example;
