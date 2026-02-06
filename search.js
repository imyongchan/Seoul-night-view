
$(function(){
    // 햄버거 버튼 클릭
    $(".hamburger").click(function(){
        $(".sidebar").addClass("active");
        $(".main-content").addClass("sidebar-open");
        $(".hamburger").addClass("hidden");  // 햄버거 버튼 숨김
    });
    
    
    $(".close-btn").click(function(){
        $(".sidebar").removeClass("active");
        $(".main-content").removeClass("sidebar-open");
        $(".hamburger").removeClass("hidden");  // 햄버거 버튼 다시 표시
    });
});



$(document).ready(function () {


    const imageMap = {
    1: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAzMjVfMTg1%2FMDAxNzQyOTA3NzUzNTc5.n1h8rd7SjiubCD6xMOdxIqMAoQuqurjSpTNXxbpfNI4g.z-RklGockBHb_x7T3X6fzC0RzEu6fXDOARzuSgot2GAg.PNG%2Fdownload.png&type=l340_165", //남산타워
    2: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fwww.sisul.or.kr%2Fopen_content%2Fjangchung%2Fbbs%2FbbsMsgFile.do%3Fbcd%3Dchgallery%26msg_seq%3D230%26fileno%3D1%26size%3Dmiddle&type=sc960_832", //장충체육관
    3: "https://mblogthumb-phinf.pstatic.net/MjAyMjA2MDZfMTQ3/MDAxNjU0NDQxMjU4ODA2.34G4j_gh_hqlzDhTEaSznU4s0r_Ng-MgAXeIHdxzvLYg.DHhdhq1Xrs1LzZiiP5_w1lN85Jp1kYXyqJx7cPATH2Qg.JPEG.gina171/1654441256953.jpg?type=w800", //용양봉저정공원
    4: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA0MjlfMjYx%2FMDAxNTU2NTI1MTA2OTg0.aXjszu5uEBQQFiH96hyRcUip_FjJxvs064keB8nJIxcg.er3c2s8OpqAQ3XRreO8vq6kuRae4NzDLFAjL86m5JaUg.JPEG.kkdaykr%2F%25C3%25A2%25B0%25E6%25B1%25C31.jpeg&type=sc960_832", //창경궁
    5: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEwMTVfMjYw%2FMDAxNjM0MjY5ODA1MDQy.7OCVTzHAsY1cZooXr4C3kc3-Np9Y2qB0fRkXRcEtYZYg.w_PopPNPg-rQN3DREgOHvY58RXa0P8Gq0Mc4Z5Z69ogg.JPEG.koan456%2FKakaoTalk_20211015_122551224_04.jpg&type=a340", //서울어린이 대공원
    6: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA3MDFfMjk5%2FMDAxNjI1MTIzMjYzMDkx.KlHDQ9vu1FqPL1AY9Ck7fuf25SVYtz-4PU5mypBoZJ4g.sY17oAadAkAAB-obc5Qdv2y0sveYAO9zICy9OkcT47Mg.JPEG.soulmate1983%2F20210520-G7X_Mark2-0006.JPG&type=a340", //창덕궁
    7: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA5MDZfMjIg%2FMDAxNzU3MDg4NDM5NjA3.780db5MM3Iqmjtne6RM0o8BepTdPHNwneXOGNu21rWgg.ldz65MyDOpI-aDYNPvCxbCxrydmGZdZ5rzegAVtKWJ4g.JPEG%2FIMG%25A3%25DF6258.JPG&type=sc960_832", //여의도한강공원 물빛광장
    8: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20140809_116%2Fjjang3866_1407578307217lDc11_JPEG%2FIMG_7661.JPG&type=sc960_832", //뚝섬 자벌레
    9: "https://lh4.googleusercontent.com/proxy/gTnkv0Nxhjfz8qmJX9AZNagYbHv4FZTRaAY1-aGYbqONQP1FfEOtTvqNyfVC-MnKYQadaaJO8KdZohJd1PxAYyGI3cporFhISi46PXrAMGPy3JxoZ8jPPCg21aK2xVoFTpTBcoZfkg",//청계천
    10: "https://t1.daumcdn.net/cfile/blog/227D0B4352D0CEAB12",// 성수대교
    11: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20130818_36%2Fzameica_1376789896556txkhY_JPEG%2FDSC_3241.jpg&type=sc960_832",//마포대교
    12: "https://hangang.seoul.go.kr/www/file/smEditorImage.do?fileDay=202302&fileName=20230225225201060683e36d2c4e9398d068e503505a3c.png",//난지분수    
    13: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAyMDFfMjkz%2FMDAxNjQzNzA0MDM4OTE2.baY0kOpcm5kH8uUGVeHMgAn8W8ik5ockEmodjarzG0Ug.CEV9U2LJp9uIqPXcKR7NA6MLJbw9owf55QnsLQG9s3Ag.JPEG.kelee123%2F220131%25281%2529.jpg&type=a340",//이촌 한강공원
    14: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA2MjNfMjA3%2FMDAxNTI5NzUxNjY4NTEx.L907OIYU0PJr7b4tMEa2GANrZa6PNs0IPlcN4vQXM5Ag.GHXEjaFkdcEZEJdQM7M_gqbyktxeT4FcNlxvljPr95Ag.JPEG.crossroads08%2F20180621_224008.JPG&type=sc960_832", //남산공원 백범
    15: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAyMjBfMTgz%2FMDAxNjEzODMwMDU5MDk3.wO3NeRcyFvl8gR2zXLI6drfwF1GGtLQ1F1tJ4PLC0i8g.86_dLApMZ5VBpsqHcvez1WZDd1jF9LpZ99vdUrYbdUAg.JPEG.gooddayvic%2F20210220_202035.jpg&type=a340",//사육신 공원
    16: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAyMjVfMzMg%2FMDAxNjc3MzE0MDg0MDAw.FR2zxIlQ2MQJAPrzz5zBwSKmUP9NZ9NYAsHipCp79xIg.U51mZM68B9k91g0q2CMIZG5_Wff2GuhV9z3rg2ALx7sg.JPEG.ppcdsc%2FSKS_4471.jpg&type=a340",//월드컵 대교
    17: "https://img.khan.co.kr/news/2019/08/04/2019080401000360000024281.jpg",//문화비축기지
    18: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA5MjhfMjk3%2FMDAxNzI3NTIxMTEwMDUw.LcLzD-8sN5KIcf4WuFjXf9S1SPOeBlwHZJ_zu2y6b2Qg.WL8OK7vxZEZOhh83NKmVNJf0iEzlVR_ABUJCxyMP_Zgg.JPEG%2F20240928-003-%25C7%25E2%25BB%25F3%25B5%25CA-NR.jpg&type=a340",//숭례문
    19: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA5MTJfMTIz%2FMDAxNTA1MTY5NzI2Mzc3.IH0iOV6ZL9lo1vaG2wxBYXAOA8BJUmMUpgFni6Z-9nEg.S2N0cIWND8Oj6zlJmvnRxzPQ0C-xDrInv7D4XIZVEMUg.PNG.ccito123%2FB95A7832.png&type=a340",// 월드컵경기장
    20: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTExMTVfMjUw%2FMDAxNTczODI4NTMwMDA2.6DHaLyaSiH34l2MLfRBcWvbR6K522oXoh6f37vz6atcg.Rca7gmMppZGqyni6H8xxBr_GAdVUULQO3EV3LIa5DYsg.JPEG.supia0701%2FP20191114_194804000_0633DE13-041F-4994-A64D-71E33B5F6D6E.JPG&type=sc960_832",//노들섬복합
    21: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160628_91%2Finqproject_1467076010660YGM8t_PNG%2F4-%25C0%25CC%25BC%25F8%25BD%25C5%25C0%25E5%25B1%25BA_%25C8%25C4%25B8%25E9.png&type=a340 ",//광화문광장
    22: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20131024_205%2Fwhitekori_13825890926573Acz3_JPEG%2Fundefined.jpg&type=a340",//월드컵 하늘공원
    23: "https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20140331_271%2Fkalpsy0_1396236471494XLKvr_JPEG%2F%2527140321.JPG&type=a340",//DDP
    24: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20120519_28%2Fwbyou2000_1337386944772sdj8k_JPEG%2FAAA_5671.jpg&type=a340", //경복궁
    25: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzEyMjJfMjE5%2FMDAxNTEzOTAyOTgwNDM0.rx5N4fMBK8TYpnJxi4aNcPNd__d9Pp6nju-R_J9iyAIg.Irzuu4pEGJ3CI7i-6ifnMX3O5MpxryJmuCjwn4IjYqEg.JPEG.cnt_reporter%2Fphoto_2.JPG&type=a340 ",//서울 미디어 캔버스
    26: "https://search.pstatic.net/sunny/?src=http%3A%2F%2Fbbsj.kr%2Fdata%2Feditor%2F2103%2Ff9202b9c1efddf0f22a599543ad7095a_1615271979_7052.jpg&type=a340",//덕수궁
    27: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA3MjlfMTgw%2FMDAxNjU5MTA1NjAzNTU1.asxpRvbUVuk27vIqEEStL5ho9s5QE_79jOlVpsfy_F0g.kAq10YicLO_wWvr6T4cOBp6FuqPjr_kLcfmObtQDcQsg.JPEG.gina171%2F1659105603298.jpg&type=a340",// 반포 달빛무지개분수
    28: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA3MjhfMjMw%2FMDAxNjkwNTQ3OTAyNDc4.OXtNhw1xMnrbj8kZC98NdlT-YDnpJBhqvrMmTFlAz7gg.sqm9PjCjzNgzwQp1ZTUAJcb2qRAwiQfVpPyQVYUKLRog.JPEG.daybreak2016%2FIMG_9528.jpg&type=a340",// 팔각당 오름광장
    29: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20150131_133%2Fleeflower79_14226794898612eVjO_JPEG%2FDSC01050.jpg&type=a340",//올림픽대교
    30: "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F001%2F2023%2F05%2F09%2FAKR20230509105200004_01_i_P4_20230509144011351.jpg&type=a340",//세빛섬
    31: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODEwMDRfNTEg%2FMDAxNTM4NTgzNzU5OTYw.BLkhwyhakxm5yTSDHH3LN_-2Ag_8pC2OxhgjS9mhRpIg.KWtKadzRx8LgidqpZCSLL-1nt700lVb3hiVzi54sJYgg.JPEG.topatrick%2F11.JPG&type=a340",//서울함공원
    32: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA0MjlfMTgx%2FMDAxNzE0Mzg3ODg3NDc5.oVli6KtpPfxaK_FT3IAdmMWZPDUnqmvJLP0nRMOghicg.N-XmBqmxgU52l6p8Lvf9ddHCXKgocKjitfDHzl-ragcg.JPEG%2FIMG_4846.jpg&type=a340",//낙산공원
    33: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEyMjNfMjIz%2FMDAxNzM0OTI4MDY2NDkw.UlTh-wkL0CtPQVaQ41vEyE9e9FUjztyFjYtkAOq3BIAg.Kl9bOW7-25Jw1aj6BgQfx8lDgl8jIZh19nnREf58SRMg.JPEG%2F2022_%25BE%25C6%25B6%25E3%25B8%25AE%25BF%25A1_%25B1%25A4%25C8%25AD_%25B8%25DE%25C0%25CE.JPG&type=sc960_832 ",// 아뜰리에 광화
    34: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MTVfMTI1%2FMDAxNjYwNTU1MzA5OTY4.50A3DSud2L3EPnUj-g3v3CTi8dmSM-UhguyYHMh5FTUg.vz45I3rp0nBvdW5GQHWEg3BN8QPhQvFZySXAWeNSbTgg.JPEG.hwlee55%2F2207%25BF%25B5%25C0%25C7%25B5%25B5_%25C7%25D1%25B0%25AD%25B0%25F8%25BF%25F8238.JPG&type=a340",//당산철교
    35: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160814_46%2Fmultilist1_1471141917289SBxoF_JPEG%2FDSC04475.JPG&type=l340_165",//세종문화회관
    36: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA3MTVfMTUy%2FMDAxNzUyNTY1NTEwMTY3.5L-cimiD8kml-Jb-c8lrnF7o_GO9ApEpfi8mahUUEe8g.5R0V9yBSd_1nP61X1yWk-uCshn1IRQl9Mw0_bZZExn8g.JPEG%2F6N4A2687-%25C6%25ED%25C1%25FD.jpg&type=a340",//한강대교
    37: "https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAxNzA1MTVfMjA3%2FMDAxNDk0ODMyNjMwNTcx.zlEJwMlXJmrQCVgcdQN-yb5-SViyLTLM64dWDshhfKcg.MltRvJO2ZiV3zsVlQrO_cBhYd5aKA4_I8yLJWExfJQUg.JPEG.nkhj10%2FDSC_2799.jpg&type=a340",//동작대교
    38: "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F421%2F2019%2F10%2F31%2F0004279241_001_20191031093953183.jpg&type=a340",//서울시립미술관
    39: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA3MjNfMTc4%2FMDAxNTYzODQyMjg3NTQ5.Pq0_7A4MKF7kJRiCr09oZ4rL7Jbpcar6RfyjoIv3ETkg.7b7NiQAtesMga1CiI2OIl5jmE7dDD4ZLEPxGBDbBH24g.JPEG.aillederev%2FSmartSelect_20190723-093419_Samsung_Internet.jpg&type=a340",//서울식물원
    40: " https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2Fdata26%2F2007%2F8%2F18%2F169%2Fimg_9025-1_innokang.jpg&type=a340",//덕수궁 돌담길 
    41: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20140815_224%2Ftangkong16_14080733026629F2ni_JPEG%2F20130907-IMG_7382.jpg&type=a340",// 광진교 8번가
    42: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA3MTNfMTc4%2FMDAxNTMxNDA4NDUwODYy.kGT-8rW5-wc8IUG0LaVG3mIbJKeGD7jBGdBG4cKPaWUg.qgZGaS9VBfxug4Q-eviMKGjSxYB6CI_8VrEj1VpzqYAg.JPEG.htw2947%2FIMG_9084.jpg&type=a340",//고척 스카이돔
    43: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyQbNaO3wUPpDka4JoREKBn91MChnvVpBR5w&s",//어린대공원 후문
    44: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20150703_113%2Fbanc1004_1435854563503jG6kK_JPEG%2F20150702_%2528384%2529.JPG&type=a340",//뚝섬 음악분수
    45: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzExMjVfODAg%2FMDAxNzAwODgxMzU2ODA0.VVk9IxbxzTDDHxhQYHNWa5Hxa214xoykmn3l-rjIPusg.JNTNXhISUH7ybVANX70KuQwGmtgOj-VkM_LM66fJ0qkg.JPEG.titoms20%2F20231124%25A3%25DF195638.jpg&type=a340",//석촌호수 
    46: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20130316_124%2Fpjj7020_1363415143893pD1lj_JPEG%2F_PJJ7271.jpg&type=a340",// 동호대교
    47: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNjEwMzFfMTU0%2FMDAxNDc3ODgwOTg5Njcz.-Jehw6CGHBLzoS1hpybulTzUI-t789JrPSStmsUQfS0g.2VRgjYFDhILGY-hs1brXrFCy-GcavgBOMYtPr3dBTFEg.JPEG.gina_a%2F_MG_4861.JPG&type=a340",//선유도 공원 
    48: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAxMDdfODEg%2FMDAxNjczMTAxMjg3MDc1.y5oIIjNq-IBki6MBu7DGn9cVZNuLoy6gtBMrIdP8qQkg.BqicYUsJhIxAvcM2ep4xO-k6bDfLX21lETPypgm-cx0g.JPEG.syhoons%2F20230107%25A3%25DF174654.jpg&type=a340",//송파책박물관
    49: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAxMjhfODMg%2FMDAxNjQzMzc5MTE2NjQ1.nRlifg__ju66dVDwNEIjGPx2qneWXrSYX6aFtLZDmD0g.OTXdT9sHgEHBBkfJoFON9g_pjv7os1avGRp1Q1pEdW0g.JPEG.y0719j%2F20220119_181639_03.jpg&type=a340",//노원 불빛정원
    50: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMTRfMTAy%2FMDAxNzI4OTE0ODU2MDA1.Cy2oAsLj8GSMbHzRDqJaVg-MgQrKW3aasrJoDnr5n4Ug.-VyrO35vY95NU9NC7ANm2Hl4-WJacbzT1p_lD2ttX9wg.GIF%2FKakaoTalk_20241014_204552742_04.gif&type=a340",//서울 어린이대공원 음악분수
    51: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAxMDVfMTMg%2FMDAxNzM2MDAzMjk2ODUx.3v9A7K25zI9E6RBEm9lSN3CwPAC9LefCifFWzVKTXr4g.5GnzJBszezVJz_90aBhZAW1d6tKXRAvQzr9cCKwPX8kg.JPEG%2F%25BC%25BA%25BB%25EA%25B4%25EB%25B1%25B33a.jpg&type=a340",//성산대교


    };



    var api_key = "645349657864757437364a7255674c";

    let originalData =[];//원본데이터 저장 리스트
    let keyword = "";
    let region = "전체";
    let priceFilter = "전체";

    // 직접  필터링 ..........
    $("#searchKeyword").on("input", function () {
        keyword = $(this).val().trim();
    });

    $("#searchKeyword").on("keypress", function(e) {
        if (e.which === 13) { $("#btn_load").click(); }
    });

    // 지역 선택
    $("#regionSelect").on("change", function () {
        region = $(this).val();
    });

    // 요금 버튼 클릭 토글
    $(".filter-btn").on("click", function () {
        $(".filter-btn").removeClass("active");
        $(this).addClass("active");
        priceFilter = $(this).data("price"); 
    });




    $("#btn_load").click(function () {

        
        // JSON
        var url = `http://openapi.seoul.go.kr:8088/${api_key}/json/viewNightSpot/1/51/`;
        
        $.ajax({
            url: url,
            type: "GET",
            dataType: "json",
            cache: false,
			success: function(data,status){
				if(status=='success'){ originalData = data.viewNightSpot.row; // 원본 데이터 저장
                    applyFilters(); // 필터 적용해서 표시
			    }
            }
           
        });
    });

    // 지우기
    $("#btn_remove").click(function () {
        $("#nightViewList").empty();
        $("#countNumber").text("0");
        $("#resultCount").hide();
        // 초기화
        $("#searchKeyword").val("");
        $("#regionSelect").val("전체");
        $(".filter-btn").removeClass("active");
        $(".filter-btn[data-price='전체']").addClass("active");
        keyword = "";
        region = "전체";
        priceFilter = "전체";
    });


    // 필터 적용 함수
    function applyFilters() {
      let filtered = originalData.slice(); // 원본 데이터 복사
              
      if (keyword) {
        const kw = keyword
        filtered = filtered.filter(row => {
          const title = (row.TITLE );
          const addr = (row.ADDR );
          const contents = (row.CONTENTS );
          return title.includes(kw) || addr.includes(kw) || contents.includes(kw);
        });
      }

      // 2) 지역 필터
      if (region && region !== "전체") {
        const reg = region;
        filtered = filtered.filter(row => {
          const addr = (row.ADDR );
          return addr.includes(reg);
        });
      }

      // 3) 요금 필터
      
      if (priceFilter === "무료" || priceFilter === "유료") {
          filtered = filtered.filter(row => {
            return (row.FREE_YN) === priceFilter;
          });
        } 
    
    
      filteredData = filtered;
      displayCards(filtered);
      }


    // 카드 표시 함수
    function displayCards(filtered) {
        // 결과 개수 표시
        $("#countNumber").text(filtered.length);
        $("#resultCount").show();
        
        const cards = [];
        


        for (const row of filtered) {
            const num = row.NUM ;
            const title = row.TITLE ;
            const addr = row.ADDR ;
            const telNo = row.TEL_NO ;
            const url = row.URL ;
            const operatingTime = row.OPERATING_TIME ;
            const freeYn = row.FREE_YN ;
            const entrFee = row.ENTR_FEE ;

            
            cards.push(`
                <div class="card">
                    <img src="${imageMap[num]}" alt="${title}">
                    <div class="card-body">
                        <h3 class="card-title">${title}</h3>
                        <p class="card-location">${addr}</p>
                        <div class="card-tags">
                        <span>요금: ${freeYn}</span>
                        <span>입장료:${entrFee}</span>
                        </div>
                        <p class="card-desc">운영시간: ${operatingTime}</p>
                        <div class="card-footer">
                        <span>☎ ${telNo}</span>
                        </div>
                        <div class="card-footer">
                        ${url ? `<a href="${url}" target="_blank"  class="btn-homepage ">홈페이지</a>` : ''}
                        <span><button  type="button" class="btn-detail"> 상세보기</button></span>
                        </div>
                    </div>
                </div>
            `);
          }


    $("#nightViewList").html(`<div class="card-container">${cards.join('')}</div>`);
        

    };


  $(document).on("click", ".btn-detail", function () {
    const index = $(this).closest(".card").index(); // 상세보기 누른 부모카드 찾기
    const data = filteredData[index];

    
    
    
    // 모달 HTML 생성
      const modalHTML = `
    <div id="detailModal" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>

        <img src="${imageMap[data.NUM]}" alt="${data.TITLE}"> 

        <h2>${data.TITLE}</h2>
        <p class="address">${data.ADDR}</p>
        <hr>
        <p class="desc">📝 소개: ${(data.CONTENTS ).replace(/<[^>]*>/g, '')}</p>
        <p class="subway">🚇 지하철: ${data.SUBWAY || '정보 없음'}</p>
        <p class="bus">🚌 버스: ${data.BUS || '정보 없음'}</p>
        <p class="parking">🚗 주차 정보: ${data.PARKING_INFO || '정보 없음'}</p>
      </div>
    </div>
    `;

        $("body").append(modalHTML);

        // 모달 닫기 이벤트
        $(document).on("click", ".close, #detailModal", function (e) {
            $("#detailModal").fadeOut(200, function () {
            $(this).remove();
            });
        });
        
  });
});





