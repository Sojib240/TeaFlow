import React from "react";

const Context = () => {
    const productsData = {
        categories: [
            {
                id: 1,
                categoryName: "tea type",
            },
            {
                id: 2,
                categoryName: "Premium tea",
            },
            {
                id: 3,
                categoryName: "sets",
            },
            {
                id: 4,
                categoryName: "top sales",
            },
            {
                id: 5,
                categoryName: "New Arrivals",
            },
            {
                id: 6,
                categoryName: "Teaware",
            },
            {
                id: 7,
                categoryName: "Accessories",
            },
        ],
        products: [
            {
                id: 1,
                title: "RED TEA #10",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069f7_red-10-min.jpg",
                price: 38,
                productArrival: true,
                amount: 1,
                category: 1,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068dd_%D0%95%20%D0%A8%D0%B5%D0%BD%20%D0%A5%D1%83%D0%BD%20%D0%A7%D0%B0%20%D1%81%20%D0%B4%D0%B8%D0%BA%D0%B8%D1%85%20%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8C%D0%B5%D0%B2%2C%20%D0%B2%D0%B5%D1%81%D0%BD%D0%B0%202022%20%D0%B3-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068d1_%D0%95%20%D0%A8%D0%B5%D0%BD%20%D0%A5%D1%83%D0%BD%20%D0%A7%D0%B0%20%D1%81%20%D0%B4%D0%B8%D0%BA%D0%B8%D1%85%20%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8C%D0%B5%D0%B2%2C%20%D0%B2%D0%B5%D1%81%D0%BD%D0%B0%202022%20%D0%B3(2)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068e5_%D0%95%20%D0%A8%D0%B5%D0%BD%20%D0%A5%D1%83%D0%BD%20%D0%A7%D0%B0%20%D1%81%20%D0%B4%D0%B8%D0%BA%D0%B8%D1%85%20%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8C%D0%B5%D0%B2%2C%20%D0%B2%D0%B5%D1%81%D0%BD%D0%B0%202022%20%D0%B3(3)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    'refined, bright, sweet, with fruit and berry sourness, "festive". Impact: powerful, warming intoxicating, meditative.',
                aboutProduct:
                    "Red tea from wild tea trees from the mountainous region of Ulyanshan. The first spring training camp. A special type of wild tea tree defines a unique aromatic and flavor palette. The tea is completely different from the classic Yunnan reds. It has the potential to change over time — it will gain softness and depth of taste. Aroma: heady, fragrant, with hints of wild berries, flowers, and tropical fruits (passion fruit). Taste: refined, bright, sweet, with fruit and berry sourness, 'festive'. Effects: powerful, warming, intoxicating, meditative.Collection: Spring 2022, Ulyanshan Mountains, Pu'er County, prov. Yunnan, China.",
                SteepingInstructions:
                    "Traditional Preparation Add 7-10 grams to a Gaiwan or Gongfu Teapot (150ml-200ml). Use 212°F boiling water. Briefly rinse the leaves. Decant and discard this infusion.Infuse the first brew for 5 seconds.  Infuse 2nd and subsequent brews for 5-15 seconds. Repeat several times until the flavor and aroma of the tea dissipates. As the brewing session ensues, increase infusion time to coax out the body and strength of the final infusions.",
                Ingredients: "Organic red tea",
            },
            {
                id: 2,
                title: "GINSENG OOLONG",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069f5_ginseng-1200-min.jpg",
                price: 14,
                productArrival: true,
                amount: 1,
                category: 4,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806876_%D0%96%D0%B5%D0%BD%D1%8C%D1%88%D0%B5%D0%BD%D1%8C%20%D0%A3%D0%BB%D1%83%D0%BD%2C%20%D0%BF%D1%80%D0%B5%D0%BC%D0%B8%D1%83%D0%BC%2C%20%D0%9A%D0%B8%D1%82%D0%B0%D0%B8%CC%86%2C%202022%20%D0%B3-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80678d_%D0%96%D0%B5%D0%BD%D1%8C%D1%88%D0%B5%D0%BD%D1%8C%20%D0%A3%D0%BB%D1%83%D0%BD%2C%20%D0%BF%D1%80%D0%B5%D0%BC%D0%B8%D1%83%D0%BC%2C%20%D0%9A%D0%B8%D1%82%D0%B0%D0%B8%CC%86%2C%202022%20%D0%B3(2)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068aa_%D0%96%D0%B5%D0%BD%D1%8C%D1%88%D0%B5%D0%BD%D1%8C%20%D0%A3%D0%BB%D1%83%D0%BD%2C%20%D0%BF%D1%80%D0%B5%D0%BC%D0%B8%D1%83%D0%BC%2C%20%D0%9A%D0%B8%D1%82%D0%B0%D0%B8%CC%86%2C%202022%20%D0%B3(3)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "refreshing, floral. Ginseng and licorice give the drink a pleasant sweet-tart taste and a long sweet aftertaste. Impact: refreshing, noticeably toning effect.",
                aboutProduct:
                    "Oolong from Fujian province in southern China. As a basis, the creators took high-quality tea of the Teguanyin variety with a floral, delicate taste and bright aroma. Crushed ginseng and licorice roots were added to it. The tea has acquired a rich sweet aroma and a bright tonic effect. Aroma: richly sweet, and fruity.Taste: refreshing, floral. Ginseng and licorice give the drink a pleasant sweet-tart taste and a long sweet aftertaste. Effect: refreshing, noticeably toning effect.",
                SteepingInstructions:
                    "Tea Preparation Add 6 grams to a Teapot (300 ml). Use 212°F boiling water.Infuse the brew for 2-3 minutes.",
                Ingredients: "Organic oolong tea",
            },
            {
                id: 3,
                title: "SHU PU-ERH #10",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806697_%D0%94%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B8%CC%86%D1%82%D0%B0-min.jpg",
                price: 27,
                productArrival: true,
                amount: 1,
                category: 2,
                minImg1:
                    " https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806751_%D0%9C%D1%8D%D0%BD%D0%BA%D1%83%20%D0%93%D1%83%20%D0%A8%D1%83%20%C2%AB%D0%94%D1%80%D0%B0%D0%BA%D0%BE%D0%BD%20%D0%B2%20%D0%91%D0%B0%D0%BC%D0%B1%D1%83%D0%BA%D0%B5%C2%BB%2C%202021%20%D0%B3(2)-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8066f5_%D0%9C%D1%8D%D0%BD%D0%BA%D1%83%20%D0%93%D1%83%20%D0%A8%D1%83%20%C2%AB%D0%94%D1%80%D0%B0%D0%BA%D0%BE%D0%BD%20%D0%B2%20%D0%91%D0%B0%D0%BC%D0%B1%D1%83%D0%BA%D0%B5%C2%BB%2C%202021%20%D0%B3(3)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806753_%D0%9C%D1%8D%D0%BD%D0%BA%D1%83%20%D0%93%D1%83%20%D0%A8%D1%83%20%C2%AB%D0%94%D1%80%D0%B0%D0%BA%D0%BE%D0%BD%20%D0%B2%20%D0%91%D0%B0%D0%BC%D0%B1%D1%83%D0%BA%D0%B5%C2%BB%2C%202021%20%D0%B3(4)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "thick and soft with caramel-fruity shades and pleasant woody. Impact: pronounced, strong, maintains the overall tone, givesstrength.",
                aboutProduct:
                    "Shu Pu-erh from old tea trees from the Manku region. Alpine tea garden, mono-sort raw materials. The age of the trees is from 150 to 250 years. The height of growth is 1800 m.The tea is made to order in the Menghai region by an experienced technologist using a special technology of low-run fermentation in baskets. This technology allows you to preserve as much as possible in the finished tea the full depth of taste and aroma of the original first-class raw materials.After the initial fermentation, the tea was refined in the bamboo trunk.Pressing tea into a bamboo trunk is a traditional technology of the small nationalities of Yunnan province. Such tea is convenient to transport, can be stored compactly, and the taste acquires a unique profile. It is characteristic only of bamboo teas. With the help of a wooden stick, tea leaves are carefully 'stuffed' into the bamboo trunk so as not to damage the raw materials. Then this blank is slowly heated over an open fire. Charcoal is used exclusively so that the tea does not acquire the smell of smoking. The production begins at the end of autumn when the humidity of the bamboo stem is optimal — the quality of the future tea depends on it. If everything is done correctly, the tea will be soaked in bamboo juice and acquire a fresh aroma, and a persistent aftertaste.Due to the initial quality of raw materials and processing technology, it has excellent potential for further storage and aging.Aroma: delicate and light with hints of apricots, chocolate, and fried seeds.Taste: thick and soft with caramel-fruity shades and pleasant woody.Impact: pronounced, strong, maintains the overall tone, gives strength.Production: Assembly 2020, Mengku Region, Lincang County, Press 2021, Menghai Region, Xishuangbanna County, Yunnan Province, China.",
                SteepingInstructions:
                    "Traditional Preparation Add 7-10 grams to a Gaiwan or Gongfu Teapot (150ml-200ml). Use 212°F boiling water. Briefly rinse the leaves. Decant and discard this infusion. Infuse the first brew for 10 seconds. Infuse 2nd and subsequent brews for 10-30 seconds.   Repeat several times until the flavor and aroma of the tea dissipates. As the brewing session ensues, increase infusion time to coax out the body and strength of the final infusions.",
                Ingredients: "Organic Shu Pu-erh",
            },
            {
                id: 4,
                title: "SHU PU-ERH #14",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069b5_shu-14-min.jpg",
                price: 14,
                productArrival: true,
                amount: 1,
                category: 4,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80672e_%D0%AE%D0%BD%20%D0%A7%D0%B6%D0%B5%D0%BD%D1%8C%20%D0%A7%D0%B5%CC%88%D1%80%D0%BD%D1%8B%D0%B8%CC%86%20%D0%96%D0%B5%D0%BC%D1%87%D1%83%D0%B3%2C%202018%20%D0%B3(2)-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806829_%D0%AE%D0%BD%20%D0%A7%D0%B6%D0%B5%D0%BD%D1%8C%20%D0%A7%D0%B5%CC%88%D1%80%D0%BD%D1%8B%D0%B8%CC%86%20%D0%96%D0%B5%D0%BC%D1%87%D1%83%D0%B3%2C%202018%20%D0%B3(3)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806775_%D0%AE%D0%BD%20%D0%A7%D0%B6%D0%B5%D0%BD%D1%8C%20%D0%A7%D0%B5%CC%88%D1%80%D0%BD%D1%8B%D0%B8%CC%86%20%D0%96%D0%B5%D0%BC%D1%87%D1%83%D0%B3%2C%202018%20%D0%B3(4)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "berry with nutty chocolate. Impact: gently and permanently invigorates and tones, a wonderful energizer. Helps on the road. An interesting substitute for coffee is that coffee cheerfulness lasts longer and ends smoothly, unlike coffee, when strength disappears suddenly.",
                aboutProduct:
                    "Pressed tea heads (lao cha tou) from Xing Wen factory, Yun Zhen trademark. Lao cha tou, are formed naturally as a result of sticking and clumping of a tea leaf during wet stacking 'in DUI'. Most often they are found in loose form, but in this case, they are pressed into a brick, which has a medium-soft pressing.Clusters of whitish dots may occur on the surface of tea heads - this is a feature of Lao cha tou production, which is dried differently than loose raw materials. Therefore, such post-fermentation traces may remain on them, which disappear over time.Aroma: thick, sweetly woody, with notes of bitter chocolate and berries.Taste: soft, balanced, rich, and thick with peasant bitterness, berry, and nutty chocolate shades.Impact: gently and permanently invigorates and tones, a wonderful energizer. Helps on the road. An interesting substitute for coffee is; coffee cheerfulness lasts longer and ends smoothly, unlike coffee, when strength disappears suddenly.Production: 2018, Xin Wen Factory (Kit. ), Yongde County, Lincang County, Yunnan Province, China.",
                SteepingInstructions:
                    "Traditional Preparation Add 7-10 grams to a Gaiwan or Gongfu Teapot (150ml-200ml). Use 212°F boiling water.Briefly rinse the leaves. Decant and discard this infusion. Infuse the first brew for 10 seconds. Infuse 2nd and subsequent brews for 10-30 seconds. Repeat several times until the flavor and aroma of the tea dissipates. As the brewing session ensues, increase infusion time to coax out the body and strength of the final infusions.",
                Ingredients: "Organic Shu Pu-erh",
            },
            {
                id: 5,
                title: "RED TEA #4",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806a1c_red-4-1-min.jpg",
                price: 12,
                productArrival: true,
                amount: 1,
                category: 4,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068d7_%D0%A1%D1%8F%D0%BE%20%D0%A7%D0%B6%D1%83%D0%BD%20%D0%A5%D1%83%D0%B0%20%D0%A1%D1%8F%D0%BD%20%C2%AB%D0%A6%D0%B2%D0%B5%D1%82%D0%BE%D1%87%D0%BD%D1%8B%D0%B8%CC%86%20%D0%B0%D1%80%D0%BE%D0%BC%D0%B0%D1%82%C2%BB%2C%202021%20%D0%B3-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068bf_%D0%A1%D1%8F%D0%BE%20%D0%A7%D0%B6%D1%83%D0%BD%20%D0%A5%D1%83%D0%B0%20%D0%A1%D1%8F%D0%BD%20%C2%AB%D0%A6%D0%B2%D0%B5%D1%82%D0%BE%D1%87%D0%BD%D1%8B%D0%B8%CC%86%20%D0%B0%D1%80%D0%BE%D0%BC%D0%B0%D1%82%C2%BB%2C%202021%20%D0%B3(2)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068ce_%D0%A1%D1%8F%D0%BE%20%D0%A7%D0%B6%D1%83%D0%BD%20%D0%A5%D1%83%D0%B0%20%D0%A1%D1%8F%D0%BD%20%C2%AB%D0%A6%D0%B2%D0%B5%D1%82%D0%BE%D1%87%D0%BD%D1%8B%D0%B8%CC%86%20%D0%B0%D1%80%D0%BE%D0%BC%D0%B0%D1%82%C2%BB%2C%202021%20%D0%B3(3)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "rich, clear, with pronounced sweetness, rich, sparkling, with a slight tart. Pleasant enveloping aftertaste. Impact: warming, toning.",
                aboutProduct:
                    "'Small View with Floral Aroma' (kit. ,) is a Chinese red tea from the vicinity of the Wuishan Mountains in the north of Fujian Province. During the manufacturing process, xiaozhuns undergo an operation called 'go hong go' or 'passing the red cauldron'. This short but intense warm-up is 2-3 minutes at 200 degrees. Thanks to him, xiaozhuns have a characteristic leaf color and a 'fiery' taste. The words Hua Xiang — 'floral fragrance' — indicate that tea has a pronounced floral aroma due to the class of raw materials and the presence of golden tips. Aroma: bright, with warm, floral-honey and bread shades. Taste: rich, clear, with pronounced sweetness, rich, sparkling, with a slight tart. Pleasant enveloping aftertaste. Impact: warming, toning. Gathering: Spring 2022, Wuishan Mountains, Fujian Province, China.",
                SteepingInstructions:
                    "Traditional Preparation Add 7-10 grams to a Gaiwan or Gongfu Teapot (150ml-200ml). Use 185°F water. Briefly rinse the leaves. Decant and discard this infusion.Infuse the first brew for 10 seconds. Infuse 2nd and subsequent brews for 10-30 seconds. Repeat several times until the flavor and aroma of the tea dissipates. As the brewing session ensues, increase infusion time to coax out the body and strength of the final infusions.",
                Ingredients: "Organic red tea",
            },
            {
                id: 6,
                title: "BLACK TEA #3",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069b2_black-3-min.jpg",
                price: 12,
                productArrival: true,
                amount: 1,
                category: "",
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068ef_%D0%9B%D1%8E%D0%B0%D0%BD%D1%8C%20%D0%A5%D1%8D%D0%B8%CC%86%20%D0%A7%D0%B0%20%D0%B2%20%D0%BA%D0%BE%D1%80%D0%B7%D0%B8%D0%BD%D0%BA%D0%B5%2C%202021%20%D0%B3(3)-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068e1_%D0%9B%D1%8E%D0%B0%D0%BD%D1%8C%20%D0%A5%D1%8D%D0%B8%CC%86%20%D0%A7%D0%B0%20%D0%B2%20%D0%BA%D0%BE%D1%80%D0%B7%D0%B8%D0%BD%D0%BA%D0%B5%2C%202021%20%D0%B3(2)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "spicy, sweet, with a pleasant bitterness. It looks like both Wishan oolong and Shu Pu'er. Impact: gently tones, and smoothes.",
                aboutProduct:
                    "Black fermented tea Hei Cha from Anhui province. Packed in a traditional bamboo basket of 500 grams. Aroma: sweet, woody-spicy, chocolate, with notes of dead leaves.Taste: spicy, sweet, with a pleasant bitterness. It looks like both Wishan oolong and Shu Pu'er. Effect: gently tones, and smoothes.",
                SteepingInstructions:
                    "Traditional Preparation Add 10-12 grams to a Gaiwan or Gongfu Teapot (150ml-200ml). Use 212°F boiling water. Briefly rinse the leaves. Decant and discard this infusion. Infuse the first brew for 10 seconds. Infuse 2nd and subsequent brews for 10-30 seconds. Repeat several times until the flavor and aroma of the tea dissipates. As the brewing session ensues, increase infusion time to coax out the body and strength of the final infusions.",
                Ingredients: "Organic black tea",
            },
            {
                id: 7,
                title: "SHU PU-ERH #27",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069c0_shu-27-1-min.jpg",
                price: 26,
                productArrival: true,
                amount: 1,
                category: 5,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806987_%D0%9C%D1%8D%D0%BD%D1%85%D0%B0%D0%B8%CC%86%20%D0%92%D1%8D%D0%B8%CC%86%20%C2%AB%D0%A7%D0%B8%D1%81%D1%82%D1%8B%D0%B8%CC%86%20%D0%92%D0%BA%D1%83%D1%81%20%D0%9C%D1%8D%D0%BD%D1%85%D0%B0%D1%8F%C2%BB%2C%202021%20%D0%B3(2)-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806992_%D0%9C%D1%8D%D0%BD%D1%85%D0%B0%D0%B8%CC%86%20%D0%92%D1%8D%D0%B8%CC%86%20%C2%AB%D0%A7%D0%B8%D1%81%D1%82%D1%8B%D0%B8%CC%86%20%D0%92%D0%BA%D1%83%D1%81%20%D0%9C%D1%8D%D0%BD%D1%85%D0%B0%D1%8F%C2%BB%2C%202021%20%D0%B3(3)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80698a_%D0%9C%D1%8D%D0%BD%D1%85%D0%B0%D0%B8%CC%86%20%D0%92%D1%8D%D0%B8%CC%86%20%C2%AB%D0%A7%D0%B8%D1%81%D1%82%D1%8B%D0%B8%CC%86%20%D0%92%D0%BA%D1%83%D1%81%20%D0%9C%D1%8D%D0%BD%D1%85%D0%B0%D1%8F%C2%BB%2C%202021%20%D0%B3(4)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "dense, rich, pastry-like, woody-creamy, soft, and juicy. Impact: Invigorating, warming, and inspiring.",
                aboutProduct:
                    "An invigorating Shu Pu-erh with classic flavor from the Menghai region. Manufactured and pressed exclusively for TEFLOW. The intention was to highlight Menghai Pu-erh's flavor characteristics that are highly prized: pastry-like nuances, creaminess, and sweetness. Through a proprietary blend of leaves sourced from several tea gardens with large tea trees and the expertise of our skilled tea masters, we achieved the quintessential Menghai flavor, pushed to its maximum. Thanks to a significant proportion of tea buds in the blend, we also achieved a strong and invigorating effect.Aroma: Rich, sweet, woody, and enveloping. Taste: Dense, rich, pastry-like, woody-creamy, soft, and juicy. Effect: Invigorating, warming, and inspiring.Production: Fermentation in 2019, pressing in 2021, Menghai County, Sishuanbanna District, Yunnan Province, China.",
                SteepingInstructions:
                    "Traditional Preparation Add 7-10 grams to a Gaiwan or Gongfu Teapot (150ml-200ml).Use 212°F boiling water.Briefly rinse the leaves. Decant and discard this infusion.Infuse the first brew for 10 seconds.  Infuse 2nd and subsequent brews for 10-30 seconds.Repeat several times until the flavor and aroma of the tea dissipates. As the brewing session ensues increase infusion time to coax out the body and strength of the final infusions.",
                Ingredients: "Organic Shu Pu-erh",
            },
            {
                id: 8,
                title: "SHENG PU-ERH #3",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80671c_%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B8%CC%86%D1%82%D0%B0-min.jpg",
                price: 21,
                productArrival: true,
                amount: 1,
                category: 2,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806784_%20%D0%98%20%D0%A3%20%2522%D0%97%D0%B5%D0%BB%D0%B5%CC%88%D0%BD%D0%BE%D0%B5%20%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%2522%2C%202008%20%D0%B3(4)-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806756_%20%D0%98%20%D0%A3%20%2522%D0%97%D0%B5%D0%BB%D0%B5%CC%88%D0%BD%D0%BE%D0%B5%20%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%2522%2C%202008%20%D0%B3(3)-min.jpg",
                minImg3: "",
                availability: "in stock",
                TastingNotes:
                    "soft, clean, rounded. The first cups contain honey, dried fruits and fresh apples. Impact: meditative, intoxicating. Immerses you in the palette of tastes with your head.",
                aboutProduct:
                    "Aged, mature Sheng from ancient trees from the mountainous region and Wu with a classic taste profile for this area. 14 years of storage in a warehouse, with an ideal, controlled moisture balance, have largely determined the character of this tea.Aroma: honey-dried fruit, tobacco, camphor, multi-faceted. Taste: soft, clean, rounded. The first cups contain honey, dried fruits, and fresh apples. They change to nutty, camphor, and even tobacco notes as the tea continues to unfold. No sharpness — just zen. Effect: meditative, intoxicating. Immerses you in the palette of tastes with your head. Production: 2008, Mountains and Wu, Mengla County, Xishuangbanna County, prov. Yunnan, China.",
                SteepingInstructions:
                    "Traditional tea preparation Chip the cake carefully with a pick or Pu’er dagger. Add 7g - 8g to a Gaiwan or Gongfu teapot (150ml-200ml). Use 212°F boiling water. Rinse leaves for 5 - 10 seconds. Decant and discard this rinse infusion.Proceed to infuse the tea using boiling water. Enjoy each infusion individually and savor each round's flavors. Decant the 1st, 2nd, 3rd, and 4th infusions after 10 - 30 seconds. The tea infuses fast and strengthens at the beginning of the session. Brew the tea several times until the taste weakens. Increase the infusion time to your taste preference after becoming familiar with the tea. Bitterness, strength, power, and the presence of Qi come out in later brews with increased infusion time. ",
                Ingredients: "Organic Sheng Pu-erh",
            },
            {
                id: 9,
                title: "RED TEA #3",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069af_red-3-min.jpg",
                price: 21,
                productArrival: true,
                amount: 1,
                category: "",
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068c2_%D0%A6%D0%B7%D0%B8%D0%BD%D1%8C%20%D0%A6%D0%B7%D1%8E%D0%BD%D1%8C%20%D0%9C%D1%8D%D0%B8%CC%86%20%C2%AB%D0%97%D0%BE%D0%BB%D0%BE%D1%82%D1%8B%D0%B5%20%D0%91%D1%80%D0%BE%D0%B2%D0%B8%C2%BB%2C%202022%20%D0%B3-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068c3_%D0%A6%D0%B7%D0%B8%D0%BD%D1%8C%20%D0%A6%D0%B7%D1%8E%D0%BD%D1%8C%20%D0%9C%D1%8D%D0%B8%CC%86%20%C2%AB%D0%97%D0%BE%D0%BB%D0%BE%D1%82%D1%8B%D0%B5%20%D0%91%D1%80%D0%BE%D0%B2%D0%B8%C2%BB%2C%202022%20%D0%B3(2)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068c7_%D0%A6%D0%B7%D0%B8%D0%BD%D1%8C%20%D0%A6%D0%B7%D1%8E%D0%BD%D1%8C%20%D0%9C%D1%8D%D0%B8%CC%86%20%C2%AB%D0%97%D0%BE%D0%BB%D0%BE%D1%82%D1%8B%D0%B5%20%D0%91%D1%80%D0%BE%D0%B2%D0%B8%C2%BB%2C%202022%20%D0%B3(3)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "sweet, pure, rich jam, caramel. A long, pleasant aftertaste with a sweet and sour background (sweet and sour apples). Impact: the classic warming effect of red tea, but at the same time relaxing andsoothing.",
                aboutProduct:
                    "A popular Chinese red tea from Yunnan Province, on the territory of which the state of Dian was located in ancient times, after which the tea was named Dian Hong (滇红, Red Tea from Dian). We called it Honey for the corresponding shades in taste. Golden Eyebrows is a famous Chinese red tea from the north of Fujian Province. A fairly young, but deservedly popular variety of red tea, the history of which began in the mid-2000s. Fujian technologists took as a basis the traditional scheme of production of leaf xiaohuns but adapted it for processing the most tender and young spring buds.  Fragrance: complex, rich, and delicate. Notes of bread and chocolate are intertwined with the smell of strawberries.Taste: sweet, pure, rich jam, caramel. A long, pleasant aftertaste with a sweet and sour background (sweet and sour apples). Impact: the classic warming effect of red tea, but at the same time relaxing and soothing. Gathering: Spring 2022, Wuishan Mountains, Fujian Province, China.",
                SteepingInstructions:
                    "Traditional Preparation Add 7-10 grams to a Gaiwan or Gongfu Teapot (150ml-200ml). Use 185°F water. Briefly rinse the leaves. Decant and discard this infusion. Infuse the first brew for 10 seconds. Infuse 2nd and subsequent brews for 10-30 seconds. Repeat several times until the flavor and aroma of the tea dissipates. As the brewing session ensues, increase infusion time to coax out the body and strength of the final infusions.",
                Ingredients: "Organic red tea",
            },
            {
                id: 10,
                title: "RED TEA #6",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069ef_red-1200-min.jpg",
                price: 27,
                productArrival: true,
                amount: 1,
                category: 2,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068c8_%D0%94%D0%B0%20%D0%A6%D0%B7%D0%B8%D0%BD%D1%8C%20%D0%A7%D0%B6%D1%8D%D0%BD%D1%8C%20%D0%92%D0%B0%D0%BD%20%C2%AB%D0%97%D0%BE%D0%BB%D0%BE%D1%82%D1%8B%D0%B5%20%D0%98%D0%B3%D0%BB%D1%8B%C2%BB%2C%202022%20%D0%B3-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068ca_%D0%94%D0%B0%20%D0%A6%D0%B7%D0%B8%D0%BD%D1%8C%20%D0%A7%D0%B6%D1%8D%D0%BD%D1%8C%20%D0%92%D0%B0%D0%BD%20%C2%AB%D0%97%D0%BE%D0%BB%D0%BE%D1%82%D1%8B%D0%B5%20%D0%98%D0%B3%D0%BB%D1%8B%C2%BB%2C%202022%20%D0%B3(2)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068d3_%D0%94%D0%B0%20%D0%A6%D0%B7%D0%B8%D0%BD%D1%8C%20%D0%A7%D0%B6%D1%8D%D0%BD%D1%8C%20%D0%92%D0%B0%D0%BD%20%C2%AB%D0%97%D0%BE%D0%BB%D0%BE%D1%82%D1%8B%D0%B5%20%D0%98%D0%B3%D0%BB%D1%8B%C2%BB%2C%202022%20%D0%B3(3)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "juicy, sweet and strong. Velvety, fruity-berry aftertaste. Impact: refreshes and warms, gives strength and energy.",
                aboutProduct:
                    "Made in early spring from selected, large tea buds, densely covered with the golden-orange pile. The name translates as 'Royal Big Golden Needles' (Chinese: 大金王王). The rich taste and bright aroma of Golden Needles have been achieved thanks to the highest quality class of the selected raw materials, the characteristics of the Jingu Da Bai Cha cultivar, and the terroir richness of the collection sites. Separately, we note the author's tea processing technology: the final drying process is carried out at a low temperature in order to maximize and fix the aroma of the tea leaf. Aroma: bright and rich, berry, smoky, and strawberry. Taste: juicy, sweet, and strong. Velvety, fruity-berry aftertaste. Effect: refreshes and warms, gives strength and energy.Harvest: First spring (most valuable), end of February 2022, Jingu Region, Pu'er County, Yunnan Province, China.",
                SteepingInstructions:
                    "Traditional Preparation Add 7-10 grams to a Gaiwan or Gongfu Teapot (150ml-200ml). Use 212°F boiling water. Briefly rinse the leaves. Decant and discard this infusion. Infuse the first brew for 10 seconds. Infuse 2nd and subsequent brews for 10-30 seconds.  Repeat several times until the flavor and aroma of the tea dissipates. As the brewing session ensues, increase infusion time to coax out the body and strength of the final infusions.",
                Ingredients: "Organic red tea",
            },
            {
                id: 11,
                title: "WHITE TEA #1",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069bd_white-min.jpg",
                price: 14,
                productArrival: true,
                amount: 1,
                category: "",
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068d4_%D0%91%D0%B0%D0%B8%CC%86%20%D0%A5%D0%B0%D0%BE%20%D0%98%D0%BD%D1%8C%20%D0%A7%D0%B6%D1%8D%D0%BD%D1%8C%2C%20%D0%AE%D0%BD%D1%8C%D0%BD%D0%B0%D0%BD%D1%8C%2C%202022%20%D0%B3-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068d9_%D0%91%D0%B0%D0%B8%CC%86%20%D0%A5%D0%B0%D0%BE%20%D0%98%D0%BD%D1%8C%20%D0%A7%D0%B6%D1%8D%D0%BD%D1%8C%2C%20%D0%AE%D0%BD%D1%8C%D0%BD%D0%B0%D0%BD%D1%8C%2C%202022%20%D0%B3(2)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068d8_%D0%91%D0%B0%D0%B8%CC%86%20%D0%A5%D0%B0%D0%BE%20%D0%98%D0%BD%D1%8C%20%D0%A7%D0%B6%D1%8D%D0%BD%D1%8C%2C%20%D0%AE%D0%BD%D1%8C%D0%BD%D0%B0%D0%BD%D1%8C%2C%202022%20%D0%B3(3)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "soft and silky. The aftertaste is pleasant, long-lasting. Impact: relaxing and harmonizing.",
                aboutProduct:
                    "Chinese white tea from Yunnan province in the style of the famous Fudin tea Bai Hao Yin Zhen. The name translates as 'Silver Needles with a White Pile' (Kit. 白)) and indicates the abundance of tea buds. Tender, unopened buds are covered with silver fluff and have the shape of long, slightly curved needles. Because of the kidney raw materials, the taste of Silver Needles is interesting and rich. For the production of our Needles, raw materials were used, which were collected in early spring in the highlands. The spring first harvest, especially in Yunnan, where there is a pronounced seasonality of the harvest, is valued more than others. Aroma: sweet and light with hints of spicy herbs, dried plums, and honey. Taste: soft and silky. The aftertaste is pleasant and long-lasting. Impact: relaxing and harmonizing.",
                SteepingInstructions:
                    "Traditional Preparation Add 7-10 grams to a Gaiwan or Gongfu Teapot (150ml-200ml). Use 180° water. Briefly rinse the leaves. Decant and discard this infusion. Infuse the first brew for 3 seconds. Infuse 2nd and subsequent brews for 5-15 seconds. Repeat several times until the flavor and aroma of the tea dissipates. As the brewing session ensues, increase infusion time to coax out the body and strength of the final infusions.",
                Ingredients: "Organic white tea",
            },
            {
                id: 12,
                title: "GABA OOLONG #1",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069f4_gaba-oolong1-1200-min.jpg",
                price: 35,
                productArrival: true,
                amount: 1,
                category: 4,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068af_%D0%A3%D0%BB%D1%83%D0%BD%20%D0%93%D0%B0%D0%B1%D0%B0%20%D0%9D%D0%B0%D0%BD%D1%8C%D1%82%D0%BE%D1%83-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068a7_%D0%A3%D0%BB%D1%83%D0%BD%20%D0%93%D0%B0%D0%B1%D0%B0%20%D0%9D%D0%B0%D0%BD%D1%8C%D1%82%D0%BE%D1%83(2)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068ac_%D0%A3%D0%BB%D1%83%D0%BD%20%D0%93%D0%B0%D0%B1%D0%B0%20%D0%9D%D0%B0%D0%BD%D1%8C%D1%82%D0%BE%D1%83(3)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "soft, thick, warm with notes of baked fruits. Easy to drink, bright, but balanced bouquet. Impact: relaxing, meditative, but at the same time gentlycollecting and concentrating.",
                aboutProduct:
                    "Taiwanese Gaba oolong of a moderate degree of roasting, made from a tea leaf from a bush of the variety Si Tzu Chun. It is grown in the tea region of Nantou at an altitude of about 800 meters. At the end of the 80s, the Japanese came up with a technology for processing tea leaves without oxygen access and learned how to make tea with a high content of GABA. Gamma-aminobutyric acid (GABA or English GABA) is responsible for concentration and efficiency, slightly reduces pressure, relaxes, and relieves tension. Aroma: black bread, coffee notes, fruit shades. Taste: soft, thick, and warm with notes of baked fruits. Easy to drink, bright, but balanced bouquet. Impact: relaxing, meditative, but at the same time gently collecting and concentrating.",
                SteepingInstructions:
                    "Add 8-10 grams to a Gaiwan or Gongfu Teapot (150ml-200ml). Use 212°F boiling water. Don’t rinse this tea. Infuse the first brew for  10 seconds. Infuse 2nd and subsequent brews for 10-30  seconds. Repeat several times until the flavor and aroma of the tea dissipates. As the brewing session ensues, increase infusion time to coax out the body and strength of the final infusions.",
                Ingredients: "Organic oolong tea",
            },
            {
                id: 13,
                title: "GABA OOLONG #5",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069f1_gaba5-1200-min.jpg",
                price: 57,
                productArrival: true,
                amount: 1,
                category: 2,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068ad_%D0%93%D0%B0%D0%B1%D0%B0%20%D0%90%D0%BB%D0%B8%20%D0%A8%D0%B0%D0%BD%D1%8C%2C%20%D0%BF%D1%80%D0%B5%D0%BC%D0%B8%D1%83%D0%BC-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068a8_%D0%93%D0%B0%D0%B1%D0%B0%20%D0%90%D0%BB%D0%B8%20%D0%A8%D0%B0%D0%BD%D1%8C%2C%20%D0%BF%D1%80%D0%B5%D0%BC%D0%B8%D1%83%D0%BC(2)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068b2_%D0%93%D0%B0%D0%B1%D0%B0%20%D0%90%D0%BB%D0%B8%20%D0%A8%D0%B0%D0%BD%D1%8C%2C%20%D0%BF%D1%80%D0%B5%D0%BC%D0%B8%D1%83%D0%BC(3)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "pleasant, with a slight sourness. Impact: relaxing, meditative.",
                aboutProduct:
                    "Gaba Ali Shan - oolong tea with a high content of GABA - 200 mg per 100 g of tea. Medium-fermented medium-rare oolong, made in the highlands of the Ali Shan farm in Taiwan using a special technology for processing GABA teas. In dry form, it is a dark green dense hemisphere with golden inclusions and a small number of cuttings. The tea stands out with a tangible profile of the classic oolong Ali Shan in combination with a peculiar, reminiscent of the flower-rowan taste of the classic Gaba tea. The character of the taste is soft, and pleasant, with a slight sourness. The color of the drink is buckwheat-honey or golden. The aftertaste is long, and refreshing, which indicates the high quality of the tea. The leaf is rich in glutamic acid, which is the basis of GABA. Despite the soothing, relieving excessive excitement, the effect of gamma-aminobutyric acid, a strong alpine raw material gives a tangible surge of energy and a boost of strength. It is not recommended to drink this tea just before going to bed, but in the afternoon or evening after a working day is a great option.",
                SteepingInstructions:
                    "Add 8-10 grams to a Gaiwan or Gongfu Teapot (150ml-200ml). Use 212°F boiling water. Don’t rinse this tea. Infuse the first brew for  10 seconds. Infuse 2nd and subsequent brews for 10-30  seconds. Repeat several times until the flavor and aroma of the tea dissipates. As the brewing session ensues, increase infusion time to coax out the body and strength of the final infusions.",
                Ingredients: "Organic oolong tea",
            },
            {
                id: 14,
                title: "BLACK TEA #1",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069b1_black-1-min.jpg",
                price: 21,
                productArrival: true,
                amount: 1,
                category: "",
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068da_%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B8%CC%86%D1%82%D0%B02-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068db_%D0%9B%D1%8E%20%D0%91%D0%B0%D0%BE%20%D0%A5%D1%8D%D0%B8%CC%86%20%D0%A7%D0%B0%206166%2C%202020%20%D0%B3(3)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068e6_%D0%9B%D1%8E%20%D0%91%D0%B0%D0%BE%20%D0%A5%D1%8D%D0%B8%CC%86%20%D0%A7%D0%B0%206166%2C%202020%20%D0%B3(4)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "soft, nutty, with fresh notes. Impact: leveling, concentrating. This is tea for attentive work and cheerful morning.",
                aboutProduct:
                    "Black-aged Hei Cha tea from Guangxi in a traditional wicker basket. Produced under the brand Zhong Cha, as well as the famous 'Seals'. Black tea has its own specifics of raw materials and processing technology, so it turns out to be very diverse in taste and aroma. Aroma: dried fruits, vanilla, light tobacco notes, honey. Taste: soft, nutty, with fresh notes Impact: leveling, concentrating. This is tea for attentive work and a cheerful morning Production: collection, fermentation, and the beginning of primary aging - 2020, packing and packaging - 2022.",
                SteepingInstructions:
                    "d 10-12 grams to a Gaiwan or Gongfu Teapot (150ml-200ml). Use 212°F boiling water. Briefly rinse the leaves. Decant and discard this infusion.Infuse the first brew for 10 seconds. Infuse 2nd and subsequent brews for 10-30 seconds. Repeat several times until the flavor and aroma of the tea dissipates. As the brewing session ensues, increase infusion time to coax out the body and strength of the final infusions.",
                Ingredients: "Organic black tea",
            },
            {
                id: 15,
                title: "GABA OOLONG #4",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069f0_gaba4-1200-min.jpg",
                price: 65,
                productArrival: true,
                amount: 1,
                category: [2, 4],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068ae_%D0%93%D0%B0%D0%B1%D0%B0%20%D0%A0%D1%83%D0%B1%D0%B8%D0%BD%20%D0%A2%D0%B5%CC%88%D0%BC%D0%BD%D0%B0%D1%8F-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068a9_%D0%93%D0%B0%D0%B1%D0%B0%20%D0%A0%D1%83%D0%B1%D0%B8%D0%BD%20%D0%A2%D0%B5%CC%88%D0%BC%D0%BD%D0%B0%D1%8F(2)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068ab_%D0%93%D0%B0%D0%B1%D0%B0%20%D0%A0%D1%83%D0%B1%D0%B8%D0%BD%20%D0%A2%D0%B5%CC%88%D0%BC%D0%BD%D0%B0%D1%8F(3)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "deep, bright, warm, spicy, with notes of bread and cocoa beans. The aftertaste has a bitterness of coffee and a pleasant astringency. Impact: meditative, but at the same time collecting and concentrating.",
                aboutProduct:
                    "High-grade Gaba tea. It is made from the Assamese Ruby No. 18 variety - the same variety that is used for the production of the eponymous red tea. This makes not only the taste special but also the effect of this Gaba. Unlike other oolongs made using Gaba technology, Ruby has a powerful, but rather concentrating, collecting effect. At the end of the 80s, the Japanese came up with a technology for processing tea leaves without oxygen access and learned how to make tea with a high content of GABA. Gamma-aminobutyric acid (GABA or English GABA) is responsible for concentration and efficiency, slightly reduces pressure, relaxes, and relieves tension. The prefix 'dark' in the name of this oolong indicates a strong degree of roasting (warming up) - a rich 'roasted' flavor.  Aroma: brown bread crust, tobacco, coffee notes, fruit shades. Taste: deep, bright, warm, and spicy, with notes of bread and cocoa beans. The aftertaste has the bitterness of coffee and a pleasant astringency. Impact: meditative, but at the same time collecting and concentrating.",
                SteepingInstructions:
                    "Add 8-10 grams to a Gaiwan or Gongfu Teapot (150ml-200ml). Use 212°F boiling water. Don’t rinse this tea. Infuse the first brew for  10 seconds. Infuse 2nd and subsequent brews for 10-30  seconds. Repeat several times until the flavor and aroma of the tea dissipates. As the brewing session ensues, increase infusion time to coax out the body and strength of the final infusions.",
                Ingredients: "Organic oolong tea",
            },
            {
                id: 16,
                title: "SHU PU-ERH #9",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069b4_shu-9-min.jpg",
                price: 12,
                productArrival: true,
                amount: 1,
                category: 4,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80664a_%D0%93%D1%83%D0%BD%D1%82%D0%B8%D0%BD%20%D0%AE%D0%B8%CC%86%20%D0%98%D0%BD%D1%8C%2C%202013%20%D0%B3(2)-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80667a_%D0%93%D1%83%D0%BD%D1%82%D0%B8%D0%BD%20%D0%AE%D0%B8%CC%86%20%D0%98%D0%BD%D1%8C%2C%202013%20%D0%B3(1)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806707_%D0%93%D1%83%D0%BD%D1%82%D0%B8%D0%BD%20%D0%AE%D0%B8%CC%86%20%D0%98%D0%BD%D1%8C%2C%202013%20%D0%B3(3)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "balanced, woody-creamy, soft, but at the same time dense and quite expressive. Impact: moderately tones, gives energy, balances.",
                aboutProduct:
                    "Proper storage in a professional warehouse, balance of taste, and absence of extraneous notes. Budget Shu often has disadvantages — rough raw materials, defective notes, and bitterness. There is none of this here. Just a good and very solid shooter. Aroma: dried fruits, woody notes. Taste: balanced, woody-creamy, soft, but at the same time dense and quite expressive. Effect: moderately tones, gives energy, balances.Production: 2013, Gu Cha Yuan Factory (kit. 古茶源), Menghai County, Xishuangbanna County, Yunnan Province, China.",
                SteepingInstructions:
                    "Traditional Preparation Add 7-10 grams to a Gaiwan or Gongfu Teapot (150ml-200ml). Use 212°F boiling water. Briefly rinse the leaves. Decant and discard this infusion. Infuse the first brew for 10 seconds. Infuse 2nd and subsequent brews for 10-30 seconds. Repeat several times until the flavor and aroma of the tea dissipates. As the brewing session ensues, increase infusion time to coax out the body and strength of the final infusions.",
                Ingredients: "Organic Shu Pu-erh",
            },
            {
                id: 17,
                title: "GREEN TEA #1",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069bc_green-1-min.jpg",
                price: 12,
                productArrival: true,
                amount: 1,
                category: "",
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806787_%D0%97%D0%B5%D0%BB%D0%B5%CC%88%D0%BD%D1%8B%D0%B8%CC%86%20%D1%87%D0%B0%D0%B8%CC%86%20%D0%91%D0%B8%D0%BB%D0%BE%D1%87%D1%83%D0%BD%D1%8C%20%C2%AB%D0%98%D0%B7%D1%83%D0%BC%D1%80%D1%83%D0%B4%D0%BD%D1%8B%D0%B5%20%D0%A1%D0%BF%D0%B8%D1%80%D0%B0%D0%BB%D0%B8%20%D0%92%D0%B5%D1%81%D0%BD%D1%8B%C2%BB%2C%20%D0%AE%D0%BD%D1%8C%D0%BD%D0%B0%D0%BD%D1%8C%2C%202022%20%D0%B3-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806755_%D0%97%D0%B5%D0%BB%D0%B5%CC%88%D0%BD%D1%8B%D0%B8%CC%86%20%D1%87%D0%B0%D0%B8%CC%86%20%D0%91%D0%B8%D0%BB%D0%BE%D1%87%D1%83%D0%BD%D1%8C%20%C2%AB%D0%98%D0%B7%D1%83%D0%BC%D1%80%D1%83%D0%B4%D0%BD%D1%8B%D0%B5%20%D0%A1%D0%BF%D0%B8%D1%80%D0%B0%D0%BB%D0%B8%20%D0%92%D0%B5%D1%81%D0%BD%D1%8B%C2%BB%2C%20%D0%AE%D0%BD%D1%8C%D0%BD%D0%B0%D0%BD%D1%8C%2C%202022%20%D0%B3(2)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806757_%D0%97%D0%B5%D0%BB%D0%B5%CC%88%D0%BD%D1%8B%D0%B8%CC%86%20%D1%87%D0%B0%D0%B8%CC%86%20%D0%91%D0%B8%D0%BB%D0%BE%D1%87%D1%83%D0%BD%D1%8C%20%C2%AB%D0%98%D0%B7%D1%83%D0%BC%D1%80%D1%83%D0%B4%D0%BD%D1%8B%D0%B5%20%D0%A1%D0%BF%D0%B8%D1%80%D0%B0%D0%BB%D0%B8%20%D0%92%D0%B5%D1%81%D0%BD%D1%8B%C2%BB%2C%20%D0%AE%D0%BD%D1%8C%D0%BD%D0%B0%D0%BD%D1%8C%2C%202022%20%D0%B3(3)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "dense, rich, and long, with notes of fresh cucumbers, young shoots, and porcini mushrooms. Impact: refreshing, invigorating, and toning. Excellent 'morning' tea.",
                aboutProduct:
                    "The famous green tea from Yunnan province. There are a large number of buds in the raw material, which is clearly visible against the background of green leaves. Thanks to this, tea is drunk for a long time and has a bright aroma. The aroma of dry leaf: bright, smoked, baked. Taste and aftertaste: dense, rich, and long, with notes of fresh cucumbers, young shoots, and porcini mushrooms. With a noticeable but pleasant astringency, it smoothly turns into a sweet, juicy aftertaste. At the end of the tea party, the bitterness fades away, and only sweetness and tender herbiness remain. Effect: refreshing, invigorating, and toning. Excellent 'morning' tea.",
                SteepingInstructions:
                    "Tea Preparation Add 6 grams to a Teapot ( 300ml ). Use 180°F water. Infuse the brew for 2-3 minutes.",
                Ingredients:
                    "Tea Preparation Add 6 grams to a Teapot ( 300ml ). Use 180°F water. Infuse the brew for 2-3 minutes.",
            },
            {
                id: 18,
                title: "OSMANTHUS OOLONG",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069fe_Osman-Thus%20Oolong-1200-1-min.jpg",
                price: 45,
                productArrival: true,
                amount: 1,
                category: 2,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068b1_%D0%A3%D0%BB%D1%83%D0%BD%20%D1%81%20%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D1%82%D1%83%D1%81%D0%BE%D0%BC%20%D1%81%20%D0%BE.%20%D0%A2%D0%B0%D0%B8%CC%86%D0%B2%D0%B0%D0%BD%D1%8C%2C%20%D0%BD%D0%B0%D1%82%D1%83%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B8%CC%86-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068b6_%D0%A3%D0%BB%D1%83%D0%BD%20%D1%81%20%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D1%82%D1%83%D1%81%D0%BE%D0%BC%20%D1%81%20%D0%BE.%20%D0%A2%D0%B0%D0%B8%CC%86%D0%B2%D0%B0%D0%BD%D1%8C%2C%20%D0%BD%D0%B0%D1%82%D1%83%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B8%CC%86(2)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068b7_%D0%A3%D0%BB%D1%83%D0%BD%20%D1%81%20%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D1%82%D1%83%D1%81%D0%BE%D0%BC%20%D1%81%20%D0%BE.%20%D0%A2%D0%B0%D0%B8%CC%86%D0%B2%D0%B0%D0%BD%D1%8C%2C%20%D0%BD%D0%B0%D1%82%D1%83%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B8%CC%86(3)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "fresh, bright taste, dried fruit with berry sweetness. Shades of peaches and apricots. Impact: it refreshes well and gives strength, evens out the condition.",
                aboutProduct:
                    "Taiwanese oolong flavored with natural osmanthus flowers — Gui Hua. Without artificial additives and flavors. Bush variety: based on a blend of Si Tzu Chun and Jin Xuan varieties. Aroma: the bright aroma of flowers, fruit cocktails (peach, apricot, and nectarine), and honey. Delicate notes of white, sweet wine. Taste and aftertaste: fresh, bright taste, dried fruit with berry sweetness. Shades of peaches and apricots. At the same time, the taste of the tea leaf is in the foreground, and osmanthus only perfectly complements it. Gradually, the taste of osmanthus completely disappears, leaving a pure taste of oolong. Impact: it refreshes well and gives strength, evens out the condition.",
                SteepingInstructions:
                    "Tea Preparation Add 6 grams to a Teapot (300 ml). Use 180°F water. Infuse the brew for 2-3 minutes.",
                Ingredients: "Organic oolong tea",
            },
            {
                id: 19,
                title: "WISHAN OOLONG #2",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069fa_Wishan-2-1200-min.jpg",
                price: 15,
                productArrival: true,
                amount: 1,
                category: 2,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068ba_%D0%A8%D1%83%D0%B8%CC%86%20%D0%A1%D1%8F%D0%BD%D1%8C%20%D0%93%D0%B0%D0%BE%20%D0%A8%D0%B0%D0%BD%D1%8C%20%D0%A2%D0%B0%D0%BD%20%D0%91%D1%8D%D0%B8%CC%86%20%C2%AB%E2%80%8E%D0%92%D1%8B%D1%81%D0%BE%D0%BA%D0%BE%D0%B3%D0%BE%D1%80%D0%BD%D1%8B%D0%B8%CC%86%20%D0%9D%D0%B0%D1%80%D1%86%D0%B8%D1%81%D1%81%C2%BB-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068bc_%D0%A8%D1%83%D0%B8%CC%86%20%D0%A1%D1%8F%D0%BD%D1%8C%20%D0%93%D0%B0%D0%BE%20%D0%A8%D0%B0%D0%BD%D1%8C%20%D0%A2%D0%B0%D0%BD%20%D0%91%D1%8D%D0%B8%CC%86%20%C2%AB%E2%80%8E%D0%92%D1%8B%D1%81%D0%BE%D0%BA%D0%BE%D0%B3%D0%BE%D1%80%D0%BD%D1%8B%D0%B8%CC%86%20%D0%9D%D0%B0%D1%80%D1%86%D0%B8%D1%81%D1%81%C2%BB(2)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068b8_%D0%A8%D1%83%D0%B8%CC%86%20%D0%A1%D1%8F%D0%BD%D1%8C%20%D0%93%D0%B0%D0%BE%20%D0%A8%D0%B0%D0%BD%D1%8C%20%D0%A2%D0%B0%D0%BD%20%D0%91%D1%8D%D0%B8%CC%86%20%C2%AB%E2%80%8E%D0%92%D1%8B%D1%81%D0%BE%D0%BA%D0%BE%D0%B3%D0%BE%D1%80%D0%BD%D1%8B%D0%B8%CC%86%20%D0%9D%D0%B0%D1%80%D1%86%D0%B8%D1%81%D1%81%C2%BB(3)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "clean and strong, oily and dense, but at the same time delicate. Smoothly turns into a long, refreshing, sweet aftertaste. Impact: it will warm,cheer up and inspire.",
                aboutProduct:
                    "The taste and aroma of Wishan oolongs depend on many parameters, but two main ones can be distinguished: raw materials and heating. Raw materials determine the potential of tea. For example, if the bushes grow in a good place, get the right amount of sun, fog, and moisture, and the soil under the bushes is rich in necessary substances, then you can make an outstanding tea with an unforgettable taste from the leaves of such bushes. Warming up determines the final result. Tea can be spoiled if it is overheated or, conversely, underheated. But when all the technical subtleties are observed, it turns out perfectly balanced in taste and aroma... Shui Xian Gao Shan Tang Bei. Or 'A High-Altitude Daffodil Warmed on Coals'.The advantages of Narcissus are reflected in the name: the high-altitude collection area promises a wealth of raw materials, and successful warming up using traditional technology on natural coals means an interesting bouquet. Degree of warming up: Jun Ho, medium. Aroma: bright, rich, and rich. Honey and chocolate, fruits, caramel, and walnuts are felt in the aroma of the warmed leaf. Taste: clean and strong, oily and dense, but at the same time delicate. Smoothly turns into a long, refreshing, sweet aftertaste. Impact: it will warm, cheer up and inspire.",
                SteepingInstructions:
                    "Traditional Preparation Add 7-10 grams to a Gaiwan or Gongfu Teapot (150ml-200ml). Use 212°F boiling water. Briefly rinse the leaves. Decant and discard this infusion. Infuse the first brew for 1 second.   Infuse 2nd and subsequent brews for 5-15 seconds. Repeat several times until the flavor and aroma of the tea dissipates. As the brewing session ensues, increase infusion time to coax out the body and strength of the final infusions.",
                Ingredients: "Organic oolong tea",
            },
            {
                id: 20,
                title: "DONG DINGLAO SHI",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069fc_dong-1200-min.jpg",
                price: 50,
                productArrival: true,
                amount: 1,
                category: "",
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068b5_%D0%A3%D0%BB%D1%83%D0%BD%20%D0%94%D1%83%D0%BD%20%D0%94%D0%B8%D0%BD%20%D0%9B%D0%B0%D0%BE%20%D0%A8%D0%B8%2C%20%D1%82%D1%80%D0%B0%D0%B4%D0%B8%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B8%CC%86-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068b3_%D0%A3%D0%BB%D1%83%D0%BD%20%D0%94%D1%83%D0%BD%20%D0%94%D0%B8%D0%BD%20%D0%9B%D0%B0%D0%BE%20%D0%A8%D0%B8%2C%20%D1%82%D1%80%D0%B0%D0%B4%D0%B8%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B8%CC%86(2)-min.jpg",
                minImg3: "",
                availability: "in stock",
                TastingNotes:
                    "soft, sweet, multi-faceted, spicy-caramel, nutty and woody-dried fruit, with smoky coffee notes in the aftertaste and menthol freshness. Impact: intoxicating, relaxing, meditative.",
                aboutProduct:
                    "Medium-fermented highly roasted hemispherical twisted oolong. It is grown and made on the tea farm of the Lu Gu region. This tea is the ancestor of almost the entire tradition of Taiwanese oolongs, originally produced on a mountain peak in the area of Nantou. For this, he received the name 'Oolong from Frosty Peak'. The technology of its manufacture came to the island together with refugees from Fujian Province (China) in the mid-1960s. Some features of the technology have become leading in the tradition of Taiwanese teas. Now tea called 'Dong Ding' is made all over Taiwan and this name has become more of an indication of the processing technology (special roasting) than the terrain. Lao Shi Dong Ding (traditional Dong Ding) has preserved the taste of that era through the centuries, it differs from its modern counterparts. The tea is made from the Qing Xing variety, and has a dark color and a sweet-caramel taste, which is due to technological features. The brightest and most important is roasting. It occurs in two stages, first, they are fried according to the modern method in a drying cabinet, but then they are brought on charcoal. Solid wood is used for coals, for expensive representatives - coals of the Lunyan tree. This tea only improves over time. It is better not to drink it immediately after production, after the fire settles down, the residual bitterness in the taste passes, and only sweetness remains. This tea is perfect for long-term storage, it is from him that the famous Lao Cha Wangs originate. Aroma: caramel, honey, with nuances of flowers, fruits, and spices. Taste: soft, sweet, multi-faceted, spicy caramel, nutty and woody-dried fruit, with smoky coffee notes in the aftertaste and menthol freshness. Effects: intoxicating, relaxing, meditative.",
                SteepingInstructions:
                    "Traditional Preparation Add 7-10 grams to a Gaiwan or Gongfu Teapot (150ml-200ml). Use 212°F boiling water. Briefly rinse the leaves. Decant and discard this infusion. Infuse the first brew for 10 seconds. Infuse 2nd and subsequent brews for 10-30 seconds. Repeat several times until the flavor and aroma of the tea dissipates. As the brewing session ensues, increase infusion time to coax out the body and strength of the final infusions.",
                Ingredients: "Organic oolong tea",
            },
            {
                id: 21,
                title: "WISHAN OOLONG #1",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069fb_wishan-1200-min.jpg",
                price: 15,
                productArrival: true,
                amount: 1,
                category: 2,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068be_%D0%9C%D1%8D%D0%B8%CC%86%20%D0%A7%D0%B6%D0%B0%D0%BD%D1%8C%20%C2%AB%D0%94%D0%B8%D0%BA%D0%B0%D1%8F%20%D0%A1%D0%BB%D0%B8%D0%B2%D0%B0%C2%BB-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068b0_%D0%9C%D1%8D%D0%B8%CC%86%20%D0%A7%D0%B6%D0%B0%D0%BD%D1%8C%20%C2%AB%D0%94%D0%B8%D0%BA%D0%B0%D1%8F%20%D0%A1%D0%BB%D0%B8%D0%B2%D0%B0%C2%BB(2)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068b9_%D0%9C%D1%8D%D0%B8%CC%86%20%D0%A7%D0%B6%D0%B0%D0%BD%D1%8C%20%C2%AB%D0%94%D0%B8%D0%BA%D0%B0%D1%8F%20%D0%A1%D0%BB%D0%B8%D0%B2%D0%B0%C2%BB(3)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "pure and strong, enveloping and soft, but at the same time delicate. Voluminous, sweet and fruity, with baked notes. Impact: leveling, relaxing-meditative, collecting.",
                aboutProduct:
                    "Mei Zhan (梅占, 'Wild Plum') is a Chinese oolong from the vicinity of the Wu Mountains in the north of Fujian Province. The taste and aroma of Wishan oolongs depend on many parameters, but two main ones can be distinguished: raw materials and heating. Raw materials determine the potential of tea. For example, if the bushes grow in a good place, get the right amount of sun, fog, and moisture, and the soil under the bushes is rich in necessary substances, then you can make an outstanding tea with an unforgettable taste from the leaves of such bushes. Warming up determines the final result. Tea can be spoiled if it is overheated or, conversely, underheate. But when all the technical subtleties are observed, it turns out perfectly balanced in taste and aroma... Mei Zhan. Degree of warming up: Jun Ho, medium. Aroma: bright, rich, and complex.  Sweet fruits, flowers, and chocolate, caramel are felt in the aroma of the warmed leaf. Taste: pure and strong, enveloping and soft, but at the same time delicate. Voluminous, sweet and fruity, with baked notes. Smoothly turns into a long, refreshing, sweet aftertaste. Impact: leveling, relaxing-meditative, collecting.",
                SteepingInstructions:
                    "raditional Preparation Add 7-10 grams to a Gaiwan or Gongfu Teapot (150ml-200ml). Use 212°F boiling water. Briefly rinse the leaves. Decant and discard this infusion. Infuse the first brew for 1 second. Infuse 2nd and subsequent brews for 5-15 seconds. Repeat several times until the flavor and aroma of the tea dissipates. As the brewing session ensues, increase infusion time to coax out the body and strength of the final infusions.",
                Ingredients: "Organic oolong tea",
            },
            {
                id: 22,
                title: "TIE-GUAN YIN #3",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806a1b_Tie-Guan%203%201200%20copy-min.jpg",
                price: 15,
                productArrival: true,
                amount: 1,
                category: "",
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8067cc_%D0%A3%D0%BB%D1%83%D0%BD%20%D0%A2%D0%B5%D0%B3%D1%83%D0%B0%D0%BD%D1%8C%D0%B8%D0%BD%D1%8C%20%D0%B2%20%D0%9A%D1%83%D0%B3%D1%83%D0%B0%2C%20%D0%BF%D1%80%D0%BE%D0%B6%D0%B0%D1%80%D0%B5%D0%BD%D0%BD%D1%8B%D0%B8%CC%86%20%D0%B8%20%D0%B2%D1%8B%D0%B4%D0%B5%D1%80%D0%B6%D0%B0%D0%BD%D0%BD%D1%8B%D0%B8%CC%86%2C%202019%20%D0%B3-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80678a_%D0%A3%D0%BB%D1%83%D0%BD%20%D0%A2%D0%B5%D0%B3%D1%83%D0%B0%D0%BD%D1%8C%D0%B8%D0%BD%D1%8C%20%D0%B2%20%D0%9A%D1%83%D0%B3%D1%83%D0%B0%2C%20%D0%BF%D1%80%D0%BE%D0%B6%D0%B0%D1%80%D0%B5%D0%BD%D0%BD%D1%8B%D0%B8%CC%86%20%D0%B8%20%D0%B2%D1%8B%D0%B4%D0%B5%D1%80%D0%B6%D0%B0%D0%BD%D0%BD%D1%8B%D0%B8%CC%86%2C%202019%20%D0%B3(2)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8067f6_%D0%A3%D0%BB%D1%83%D0%BD%20%D0%A2%D0%B5%D0%B3%D1%83%D0%B0%D0%BD%D1%8C%D0%B8%D0%BD%D1%8C%20%D0%B2%20%D0%9A%D1%83%D0%B3%D1%83%D0%B0%2C%20%D0%BF%D1%80%D0%BE%D0%B6%D0%B0%D1%80%D0%B5%D0%BD%D0%BD%D1%8B%D0%B8%CC%86%20%D0%B8%20%D0%B2%D1%8B%D0%B4%D0%B5%D1%80%D0%B6%D0%B0%D0%BD%D0%BD%D1%8B%D0%B8%CC%86%2C%202019%20%D0%B3(3)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "chocolate, nutty tones. The taste of the raw material itself is felt, the weak bitterness of cougar smoothly turns into sweetness and remains in the aftertaste. Impact: keeps the body in good shape, and the spirit in peace.",
                aboutProduct:
                    "Oolong from Anxi County, roasted and aged in kugua. Kugua, or Momordica harantia, is a Chinese pumpkin in which different teas are aged in a traditional way for China. After that, the tea acquires original notes in taste and aroma, reminiscent of Taiwanese Lao cha. Aroma: slightly sweet and spicy. There are notes of nuts and dried fruits. The heated gaiwan is dominated by the aroma of cocoa, nuts, and cream. A real tea dessert, like prunes in chocolate. Taste: chocolate, nutty tones. The taste of the raw material itself is felt, and the weak bitterness of cougar smoothly turns into sweetness and remains in the aftertaste. Impact: keeps the body in good shape, and the spirit in peace.",
                SteepingInstructions:
                    "Traditional Preparation Add 4-6 grams to a Gaiwan or Gongfu Teapot (150ml-200ml). Use 212°F boiling water. Briefly rinse the leaves. Decant and discard this infusion. Infuse the first brew for 10 seconds.  Infuse 2nd and subsequent brews for 10-30 seconds. Repeat several times until the flavor and aroma of the tea dissipates. As the brewing session ensues, increase infusion time to coax out the body and strength of the final infusions.",
                Ingredients: "Organic oolong tea",
            },
            {
                id: 23,
                title: "MILK OOLONG",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069f2_milk-oolong-1200-min.jpg",
                price: 18,
                productArrival: true,
                amount: 1,
                category: "",
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806899_%D0%9C%D0%BE%D0%BB%D0%BE%D1%87%D0%BD%D1%8B%D0%B8%CC%86%20%D0%A3%D0%BB%D1%83%D0%BD%20%C2%AB%D0%9D%D0%B0%D0%B8%CC%86%20%D0%A1%D1%8F%D0%BD%C2%BB%2C%20%D0%9A%D0%B8%D1%82%D0%B0%D0%B8%CC%86%2C%202022%20%D0%B3-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068a6_%D0%9C%D0%BE%D0%BB%D0%BE%D1%87%D0%BD%D1%8B%D0%B8%CC%86%20%D0%A3%D0%BB%D1%83%D0%BD%20%C2%AB%D0%9D%D0%B0%D0%B8%CC%86%20%D0%A1%D1%8F%D0%BD%C2%BB%2C%20%D0%9A%D0%B8%D1%82%D0%B0%D0%B8%CC%86%2C%202022%20%D0%B3(2)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80683e_%D0%9C%D0%BE%D0%BB%D0%BE%D1%87%D0%BD%D1%8B%D0%B8%CC%86%20%D0%A3%D0%BB%D1%83%D0%BD%20%C2%AB%D0%9D%D0%B0%D0%B8%CC%86%20%D0%A1%D1%8F%D0%BD%C2%BB%2C%20%D0%9A%D0%B8%D1%82%D0%B0%D0%B8%CC%86%2C%202022%20%D0%B3(3)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "sweet, floral, creamy. Without bitterness and astringency. Impact: refreshing, relaxing, and harmonizing.",
                aboutProduct:
                    "The name 'Nai Xiang' translates as 'Milk flavor'. This tea is based on raw materials of the Mao Xie or Teguanyin variety. The refreshing taste and floral aroma were complemented by a creamy caramel note with the help of a food flavor. Aroma: sweet, milky caramel with a slight chocolate tint. The warmed tea leaves smell of cotton candy, sweet popcorn, and whipped cream. Taste: sweet, floral, creamy. Without bitterness and astringency. Effect: refreshing, relaxing, and harmonizing.",
                SteepingInstructions:
                    "Tea Preparation Add 6 grams to a Teapot (300 ml). Use 200°F water. Infuse the brew for 3 minutes.",
                Ingredients: "Oolong tea",
            },
            {
                id: 24,
                title: "BLACK TEA #3",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069b2_black-3-min.jpg",
                price: 15,
                productArrival: true,
                amount: 1,
                category: "",
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068ef_%D0%9B%D1%8E%D0%B0%D0%BD%D1%8C%20%D0%A5%D1%8D%D0%B8%CC%86%20%D0%A7%D0%B0%20%D0%B2%20%D0%BA%D0%BE%D1%80%D0%B7%D0%B8%D0%BD%D0%BA%D0%B5%2C%202021%20%D0%B3(3)-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068e1_%D0%9B%D1%8E%D0%B0%D0%BD%D1%8C%20%D0%A5%D1%8D%D0%B8%CC%86%20%D0%A7%D0%B0%20%D0%B2%20%D0%BA%D0%BE%D1%80%D0%B7%D0%B8%D0%BD%D0%BA%D0%B5%2C%202021%20%D0%B3(2)-min.jpg",
                minImg3: "",
                availability: "in stock",
                TastingNotes:
                    "spicy, sweet, with a pleasant bitterness. It looks like both Wishan oolong and Shu Pu'er. Impact: gently tones, and smoothes.",
                aboutProduct:
                    "Black fermented tea Hei Cha from Anhui province. Packed in a traditional bamboo basket of 500 grams. Aroma: sweet, woody-spicy, chocolate, with notes of dead leaves. Taste: spicy, sweet, with a pleasant bitterness. It looks like both Wishan oolong and Shu Pu'er. Effect: gently tones, and smoothes.",
                SteepingInstructions:
                    "Traditional Preparation Add 10-12 grams to a Gaiwan or Gongfu Teapot (150ml-200ml). Use 212°F boiling water. Briefly rinse the leaves. Decant and discard this infusion. Infuse the first brew for 10 seconds. Infuse 2nd and subsequent brews for 10-30 seconds. Repeat several times until the flavor and aroma of the tea dissipates. As the brewing session ensues, increase infusion time to coax out the body and strength of the final infusions.",
                Ingredients: "Organic black tea",
            },
            {
                id: 25,
                title: "AGED OOLONG #1",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069f9_Aged%20Oolong-1200-min.jpg",
                price: 50,
                productArrival: true,
                amount: 1,
                category: 2,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068cb_%D0%9B%D1%83%20%D0%93%D1%83%20%D0%9B%D0%B0%D0%BE%20%D0%A7%D0%B0%20%D0%92%D0%B0%D0%BD%2012-%D0%BB%D0%B5%D1%82%D0%BD%D0%B8%D0%B8%CC%86-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068b4_%D0%9B%D1%83%20%D0%93%D1%83%20%D0%9B%D0%B0%D0%BE%20%D0%A7%D0%B0%20%D0%92%D0%B0%D0%BD%2012-%D0%BB%D0%B5%D1%82%D0%BD%D0%B8%D0%B8%CC%86(2)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068bd_%D0%9B%D1%83%20%D0%93%D1%83%20%D0%9B%D0%B0%D0%BE%20%D0%A7%D0%B0%20%D0%92%D0%B0%D0%BD%2012-%D0%BB%D0%B5%D1%82%D0%BD%D0%B8%D0%B8%CC%86(3)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "deep, spicy caramel, nutty, with chocolate and smoky coffee notes in the aftertaste. Impact: harmonizing, relaxing, meditative. Suitable for an attentive tea ceremony.",
                aboutProduct:
                    "Aged 12-year-old oolong from the Lu Gu farm. The modern technology of Lao Cha Van production is as follows. Oolong is prepared in the same way as the rest of Taiwan's oolongs. Most oolongs are first prepared for storage by roasting to such an extent that the moisture content level is suitable for preservation. The master leaves a small amount of the best tea in the year for storage. It is poured into large stone or clay vessels, covering the top with thick paper to absorb moisture.  The maturing tea is usually taken out and checked every two to three years, thoroughly fried again to remove excess moisture and preserve the aroma. The natural aging process takes about three years, as a result of which tea loses its fresh appearance and smell. At least after three years of storage, the tea begins to acquire a special softness characteristic of aged oolongs. Experts determine the age of six to eight years at least for the maturity of Lao Cha Wang. Aroma: caramel, tobacco-coffee, nutty. Taste: deep, spicy-caramel, nutty, with chocolate and smoky coffee notes in the aftertaste. Effects: harmonizing, relaxing, meditative. Suitable for an attentive tea ceremony. Collection: 12 years ago, Taiwan Island.",
                SteepingInstructions:
                    "Traditional Preparation Add 7-10 grams to a Gaiwan or Gongfu Teapot (150ml-200ml). Use 200°F water. Briefly rinse the leaves. Decant and discard this infusion. Infuse the first brew for 10 seconds. Infuse 2nd and subsequent brews for 10-30 seconds. Repeat several times until the flavor and aroma of the tea dissipates. As the brewing session ensues, increase infusion time to coax out the body and strength of the final infusions.",
                Ingredients: "Organic oolong tea",
            },
            {
                id: 26,
                title: "TIE-GUAN YIN #1",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069f3_1200-Tie-Guan%20Yin%201-min.jpg",
                price: 14,
                productArrival: true,
                amount: 1,
                category: 4,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80678c_%D0%A3%D0%BB%D1%83%D0%BD%20%D0%A2%D0%B5%D0%B3%D1%83%D0%B0%D0%BD%D1%8C%D0%B8%D0%BD%D1%8C%2C%20%D0%B2%D0%B5%D1%81%D0%BD%D0%B0%202022%20%D0%B3-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806789_%D0%A3%D0%BB%D1%83%D0%BD%20%D0%A2%D0%B5%D0%B3%D1%83%D0%B0%D0%BD%D1%8C%D0%B8%D0%BD%D1%8C%2C%20%D0%B2%D0%B5%D1%81%D0%BD%D0%B0%202022%20%D0%B3(2)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806818_%D0%A3%D0%BB%D1%83%D0%BD%20%D0%A2%D0%B5%D0%B3%D1%83%D0%B0%D0%BD%D1%8C%D0%B8%D0%BD%D1%8C%2C%20%D0%B2%D0%B5%D1%81%D0%BD%D0%B0%202022%20%D0%B3(3)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "fresh and fruity. Over time, a berry sourness and a small, pleasant astringency appear. Fresh and light aftertaste. Impact: refreshing, relaxing.",
                aboutProduct:
                    "The famous oolong from the south of Fujian Province from Anxi County. It is there that Te guan yin has been traditionally grown since the VII century. In Anxi, tea is classified according to the method of processing. Our Teguanyin was created using the classic Guo Xiang leaf processing technology 'Fruit Flavor'. It is appreciated for its delicate, delicate aroma and a mild taste. Aroma: sweet, with notes of applesauce and blooming lilac. Taste: fresh and fruity. Over time, a berry sourness and a small, pleasant astringency appear. Fresh and light aftertaste. Effect: refreshing, relaxing. ",
                SteepingInstructions:
                    "Tea Preparation Add 6 grams to a Teapot (300 ml). Use 200°F water. Infuse the brew for 2-3 minutes.",
                Ingredients: "Organic oolong tea",
            },
            {
                id: 27,
                title: "DAN TSUNG #1",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069ee_dan-1200-min.jpg",
                price: 33,
                productArrival: true,
                amount: 1,
                category: 2,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068c1_%D0%9C%D0%B8%20%D0%9B%D0%B0%D0%BD%D1%8C%20%D0%A1%D1%8F%D0%BD%20%D0%93%D0%B0%D0%BE%D1%88%D0%B0%D0%BD%D1%8C%20%D0%94%D0%B0%D0%BD%D1%8C%20%D0%A6%D1%83%D0%BD%20%C2%AB%D0%9C%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%9E%D1%80%D1%85%D0%B8%D0%B4%D0%B5%D1%8F%C2%BB%20-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068c4_%D0%9C%D0%B8%20%D0%9B%D0%B0%D0%BD%D1%8C%20%D0%A1%D1%8F%D0%BD%20%D0%93%D0%B0%D0%BE%D1%88%D0%B0%D0%BD%D1%8C%20%D0%94%D0%B0%D0%BD%D1%8C%20%D0%A6%D1%83%D0%BD%20%C2%AB%D0%9C%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%9E%D1%80%D1%85%D0%B8%D0%B4%D0%B5%D1%8F%C2%BB(2)%20-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068c6_%D0%9C%D0%B8%20%D0%9B%D0%B0%D0%BD%D1%8C%20%D0%A1%D1%8F%D0%BD%20%D0%93%D0%B0%D0%BE%D1%88%D0%B0%D0%BD%D1%8C%20%D0%94%D0%B0%D0%BD%D1%8C%20%D0%A6%D1%83%D0%BD%20%C2%AB%D0%9C%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%9E%D1%80%D1%85%D0%B8%D0%B4%D0%B5%D1%8F%C2%BB(3)%20-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "rich, thick, with obvious citrus-honey notes and pleasant, expressive astringency. Impact: fills with energy and cheerfulness, lifts the mood.",
                aboutProduct:
                    "A classic representative of the oolongs from Guangdong province. It is distinguished by a bright, multifaceted aroma and high—quality raw materials from the peaks of Feng Huang Shan, a mountain in Southern China with a favorable climate and soil for tea. Aroma: complex, intoxicating, with notes of ripe fruits, honey, and sweet flowers. Taste: rich, thick, with obvious citrus-honey notes and pleasant, expressive astringency. Impact: fills with energy and cheerfulness, lifts the mood.",
                SteepingInstructions:
                    "Traditional Preparation Add 7-10 grams to a Gaiwan or Gongfu Teapot (150ml-200ml). Use 212°F boiling water. Briefly rinse the leaves. Decant and discard this infusion. Infuse the first brew for 6 seconds. Infuse 2nd and subsequent brews for 10-30 seconds. ",
                Ingredients: "Organic oolong tea",
            },
            {
                id: 28,
                title: "SHU PU-ERH #18",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069b6_shu-18-min.jpg",
                price: 15,
                productArrival: true,
                amount: 1,
                category: 4,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806752_%D0%93%D1%83%D0%BD%D1%82%D0%B8%D0%BD%20%D0%92%D0%B0%D0%BD%2C%202012%20%D0%B3(3)-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8066c8_%D0%93%D1%83%D0%BD%D1%82%D0%B8%D0%BD%20%D0%92%D0%B0%D0%BD%2C%202012%20%D0%B3(4)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806750_%D0%93%D1%83%D0%BD%D1%82%D0%B8%D0%BD%20%D0%92%D0%B0%D0%BD%2C%202012%20%D0%B3(2)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "sweet-woody, sleeper and dense with hints of bitter chocolate and prunes. Impact: powerful, actively toning. Impact: powerful, actively toning.",
                aboutProduct:
                    "A good sample of aged guntina. The word guntin (kit. 宫廷, 'Palace') indicates the category of raw materials, i.e. the size of the sheet. Such leaves are small, and at the same time whole, and not cut. In the guntins, tender leaves are necessarily interspersed with a large number of tea buds. Together they provide a rich taste and a strong impact. By nature, this tea is bold and even brutal, but noble. Aroma: bright, with a clear camphor note. Taste: sweet-woody, sleeper, and dense with hints of bitter chocolate and prunes. All these notes will be intertwined harmoniously, without kinks, thanks to proper storage in a specialized warehouse. Impact: powerful, actively toning. Production: 2012, Menghai Da Tang Factory (Chinese: Menghai County, Xishuangbanna County, Yunnan Province, China.",
                SteepingInstructions:
                    "Traditional Preparation Add 7-10 grams to a Gaiwan or Gongfu Teapot (150ml-200ml). Use 212°F boiling water. Briefly rinse the leaves. Decant and discard this infusion. Infuse the first brew for 10 seconds. Infuse 2nd and subsequent brews for 10-30 seconds. Repeat several times until the flavor and aroma of the tea dissipates. As the brewing session ensues, increase infusion time to coax out the body and strength of the final infusions.",
                Ingredients: "Organic Shu Pu-erh",
            },
            {
                id: 29,
                title: "GREEN TEA #2",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069bb_green-2-min.jpg",
                price: 27,
                productArrival: true,
                amount: 1,
                category: "",
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806788_%D0%97%D0%B5%D0%BB%D0%B5%CC%88%D0%BD%D1%8B%D0%B8%CC%86%20%D1%87%D0%B0%D0%B8%CC%86%20%D0%A1%D0%B8%20%D0%A5%D1%83%20%D0%9B%D1%83%D0%BD%D1%86%D0%B7%D0%B8%D0%BD%20%C2%AB%D0%9A%D0%BE%D0%BB%D0%BE%D0%B4%D0%B5%D1%86%20%D0%94%D1%80%D0%B0%D0%BA%D0%BE%D0%BD%D0%B0%C2%BB%2C%20%D0%B2%D1%8B%D1%81%D1%88%D0%B8%D0%B8%CC%86%20%D1%81%D0%BE%D1%80%D1%82%2C%20%D0%B2%D0%B5%D1%81%D0%BD%D0%B0%202022%20%D0%B3(3)-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806785_%D0%97%D0%B5%D0%BB%D0%B5%CC%88%D0%BD%D1%8B%D0%B8%CC%86%20%D1%87%D0%B0%D0%B8%CC%86%20%D0%A1%D0%B8%20%D0%A5%D1%83%20%D0%9B%D1%83%D0%BD%D1%86%D0%B7%D0%B8%D0%BD%20%C2%AB%D0%9A%D0%BE%D0%BB%D0%BE%D0%B4%D0%B5%D1%86%20%D0%94%D1%80%D0%B0%D0%BA%D0%BE%D0%BD%D0%B0%C2%BB%2C%20%D0%B2%D1%8B%D1%81%D1%88%D0%B8%D0%B8%CC%86%20%D1%81%D0%BE%D1%80%D1%82%2C%20%D0%B2%D0%B5%D1%81%D0%BD%D0%B0%202022%20%D0%B3-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806786_%D0%97%D0%B5%D0%BB%D0%B5%CC%88%D0%BD%D1%8B%D0%B8%CC%86%20%D1%87%D0%B0%D0%B8%CC%86%20%D0%A1%D0%B8%20%D0%A5%D1%83%20%D0%9B%D1%83%D0%BD%D1%86%D0%B7%D0%B8%D0%BD%20%C2%AB%D0%9A%D0%BE%D0%BB%D0%BE%D0%B4%D0%B5%D1%86%20%D0%94%D1%80%D0%B0%D0%BA%D0%BE%D0%BD%D0%B0%C2%BB%2C%20%D0%B2%D1%8B%D1%81%D1%88%D0%B8%D0%B8%CC%86%20%D1%81%D0%BE%D1%80%D1%82%2C%20%D0%B2%D0%B5%D1%81%D0%BD%D0%B0%202022%20%D0%B3(2)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "thick, oily and rich. Sweet, floral notes with a slight bitterness. Impact: refreshes, invigorates, and improves mindfulness and efficiency.",
                aboutProduct:
                    "Longjing ( Dragon Well ) is one of the ten 'Famous Teas of China'. It is made of small tea leaves and buds, thanks to which it is drunk for a long time, and has a bright aroma and rich taste. In the manufacture of thin and flat leaves are obtained.Aroma: bright, rich, sweet, delicate notes of roasted sunflower seeds and sunflower oil.Taste: thick, oily, and rich. Sweet, floral notes with a slight bitterness. Effect: refreshes, invigorates, and improves mindfulness and efficiency.",
                SteepingInstructions:
                    "Tea Preparation Add 4 grams to a Teapot (300 ml). Use 195°F water. Infuse the brew for 2.5 minutes.",
                Ingredients: "Organic green tea",
            },
            {
                id: 30,
                title: "Green tea FLOW",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069b9_green%20flow%20combo-min.jpg",
                price: 50,
                productArrival: true,
                amount: 1,
                category: 3,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069b9_green%20flow%20combo-min.jpg",
                minImg2: "",
                minImg3: "",
                availability: "in stock",
                TastingNotes:
                    "The most popular and diverse type of tea in China. It has a clean and sweet aroma, delicate, but at the same time full of taste. A bouquet of green tea is recognized by floral baked, fruit, and berry shades.",
                aboutProduct:
                    "The set includes 6 varieties of green tea of 0.78 OZ (22 G). The most popular and diverse type of tea in China. It has a clean and sweet aroma, delicate, but at the same time full of taste. A bouquet of green tea is recognized by floral, baked, fruit, and berry shades. Get acquainted with our collection, try new items, or make a delicious tea gift for a friend. By buying a set you save 20%.Composition: Green tea #1,#2, #3, #4 + 2 secret teas Total weight: 4.6 OZ (132 G). Tea is packed in foil, sealed bags. The package's appearance and the kit's composition may differ from those shown in the photo and description. We make all replacements for samples that are as close to taste and aroma as possible. Have a nice tea party.",
                SteepingInstructions: "",
                Ingredients: "Organic green tea",
            },
            {
                id: 31,
                title: "Pu-erh FLOW",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069b8_pu-erh%20flow%20combo-min.jpg",
                price: 55,
                productArrival: true,
                amount: 1,
                category: 3,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069b8_pu-erh%20flow%20combo-min.jpg",
                minImg2: "",
                minImg3: "",
                availability: "in stock",
                TastingNotes:
                    "A variety of Pu-eth is presented - young, aged, of different localities, factories, and forms of the press. There is a myth that the taste and aroma of Pu-erh are limited to peat, earth, and fish notes. We will prove to you that Pu-erh is capable of much more!",
                aboutProduct:
                    "The set includes 6 varieties of Shu Pu-erh of 0.78 OZ (22 G). A variety of Pu-eth is presented - young, aged, of different localities, factories, and forms of the press. There is a myth that the taste and aroma of Pu-erh are limited to peat, earth, and fish notes. We will prove to you that Pu-erh is capable of much more! Get to know our collection, try new items or make a friend an invigorating tea gift. By buying a set you save 20%.Composition: Shu pu-erh #2, #4, #6 Sheng pu-erh #1 + 2 secret tea Total weight: 4.6 OZ (132 G) Tea is packed in foil, sealed bags. The package's appearance and the kit's composition may differ from those shown in the photo and description. We make all replacements for samples that are as close to taste and aroma as possible. Have a nice tea party.",
                SteepingInstructions: "",
                Ingredients: "Organic Shu Pu-erh",
            },
            {
                id: 32,
                title: "TeaFLOW",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806924_Slide7-min.jpg",
                price: 72,
                productArrival: true,
                amount: 1,
                category: 3,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806924_Slide7-min.jpg",
                minImg2: "",
                minImg3: "",
                availability: "in stock",
                TastingNotes:
                    "Each tea is a bestseller in the top-quality segment of our collection. An ideal option for a first date or when you want something different, but always delicious.",
                aboutProduct:
                    "The set comes with 6 types of tea. Each tea is a bestseller in the top-quality segment of our collection. An ideal option for a first date or when you want something different, but always delicious. Explore our collection, sample some of our most recent additions, or give a friend an invigorating tea gift. By buying a set you save 20% and have free delivery. Composition: White tea #1 - 0.78 OZ (22 G) Green tea #3 - 1.5 OZ ( 43 G) Green tea #2 - 0.78 OZ (22 G) Tie Guan Yin #2 - 1.5 OZ ( 43 G) Red tea #2 - 1.5 OZ ( 43 G) Shu pu-erh #2 - 3 OZ ( 86 G) Total weight: 9.2 OZ (259 G) The appearance of the packaging and the composition of the kit may differ from those shown in the photo and in the description. We make all replacements for samples that are as close as possible to taste and aroma. Enjoy your tea.",
                SteepingInstructions: "",
                Ingredients:
                    "Organic Shu Pu-erh, Organic green tea, Organic oolong tea, Organic red tea, Organic white tea.",
            },
            {
                id: 33,
                title: "Teapot #1",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069ec_teapot-1-min.jpg",
                price: 85,
                productArrival: true,
                amount: 1,
                category: 6,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80690f_%D0%A7%D0%B0%D0%B8%CC%86%D0%BD%D0%B8%D0%BA%203-min.jpeg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806905_%D0%A7%D0%B0%D0%B8%CC%86%D0%BD%D0%B8%D0%BA%204-min.jpeg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80690c_%D0%A7%D0%B0%D0%B8%CC%86%D0%BD%D0%B8%D0%BA%205-min.jpeg",
                availability: "in stock",
                TastingNotes: "",
                aboutProduct: "",
                SteepingInstructions: "",
                Ingredients: "",
            },
            {
                id: 34,
                title: "Teapot #2",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069e9_teapot-2-min.jpg",
                price: 70,
                productArrival: true,
                amount: 1,
                category: [4, 6],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80691c_%D0%A7%D0%B0%D0%B8%CC%86%D0%BD%D0%B8%D0%BA%203-min.jpeg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806919_%D0%A7%D0%B0%D0%B8%CC%86%D0%BD%D0%B8%D0%BA%204-min.jpeg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80691b_%D0%A7%D0%B0%D0%B8%CC%86%D0%BD%D0%B8%D0%BA%205-min.jpeg",
                availability: "in stock",
                TastingNotes: "",
                aboutProduct: "",
                SteepingInstructions: "",
                Ingredients: "",
            },
            {
                id: 35,
                title: "Teapot #5",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069ed_teapot-5-min.jpg",
                price: 100,
                productArrival: true,
                amount: 1,
                category: [5, 6],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80692e_img_9146-1000x1000-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806931_img_9148-1000x1000-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806936_img_9149-1000x1000-min.jpg",
                availability: "in stock",
                TastingNotes: "",
                aboutProduct: "",
                SteepingInstructions: "",
                Ingredients: "",
            },
            {
                id: 36,
                title: "Gaiwan #1",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069d5_gaiwan-1-new-1-min.jpg",
                price: 18,
                productArrival: true,
                amount: 1,
                category: [4, 6],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068ea_%D0%93%D0%B0%D0%B8%CC%86%D0%B2%D0%B0%D0%BD%D1%8C%20%D0%9A%D0%BE%D1%81%D0%BC%D0%BE%D1%81%202-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068f0_%D0%93%D0%B0%D0%B8%CC%86%D0%B2%D0%B0%D0%BD%D1%8C%20%D0%9A%D0%BE%D1%81%D0%BC%D0%BE%D1%81%203-min.jpg",
                minImg3: "",
                availability: "in stock",
                TastingNotes: "",
                aboutProduct: "",
                SteepingInstructions: "",
                Ingredients: "",
            },
            {
                id: 37,
                title: "Teacup #7",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069df_teacup-7-new-min.jpg",
                price: 5,
                productArrival: true,
                amount: 1,
                category: 6,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806948_img_5224-1000x1000-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80694c_img_5223-1000x1000-min.jpg",
                minImg3: "",
                availability: "in stock",
                TastingNotes: "",
                aboutProduct: "",
                SteepingInstructions: "",
                Ingredients: "",
            },
            {
                id: 38,
                title: "Teacup #1",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069d9_tea-cup-1-new-1-min.jpg",
                price: 8,
                productArrival: true,
                amount: 1,
                category: [4, 6],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068ff_%D0%9F%D0%B8%D0%B0%D0%BB%D0%B0%20%D0%A1%D0%B0%D0%BA%D1%83%D1%80%D0%B0%203-min.jpeg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068fd_%D0%9F%D0%B8%D0%B0%D0%BB%D0%B0%20%D0%A1%D0%B0%D0%BA%D1%83%D1%80%D0%B0%202-min.jpeg",
                minImg3: "",
                availability: "in stock",
                TastingNotes: "",
                aboutProduct: "",
                SteepingInstructions: "",
                Ingredients: "",
            },
            {
                id: 39,
                title: "Teacup #2",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069da_tea-cup-2-new-1-min.jpg",
                price: 5,
                productArrival: true,
                amount: 1,
                category: 6,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806911_%D0%9F%D0%B8%D0%B0%D0%BB%D0%B0%202-min.jpeg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806912_%D0%9F%D0%B8%D0%B0%D0%BB%D0%B0%203-min.jpeg",
                minImg3: "",
                availability: "in stock",
                TastingNotes: "",
                aboutProduct: "",
                SteepingInstructions: "",
                Ingredients: "",
            },
            {
                id: 40,
                title: "Gaiwan #4",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069d7_gaiwan-4-new-1-min.jpeg",
                price: 36,
                productArrival: true,
                amount: 1,
                category: 6,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806937_%D0%93%D0%B0%D0%B8%CC%86%D0%B2%D0%B0%D0%BD%D1%8C%203-min.jpeg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80693c_%D0%93%D0%B0%D0%B8%CC%86%D0%B2%D0%B0%D0%BD%D1%8C%202-min.jpeg",
                minImg3: "",
                availability: "in stock",
                TastingNotes: "",
                aboutProduct: "",
                SteepingInstructions: "",
                Ingredients: "",
            },
            {
                id: 41,
                title: "Teapot #4",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069eb_teapot-4-min.jpg",
                price: 70,
                productArrival: true,
                amount: 1,
                category: [5, 6],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806932_img_8523-1000x1000.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806930_img_8525-1000x1000.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80692d_img_8526-1000x1000.jpg",
                availability: "in stock",
                TastingNotes: "",
                aboutProduct: "",
                SteepingInstructions: "",
                Ingredients: "",
            },
            {
                id: 42,
                title: "Teapot #3",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069ea_teapot-3-min.jpg",
                price: 80,
                productArrival: true,
                amount: 1,
                category: 6,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806929_img_8464-1000x1000-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80692f_img_8460-1000x1000-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806927_img_8463-1000x1000-min.jpg",
                availability: "in stock",
                TastingNotes: "",
                aboutProduct: "",
                SteepingInstructions: "",
                Ingredients: "",
            },
            {
                id: 43,
                title: "Gaiwan #5",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069d8_gaiwan-5-new-min.jpeg",
                price: 30,
                productArrival: true,
                amount: 1,
                category: "",
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806941_%D0%93%D0%B0%D0%B8%CC%86%D0%B2%D0%B0%D0%BD%D1%8C%203-min.jpeg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806940_%D0%93%D0%B0%D0%B8%CC%86%D0%B2%D0%B0%D0%BD%D1%8C%202-min.jpeg",
                minImg3: "",
                availability: "in stock",
                TastingNotes: "",
                aboutProduct: "",
                SteepingInstructions: "",
                Ingredients: "",
            },
            {
                id: 44,
                title: "Teacup #5",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069dd_Teacup%20%235-new-1-min.jpg",
                price: 18,
                productArrival: true,
                amount: 1,
                category: 6,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806943_img_8186-1000x1000-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806946_img_8185-1000x1000-min.jpg",
                minImg3: "",
                availability: "in stock",
                TastingNotes: "",
                aboutProduct: "",
                SteepingInstructions: "",
                Ingredients: "",
            },
            {
                id: 45,
                title: "Teacup #8",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069e0_Teacup%20%238-new-1-min.jpg",
                price: 18,
                productArrival: true,
                amount: 1,
                category: 6,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80694d_dsc07420-1000x1000-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806956_dsc07419-1000x1000-min.jpg",
                minImg3: "",
                availability: "in stock",
                TastingNotes: "",
                aboutProduct: "",
                SteepingInstructions: "",
                Ingredients: "",
            },
            {
                id: 46,
                title: "Gaiwan #2",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069d4_gaiwan-2-new-1-min.jpeg",
                price: 26,
                productArrival: true,
                amount: 1,
                category: [4, 6],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806935_%D0%93%D0%B0%D0%B8%CC%86%D0%B2%D0%B0%D0%BD%D1%8C%202-min.jpeg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80693a_%D0%93%D0%B0%D0%B8%CC%86%D0%B2%D0%B0%D0%BD%D1%8C%204-min.jpeg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806939_%D0%93%D0%B0%D0%B8%CC%86%D0%B2%D0%B0%D0%BD%D1%8C%205-min.jpeg",
                availability: "in stock",
                TastingNotes: "",
                aboutProduct: "",
                SteepingInstructions: "",
                Ingredients: "",
            },
            {
                id: 47,
                title: "Chaban #2",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069c5_chaban-2-new-1-min.jpeg",
                price: 150,
                productArrival: true,
                amount: 1,
                category: 7,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80691f_%D0%A7%D0%B0%D0%B1%D0%B0%D0%BD%D1%8C%202-min.jpeg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80691e_%D0%A7%D0%B0%D0%B1%D0%B0%D0%BD%D1%8C%204-min.jpeg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806922_%D0%A7%D0%B0%D0%B1%D0%B0%D0%BD%D1%8C%205-min.jpeg",
                availability: "in stock",
                TastingNotes: "",
                aboutProduct: "",
                SteepingInstructions: "",
                Ingredients: "",
            },
            {
                id: 48,
                title: "Pu-erh tea knife #1",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069c8_pu-erh-tea-knife-new-1-min.jpeg",
                price: 9,
                productArrival: true,
                amount: 1,
                category: 7,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068ee_%D0%A8%D0%B8%D0%BB%D0%BE%20%D0%B4%D0%BB%D1%8F%20%D0%BF%D1%83%D1%8D%D1%80%D0%B0%20.jpeg",
                minImg2: "",
                minImg3: "",
                availability: "in stock",
                TastingNotes: "",
                aboutProduct: "",
                SteepingInstructions: "",
                Ingredients: "",
            },
            {
                id: 49,
                title: "Chaban #1",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069c6_Chaban%20%231-new-1-min.jpeg",
                price: 110,
                productArrival: true,
                amount: 1,
                category: 7,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068f3_%D0%A7%D0%B0%D0%B1%D0%B0%D0%BD%D1%8C%20StoneLeaf%202.jpeg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068f5_%D0%A7%D0%B0%D0%B1%D0%B0%D0%BD%D1%8C%20StoneLeaf%203.jpeg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068fa_%D0%A7%D0%B0%D0%B1%D0%B0%D0%BD%D1%8C%20StoneLeaf%204.jpeg",
                availability: "in stock",
                TastingNotes: "",
                aboutProduct: "",
                SteepingInstructions: "",
                Ingredients: "",
            },
            {
                id: 50,
                title: "Chaban #3",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069c4_chaban-3-new-1-min.jpeg",
                price: 60,
                productArrival: true,
                amount: 1,
                category: 7,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806923_%D0%A7%D0%B0%D0%B1%D0%B0%D0%BD%D1%8C%202-min.jpeg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806921_%D0%A7%D0%B0%D0%B1%D0%B0%D0%BD%D1%8C%203-min.jpeg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806925_%D0%A7%D0%B0%D0%B1%D0%B0%D0%BD%D1%8C%204-min.jpeg",
                availability: "in stock",
                TastingNotes: "",
                aboutProduct: "",
                SteepingInstructions: "",
                Ingredients: "",
            },
            {
                id: 51,
                title: "Tweezers tea #1",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069c7_tweezers-tea-1-new-1-min.jpeg",
                price: 5,
                productArrival: true,
                amount: 1,
                category: 7,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068ed_%D0%9F%D0%B8%D0%BD%D1%86%D0%B5%D1%82%20%D1%81%20%D0%BE%D0%B1%D0%BC%D0%BE%D1%82%D0%BA%D0%BE%D0%B8%CC%86%20-min.jpeg",
                minImg2: "",
                minImg3: "",
                availability: "in stock",
                TastingNotes: "",
                aboutProduct: "",
                SteepingInstructions: "",
                Ingredients: "",
            },
        ],
    };

    return <></>;
};

export default Context;
