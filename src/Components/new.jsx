import React from "react";

const Context = () => {
    const productsData = {
        categories: [
            {
                id: 1,
                categoryName: "Premium tea",
            },
            {
                id: 2,
                categoryName: "sets",
            },
            {
                id: 3,
                categoryName: "top sales",
            },
            {
                id: 4,
                categoryName: "New Arrivals",
            },
            {
                id: 5,
                categoryName: "Teaware",
            },
            {
                id: 6,
                categoryName: "Accessories",
            },
        ],
        subCategories: [
            { id: 1, SubTitle: "Oolong tea" },
            { id: 2, SubTitle: "Red tea" },
            { id: 3, SubTitle: "Green tea" },
            { id: 4, SubTitle: "White tea" },
            { id: 5, SubTitle: "Black tea" },
        ],
        flows: [
            {
                id: 1,
                flowTitle: "Relax flow",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806a02_relax%20fl-min.jpg",
                desc: "Teas that help you to find your inner calm and unwind",
            },
            {
                id: 2,
                flowTitle: "Life flow",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806a03_life%20fl-min.jpg",
                desc: "Designed to promote wellness and balance in your daily life",
            },
            {
                id: 3,
                flowTitle: "Awareness flow",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806a05_awareness%20fl-min-1.jpg",
                desc: "Teas that will help you slow down for a moment and reconnect with yourself",
            },
            {
                id: 4,
                flowTitle: "Energy flow",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806a04_shu-2.jpg",
                desc: "Perfect for those who looking for a natural boost of energy",
            },
        ],
        products: [
            {
                id: 1,
                title: "RED TEA #10",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069f7_red-10-min.jpg",
                price: 38,
                amount: 1,
                flow: null,
                subCategory: 2,
                category: 4,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068dd_%D0%95%20%D0%A8%D0%B5%D0%BD%20%D0%A5%D1%83%D0%BD%20%D0%A7%D0%B0%20%D1%81%20%D0%B4%D0%B8%D0%BA%D0%B8%D1%85%20%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8C%D0%B5%D0%B2%2C%20%D0%B2%D0%B5%D1%81%D0%BD%D0%B0%202022%20%D0%B3-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068d1_%D0%95%20%D0%A8%D0%B5%D0%BD%20%D0%A5%D1%83%D0%BD%20%D0%A7%D0%B0%20%D1%81%20%D0%B4%D0%B8%D0%BA%D0%B8%D1%85%20%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8C%D0%B5%D0%B2%2C%20%D0%B2%D0%B5%D1%81%D0%BD%D0%B0%202022%20%D0%B3(2)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068e5_%D0%95%20%D0%A8%D0%B5%D0%BD%20%D0%A5%D1%83%D0%BD%20%D0%A7%D0%B0%20%D1%81%20%D0%B4%D0%B8%D0%BA%D0%B8%D1%85%20%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8C%D0%B5%D0%B2%2C%20%D0%B2%D0%B5%D1%81%D0%BD%D0%B0%202022%20%D0%B3(3)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    'refined, bright, sweet, with fruit and berry sourness, "festive". Impact: powerful, warming intoxicating, meditative.',
                aboutProduct: `<p>Red tea from wild tea trees from the mountainous region of Ulyanshan. The first spring training camp.</p>
                <p>A special type of wild tea tree defines a unique aromatic and flavor palette. The tea is completely different from the classic Yunnan reds. It has the potential to change over time — it will gain softness and depth of taste.</p>
                <p>Aroma: heady, fragrant, with hints of wild berries, flowers, and tropical fruits (passion fruit).</p><p>Taste: refined, bright, sweet, with fruit and berry sourness, 'festive'.</p> <p>Effects: powerful, warming, intoxicating, meditative.</p>
                <p>Collection: Spring 2022, Ulyanshan Mountains, Pu'er County, prov. Yunnan, China.</p>`,
                SteepingInstructions: `<p>Traditional Preparation</p>
                <p>Add 7-10 grams to a Gaiwan or Gongfu Teapot (150ml-200ml).</p>
                <p>Use 212°F boiling water.</p> <p>Briefly rinse the leaves. Decant and discard this infusion.</p> <p>Infuse the first brew for 5 seconds.</p> 
                <p>Infuse 2nd and subsequent brews for 5-15 seconds.</p>
                <p>Repeat several times until the flavor and aroma of the tea dissipates. As the brewing session ensues, increase infusion time to coax out the body and strength of the final infusions.</p>`,
                flavor: "Flavor: refined, bright, sweet",
                Ingredients: "Organic red tea",
            },
            {
                id: 2,
                title: "GINSENG OOLONG",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069f5_ginseng-1200-min.jpg",
                price: 14,
                amount: 1,
                flow: 4,
                subCategory: 1,
                category: [3, 7],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806876_%D0%96%D0%B5%D0%BD%D1%8C%D1%88%D0%B5%D0%BD%D1%8C%20%D0%A3%D0%BB%D1%83%D0%BD%2C%20%D0%BF%D1%80%D0%B5%D0%BC%D0%B8%D1%83%D0%BC%2C%20%D0%9A%D0%B8%D1%82%D0%B0%D0%B8%CC%86%2C%202022%20%D0%B3-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80678d_%D0%96%D0%B5%D0%BD%D1%8C%D1%88%D0%B5%D0%BD%D1%8C%20%D0%A3%D0%BB%D1%83%D0%BD%2C%20%D0%BF%D1%80%D0%B5%D0%BC%D0%B8%D1%83%D0%BC%2C%20%D0%9A%D0%B8%D1%82%D0%B0%D0%B8%CC%86%2C%202022%20%D0%B3(2)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068aa_%D0%96%D0%B5%D0%BD%D1%8C%D1%88%D0%B5%D0%BD%D1%8C%20%D0%A3%D0%BB%D1%83%D0%BD%2C%20%D0%BF%D1%80%D0%B5%D0%BC%D0%B8%D1%83%D0%BC%2C%20%D0%9A%D0%B8%D1%82%D0%B0%D0%B8%CC%86%2C%202022%20%D0%B3(3)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "refreshing, floral. Ginseng and licorice give the drink a pleasant sweet-tart taste and a long sweet aftertaste. Impact: refreshing, noticeably toning effect.",
                aboutProduct: `<p>Oolong from Fujian province in southern China. As a basis, the creators took high-quality tea of the Teguanyin variety with a floral, delicate taste and bright aroma. Crushed ginseng and licorice roots were added to it. The tea has acquired a rich sweet aroma and a bright tonic effect.</p>
                    <p>Aroma: richly sweet, and fruity.</p>
                    <p>Taste: refreshing, floral. Ginseng and licorice give the drink a pleasant sweet-tart taste and a long sweet aftertaste.</p>
                    <p>Effect: refreshing, noticeably toning effect.</p>`,
                SteepingInstructions: `<p>Tea Preparation</p>
                    <p>Add 6 grams to a Teapot (300 ml). </p>
                    <p>Use 212°F boiling water.</p>
                    <p>Infuse the brew for 2-3 minutes.</p>`,
                flavor: "Flavor: refreshing, floral",
                Ingredients: "Organic oolong tea",
                TopSale: true,
            },
            {
                id: 3,
                title: "SHU PU-ERH #10",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806697_%D0%94%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B8%CC%86%D1%82%D0%B0-min.jpg",
                price: 27,
                amount: 1,
                flow: 4,
                subCategory: 5,
                category: [1, 7],
                minImg1:
                    " https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806751_%D0%9C%D1%8D%D0%BD%D0%BA%D1%83%20%D0%93%D1%83%20%D0%A8%D1%83%20%C2%AB%D0%94%D1%80%D0%B0%D0%BA%D0%BE%D0%BD%20%D0%B2%20%D0%91%D0%B0%D0%BC%D0%B1%D1%83%D0%BA%D0%B5%C2%BB%2C%202021%20%D0%B3(2)-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8066f5_%D0%9C%D1%8D%D0%BD%D0%BA%D1%83%20%D0%93%D1%83%20%D0%A8%D1%83%20%C2%AB%D0%94%D1%80%D0%B0%D0%BA%D0%BE%D0%BD%20%D0%B2%20%D0%91%D0%B0%D0%BC%D0%B1%D1%83%D0%BA%D0%B5%C2%BB%2C%202021%20%D0%B3(3)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806753_%D0%9C%D1%8D%D0%BD%D0%BA%D1%83%20%D0%93%D1%83%20%D0%A8%D1%83%20%C2%AB%D0%94%D1%80%D0%B0%D0%BA%D0%BE%D0%BD%20%D0%B2%20%D0%91%D0%B0%D0%BC%D0%B1%D1%83%D0%BA%D0%B5%C2%BB%2C%202021%20%D0%B3(4)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "thick and soft with caramel-fruity shades and pleasant woody. Impact: pronounced, strong, maintains the overall tone, givesstrength.",
                aboutProduct: `<p>Shu Pu-erh from old tea trees from the Manku region. Alpine tea garden, mono-sort raw materials. The age of the trees is from 150 to 250 years. The height of growth is 1800 m.</p>
                    <p>
                        The tea is made to order in the Menghai region by an experienced technologist using a special technology of low-run fermentation in baskets. This technology allows you to preserve as much as possible in the finished tea the full depth of taste and aroma of the original first-class raw materials.
                    </p>
                    <p>
                        After the initial fermentation, the tea was refined in the bamboo trunk.
                    </p>
                    <p>Pressing tea into a bamboo trunk is a traditional technology of the small nationalities of Yunnan province. Such tea is convenient to transport, can be stored compactly, and the taste acquires a unique profile. It is characteristic only of bamboo teas. With the help of a wooden stick, tea leaves are carefully "stuffed" into the bamboo trunk so as not to damage the raw materials. Then this blank is slowly heated over an open fire. Charcoal is used exclusively so that the tea does not acquire the smell of smoking. The production begins at the end of autumn when the humidity of the bamboo stem is optimal — the quality of the future tea depends on it. If everything is done correctly, the tea will be soaked in bamboo juice and acquire a fresh aroma, and a persistent aftertaste.</p>
                    <p>
                        Due to the initial quality of raw materials and processing technology, it has excellent potential for further storage and aging.
                    </p>
                    <p>Aroma: delicate and light with hints of apricots, chocolate, and fried seeds.</p>
                    <p>
                        Taste: thick and soft with caramel-fruity shades and pleasant woody.
                    </p>
                    <p>Impact: pronounced, strong, maintains the overall tone, gives strength.</p>
                    <p>Production: Assembly 2020, Mengku Region, Lincang County, Press 2021, Menghai Region, Xishuangbanna County, Yunnan Province, China.
                    </p>`,
                SteepingInstructions: `<p>Traditional Preparation</p>
                    <p>
                        Add 7-10 grams to a Gaiwan or Gongfu Teapot (150ml-200ml). 
                    </p>
                    <p>Use 212°F boiling water.</p>
                    <p>
                        Briefly rinse the leaves. Decant and discard this infusion.
                    </p>
                    <p>Infuse the first brew for 10 seconds.</p>
                    <p>Infuse 2nd and subsequent brews for 10-30 seconds.</p>
                    <p>
                        Repeat several times until the flavor and aroma of the tea dissipates. As the brewing session ensues, increase infusion time to coax out the body and strength of the final infusions.
                    </p>`,
                flavor: "Flavor: caramel, fruity, woody",
                Ingredients: "Organic Shu Pu-erh",
            },
            {
                id: 4,
                title: "SHU PU-ERH #14",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069b5_shu-14-min.jpg",
                price: 14,
                amount: 1,
                flow: 4,
                subCategory: 5,
                category: [3, 7],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80672e_%D0%AE%D0%BD%20%D0%A7%D0%B6%D0%B5%D0%BD%D1%8C%20%D0%A7%D0%B5%CC%88%D1%80%D0%BD%D1%8B%D0%B8%CC%86%20%D0%96%D0%B5%D0%BC%D1%87%D1%83%D0%B3%2C%202018%20%D0%B3(2)-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806829_%D0%AE%D0%BD%20%D0%A7%D0%B6%D0%B5%D0%BD%D1%8C%20%D0%A7%D0%B5%CC%88%D1%80%D0%BD%D1%8B%D0%B8%CC%86%20%D0%96%D0%B5%D0%BC%D1%87%D1%83%D0%B3%2C%202018%20%D0%B3(3)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806775_%D0%AE%D0%BD%20%D0%A7%D0%B6%D0%B5%D0%BD%D1%8C%20%D0%A7%D0%B5%CC%88%D1%80%D0%BD%D1%8B%D0%B8%CC%86%20%D0%96%D0%B5%D0%BC%D1%87%D1%83%D0%B3%2C%202018%20%D0%B3(4)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "berry with nutty chocolate. Impact: gently and permanently invigorates and tones, a wonderful energizer. Helps on the road. An interesting substitute for coffee is that coffee cheerfulness lasts longer and ends smoothly, unlike coffee, when strength disappears suddenly.",
                aboutProduct: `<p>
                        Pressed tea heads (lao cha tou) from Xing Wen factory,
                        Yun Zhen trademark. Lao cha tou, are formed naturally as
                        a result of sticking and clumping of a tea leaf during
                        wet stacking "in DUI". Most often they are found in
                        loose form, but in this case, they are pressed into a
                        brick, which has a medium-soft pressing.
                    </p>
                    <p>
                        Clusters of whitish dots may occur on the surface of tea
                        heads - this is a feature of Lao cha tou production,
                        which is dried differently than loose raw materials.
                        Therefore, such post-fermentation traces may remain on
                        them, which disappear over time.
                    </p>
                    <p>
                        Aroma: thick, sweetly woody, with notes of bitter
                        chocolate and berries.
                    </p>
                    <p>
                        Taste: soft, balanced, rich, and thick with peasant
                        bitterness, berry, and nutty chocolate shades.
                    </p>
                    <p>
                        Impact: gently and permanently invigorates and tones, a
                        wonderful energizer. Helps on the road. An interesting
                        substitute for coffee is; coffee cheerfulness lasts
                        longer and ends smoothly, unlike coffee, when strength
                        disappears suddenly.
                    </p>
                    <p>
                        Production: 2018, Xin Wen Factory (Kit. ), Yongde
                        County, Lincang County, Yunnan Province, China.
                    </p>`,
                SteepingInstructions: `<p>Traditional Preparation</p>
                    <p>
                        Add 7-10 grams to a Gaiwan or Gongfu Teapot
                        (150ml-200ml).
                    </p>
                    <p>Use 212°F boiling water.</p>
                    <p>
                        Briefly rinse the leaves. Decant and discard this
                        infusion.
                    </p>
                    <p>Infuse the first brew for 10 seconds.</p>
                    <p>Infuse 2nd and subsequent brews for 10-30 seconds.</p>
                    <p>
                        Repeat several times until the flavor and aroma of the
                        tea dissipates. As the brewing session ensues, increase
                        infusion time to coax out the body and strength of the
                        final infusions.
                    </p>`,
                flavor: "Flavor: berry with nutty chocolate",
                Ingredients: "Organic Shu Pu-erh",
            },
            {
                id: 5,
                title: "RED TEA #4",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806a1c_red-4-1-min.jpg",
                price: 12,
                amount: 1,
                flow: 3,
                subCategory: 1,
                category: [3, 7],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068d7_%D0%A1%D1%8F%D0%BE%20%D0%A7%D0%B6%D1%83%D0%BD%20%D0%A5%D1%83%D0%B0%20%D0%A1%D1%8F%D0%BD%20%C2%AB%D0%A6%D0%B2%D0%B5%D1%82%D0%BE%D1%87%D0%BD%D1%8B%D0%B8%CC%86%20%D0%B0%D1%80%D0%BE%D0%BC%D0%B0%D1%82%C2%BB%2C%202021%20%D0%B3-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068bf_%D0%A1%D1%8F%D0%BE%20%D0%A7%D0%B6%D1%83%D0%BD%20%D0%A5%D1%83%D0%B0%20%D0%A1%D1%8F%D0%BD%20%C2%AB%D0%A6%D0%B2%D0%B5%D1%82%D0%BE%D1%87%D0%BD%D1%8B%D0%B8%CC%86%20%D0%B0%D1%80%D0%BE%D0%BC%D0%B0%D1%82%C2%BB%2C%202021%20%D0%B3(2)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068ce_%D0%A1%D1%8F%D0%BE%20%D0%A7%D0%B6%D1%83%D0%BD%20%D0%A5%D1%83%D0%B0%20%D0%A1%D1%8F%D0%BD%20%C2%AB%D0%A6%D0%B2%D0%B5%D1%82%D0%BE%D1%87%D0%BD%D1%8B%D0%B8%CC%86%20%D0%B0%D1%80%D0%BE%D0%BC%D0%B0%D1%82%C2%BB%2C%202021%20%D0%B3(3)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "rich, clear, with pronounced sweetness, rich, sparkling, with a slight tart. Pleasant enveloping aftertaste. Impact: warming, toning.",
                aboutProduct: `<p>
                        "Small View with Floral Aroma" (kit. ,) is a Chinese red
                        tea from the vicinity of the Wuishan Mountains in the
                        north of Fujian Province.
                    </p>
                    <p>
                        During the manufacturing process, xiaozhuns undergo an
                        operation called "go hong go" or "passing the red
                        cauldron". This short but intense warm-up is 2-3 minutes
                        at 200 degrees. Thanks to him, xiaozhuns have a
                        characteristic leaf color and a "fiery" taste. The words
                        Hua Xiang — "floral fragrance" — indicate that tea has a
                        pronounced floral aroma due to the class of raw
                        materials and the presence of golden tips.
                    </p>
                    <p>
                        Aroma: bright, with warm, floral-honey and bread shades.
                    </p>
                    <p>
                        Taste: rich, clear, with pronounced sweetness, rich,
                        sparkling, with a slight tart. Pleasant enveloping
                        aftertaste.
                    </p>
                    <p>Impact: warming, toning.</p>
                    <p>
                        Gathering: Spring 2022, Wuishan Mountains, Fujian
                        Province, China.
                    </p>`,
                SteepingInstructions: `<p>Traditional Preparation</p>
                    <p>
                        Add 7-10 grams to a Gaiwan or Gongfu Teapot
                        (150ml-200ml).
                    </p>
                    <p>Use 185°F water.</p>
                    <p>
                        Briefly rinse the leaves. Decant and discard this
                        infusion.
                    </p>
                    <p>Infuse the first brew for 10 seconds.</p>
                    <p>Infuse 2nd and subsequent brews for 10-30 seconds.</p>
                    <p>
                        Repeat several times until the flavor and aroma of the
                        tea dissipates. As the brewing session ensues, increase
                        infusion time to coax out the body and strength of the
                        final infusions.
                    </p>`,
                flavor: "Flavor: rich, with pronounced sweet, butter",
                Ingredients: "Organic red tea",
                TopSale: true,
            },
            {
                id: 6,
                title: "BLACK TEA #3",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069b2_black-3-min.jpg",
                price: 12,
                amount: 1,
                flow: null,
                subCategory: 5,
                category: 7,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068ef_%D0%9B%D1%8E%D0%B0%D0%BD%D1%8C%20%D0%A5%D1%8D%D0%B8%CC%86%20%D0%A7%D0%B0%20%D0%B2%20%D0%BA%D0%BE%D1%80%D0%B7%D0%B8%D0%BD%D0%BA%D0%B5%2C%202021%20%D0%B3(3)-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068e1_%D0%9B%D1%8E%D0%B0%D0%BD%D1%8C%20%D0%A5%D1%8D%D0%B8%CC%86%20%D0%A7%D0%B0%20%D0%B2%20%D0%BA%D0%BE%D1%80%D0%B7%D0%B8%D0%BD%D0%BA%D0%B5%2C%202021%20%D0%B3(2)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "spicy, sweet, with a pleasant bitterness. It looks like both Wishan oolong and Shu Pu'er. Impact: gently tones, and smoothes.",
                aboutProduct: `<p>
                        Black fermented tea Hei Cha from Anhui province. Packed
                        in a traditional bamboo basket of 500 grams.
                    </p>
                    <p>
                        Aroma: sweet, woody-spicy, chocolate, with notes of dead
                        leaves.
                    </p>
                    <p>
                        Taste: spicy, sweet, with a pleasant bitterness. It
                        looks like both Wishan oolong and Shu Pu'er.
                    </p>
                    <p>Effect: gently tones, and smoothes.</p>`,
                SteepingInstructions: `<p>Traditional Preparation</p>
                    <p>
                        Add 10-12 grams to a Gaiwan or Gongfu Teapot
                        (150ml-200ml).
                    </p>
                    <p>Use 212°F boiling water.</p>
                    <p>
                        Briefly rinse the leaves. Decant and discard this
                        infusion.
                    </p>
                    <p>Infuse the first brew for 10 seconds.</p>
                    <p>Infuse 2nd and subsequent brews for 10-30 seconds.</p>
                    <p>
                        Repeat several times until the flavor and aroma of the
                        tea dissipates. As the brewing session ensues, increase
                        infusion time to coax out the body and strength of the
                        final infusions.
                    </p>`,
                flavor: "Flavor: spicy, sweet, pleasant bitterness",
                Ingredients: "Organic black tea",
            },
            {
                id: 7,
                title: "SHU PU-ERH #27",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069c0_shu-27-1-min.jpg",
                price: 26,
                amount: 1,
                flow: null,
                subCategory: 5,
                category: [4, 7],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806987_%D0%9C%D1%8D%D0%BD%D1%85%D0%B0%D0%B8%CC%86%20%D0%92%D1%8D%D0%B8%CC%86%20%C2%AB%D0%A7%D0%B8%D1%81%D1%82%D1%8B%D0%B8%CC%86%20%D0%92%D0%BA%D1%83%D1%81%20%D0%9C%D1%8D%D0%BD%D1%85%D0%B0%D1%8F%C2%BB%2C%202021%20%D0%B3(2)-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806992_%D0%9C%D1%8D%D0%BD%D1%85%D0%B0%D0%B8%CC%86%20%D0%92%D1%8D%D0%B8%CC%86%20%C2%AB%D0%A7%D0%B8%D1%81%D1%82%D1%8B%D0%B8%CC%86%20%D0%92%D0%BA%D1%83%D1%81%20%D0%9C%D1%8D%D0%BD%D1%85%D0%B0%D1%8F%C2%BB%2C%202021%20%D0%B3(3)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80698a_%D0%9C%D1%8D%D0%BD%D1%85%D0%B0%D0%B8%CC%86%20%D0%92%D1%8D%D0%B8%CC%86%20%C2%AB%D0%A7%D0%B8%D1%81%D1%82%D1%8B%D0%B8%CC%86%20%D0%92%D0%BA%D1%83%D1%81%20%D0%9C%D1%8D%D0%BD%D1%85%D0%B0%D1%8F%C2%BB%2C%202021%20%D0%B3(4)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "dense, rich, pastry-like, woody-creamy, soft, and juicy. Impact: Invigorating, warming, and inspiring.",
                aboutProduct: `<p>
                        An invigorating Shu Pu-erh with classic flavor from the
                        Menghai region.
                    </p>
                    <p>
                        Manufactured and pressed exclusively for TEFLOW. The
                        intention was to highlight Menghai Pu-erh's flavor
                        characteristics that are highly prized: pastry-like
                        nuances, creaminess, and sweetness. Through a
                        proprietary blend of leaves sourced from several tea
                        gardens with large tea trees and the expertise of our
                        skilled tea masters, we achieved the quintessential
                        Menghai flavor, pushed to its maximum. Thanks to a
                        significant proportion of tea buds in the blend, we also
                        achieved a strong and invigorating effect.
                    </p>
                    <p>Aroma: Rich, sweet, woody, and enveloping.</p>
                    <p>
                        Taste: Dense, rich, pastry-like, woody-creamy, soft, and
                        juicy.
                    </p>
                    <p>Effect: Invigorating, warming, and inspiring.</p>
                    <p>
                        Production: Fermentation in 2019, pressing in 2021,
                        Menghai County, Sishuanbanna District, Yunnan Province,
                        China.
                    </p>`,
                SteepingInstructions: `<p>Traditional Preparation</p>
                    <p>
                        Add 7-10 grams to a Gaiwan or Gongfu Teapot
                        (150ml-200ml).
                    </p>
                    <p>Use 212°F boiling water.</p>
                    <p>
                        Briefly rinse the leaves. Decant and discard this
                        infusion.
                    </p>
                    <p>Infuse the first brew for 10 seconds.</p>
                    <p>Infuse 2nd and subsequent brews for 10-30 seconds.</p>
                    <p>
                        Repeat several times until the flavor and aroma of the
                        tea dissipates. As the brewing session ensues, increase
                        infusion time to coax out the body and strength of the
                        final infusions.
                    </p>`,
                Ingredients: "Flavor: woody-creamy",
                flavor: "Organic Shu Pu-erh",
            },
            {
                id: 8,
                title: "SHENG PU-ERH #3",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80671c_%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B8%CC%86%D1%82%D0%B0-min.jpg",
                price: 21,
                amount: 1,
                flow: 3,
                subCategory: 3,
                category: [1, 7],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806784_%20%D0%98%20%D0%A3%20%2522%D0%97%D0%B5%D0%BB%D0%B5%CC%88%D0%BD%D0%BE%D0%B5%20%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%2522%2C%202008%20%D0%B3(4)-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806756_%20%D0%98%20%D0%A3%20%2522%D0%97%D0%B5%D0%BB%D0%B5%CC%88%D0%BD%D0%BE%D0%B5%20%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%2522%2C%202008%20%D0%B3(3)-min.jpg",
                minImg3: null,
                availability: "in stock",
                TastingNotes:
                    "soft, clean, rounded. The first cups contain honey, dried fruits and fresh apples. Impact: meditative, intoxicating. Immerses you in the palette of tastes with your head.",
                aboutProduct: `<p>
                        Aged, mature Sheng from ancient trees from the
                        mountainous region and Wu with a classic taste profile
                        for this area. 14 years of storage in a warehouse, with
                        an ideal, controlled moisture balance, have largely
                        determined the character of this tea.
                    </p>
                    <p>
                        Aroma: honey-dried fruit, tobacco, camphor,
                        multi-faceted.
                    </p>
                    <p>
                        Taste: soft, clean, rounded. The first cups contain
                        honey, dried fruits, and fresh apples. They change to
                        nutty, camphor, and even tobacco notes as the tea
                        continues to unfold. No sharpness — just zen.
                    </p>
                    <p>
                        Effect: meditative, intoxicating. Immerses you in the
                        palette of tastes with your head.
                    </p>
                    <p>
                        Production: 2008, Mountains and Wu, Mengla County,
                        Xishuangbanna County, prov. Yunnan, China.
                    </p>`,
                SteepingInstructions: `<p>Traditional tea preparation</p>
                    <p>Chip the cake carefully with a pick or Pu’er dagger.</p>
                    <p>
                        Add 7g - 8g to a Gaiwan or Gongfu teapot (150ml-200ml).
                    </p>
                    <p>Use 212°F boiling water.</p>
                    <p>
                        Rinse leaves for 5 - 10 seconds. Decant and discard this
                        rinse infusion.
                    </p>
                    <p>
                        Proceed to infuse the tea using boiling water. Enjoy
                        each infusion individually and savor each round's
                        flavors.
                    </p>
                    <p>
                        Decant the 1st, 2nd, 3rd, and 4th infusions after 10 -
                        30 seconds. The tea infuses fast and strengthens at the
                        beginning of the session. Brew the tea several times
                        until the taste weakens.
                    </p>
                    <p>
                        Increase the infusion time to your taste preference
                        after becoming familiar with the tea. Bitterness,
                        strength, power, and the presence of Qi come out in
                        later brews with increased infusion time.
                    </p>`,
                flavor: "Flavor: honey, dried fruits, fresh apples",
                Ingredients: "Organic Sheng Pu-erh",
                TopSale: true,
            },
            {
                id: 9,
                title: "RED TEA #3",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069af_red-3-min.jpg",
                price: 21,
                amount: 1,
                flow: 3,
                subCategory: 2,
                category: 7,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068c2_%D0%A6%D0%B7%D0%B8%D0%BD%D1%8C%20%D0%A6%D0%B7%D1%8E%D0%BD%D1%8C%20%D0%9C%D1%8D%D0%B8%CC%86%20%C2%AB%D0%97%D0%BE%D0%BB%D0%BE%D1%82%D1%8B%D0%B5%20%D0%91%D1%80%D0%BE%D0%B2%D0%B8%C2%BB%2C%202022%20%D0%B3-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068c3_%D0%A6%D0%B7%D0%B8%D0%BD%D1%8C%20%D0%A6%D0%B7%D1%8E%D0%BD%D1%8C%20%D0%9C%D1%8D%D0%B8%CC%86%20%C2%AB%D0%97%D0%BE%D0%BB%D0%BE%D1%82%D1%8B%D0%B5%20%D0%91%D1%80%D0%BE%D0%B2%D0%B8%C2%BB%2C%202022%20%D0%B3(2)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068c7_%D0%A6%D0%B7%D0%B8%D0%BD%D1%8C%20%D0%A6%D0%B7%D1%8E%D0%BD%D1%8C%20%D0%9C%D1%8D%D0%B8%CC%86%20%C2%AB%D0%97%D0%BE%D0%BB%D0%BE%D1%82%D1%8B%D0%B5%20%D0%91%D1%80%D0%BE%D0%B2%D0%B8%C2%BB%2C%202022%20%D0%B3(3)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "sweet, pure, rich jam, caramel. A long, pleasant aftertaste with a sweet and sour background (sweet and sour apples). Impact: the classic warming effect of red tea, but at the same time relaxing andsoothing.",
                aboutProduct: `<p>
                        A popular Chinese red tea from Yunnan Province, on the
                        territory of which the state of Dian was located in
                        ancient times, after which the tea was named Dian Hong
                        (滇红, Red Tea from Dian). We called it Honey for the
                        corresponding shades in taste.
                    </p>
                    <p>
                        Golden Eyebrows is a famous Chinese red tea from the
                        north of Fujian Province. A fairly young, but deservedly
                        popular variety of red tea, the history of which began
                        in the mid-2000s. Fujian technologists took as a basis
                        the traditional scheme of production of leaf xiaohuns
                        but adapted it for processing the most tender and young
                        spring buds.
                    </p>
                    <p>
                        Fragrance: complex, rich, and delicate. Notes of bread
                        and chocolate are intertwined with the smell of
                        strawberries.
                    </p>
                    <p>
                        Taste: sweet, pure, rich jam, caramel. A long, pleasant
                        aftertaste with a sweet and sour background (sweet and
                        sour apples).
                    </p>
                    <p>
                        Impact: the classic warming effect of red tea, but at
                        the same time relaxing and soothing.
                    </p>
                    <p>
                        Gathering: Spring 2022, Wuishan Mountains, Fujian
                        Province, China.
                    </p>`,
                SteepingInstructions: `<p>Traditional Preparation</p>
                    <p>
                        Add 7-10 grams to a Gaiwan or Gongfu Teapot
                        (150ml-200ml).
                    </p>
                    <p>Use 185°F water.</p>
                    <p>
                        Briefly rinse the leaves. Decant and discard this
                        infusion.
                    </p>
                    <p>Infuse the first brew for 10 seconds.</p>
                    <p>Infuse 2nd and subsequent brews for 10-30 seconds.</p>
                    <p>
                        Repeat several times until the flavor and aroma of the
                        tea dissipates. As the brewing session ensues, increase
                        infusion time to coax out the body and strength of the
                        final infusions.
                    </p>`,
                flavor: "Flavor: sweet, clean, rich-jam, caramel",
                Ingredients: "Organic red tea",
            },
            {
                id: 10,
                title: "RED TEA #6",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069ef_red-1200-min.jpg",
                price: 27,
                amount: 1,
                flow: 4,
                subCategory: 2,
                category: [1, 7],
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
                flavor: "Flavor: juicy, sweet and strong",
                Ingredients: "Organic red tea",
            },
            {
                id: 11,
                title: "WHITE TEA #1",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069bd_white-min.jpg",
                price: 14,
                amount: 1,
                flow: 1,
                subCategory: 4,
                category: 7,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068d4_%D0%91%D0%B0%D0%B8%CC%86%20%D0%A5%D0%B0%D0%BE%20%D0%98%D0%BD%D1%8C%20%D0%A7%D0%B6%D1%8D%D0%BD%D1%8C%2C%20%D0%AE%D0%BD%D1%8C%D0%BD%D0%B0%D0%BD%D1%8C%2C%202022%20%D0%B3-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068d9_%D0%91%D0%B0%D0%B8%CC%86%20%D0%A5%D0%B0%D0%BE%20%D0%98%D0%BD%D1%8C%20%D0%A7%D0%B6%D1%8D%D0%BD%D1%8C%2C%20%D0%AE%D0%BD%D1%8C%D0%BD%D0%B0%D0%BD%D1%8C%2C%202022%20%D0%B3(2)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068d8_%D0%91%D0%B0%D0%B8%CC%86%20%D0%A5%D0%B0%D0%BE%20%D0%98%D0%BD%D1%8C%20%D0%A7%D0%B6%D1%8D%D0%BD%D1%8C%2C%20%D0%AE%D0%BD%D1%8C%D0%BD%D0%B0%D0%BD%D1%8C%2C%202022%20%D0%B3(3)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "soft and silky. The aftertaste is pleasant, long-lasting. Impact: relaxing and harmonizing.",
                aboutProduct: `<p>
                        Chinese white tea from Yunnan province in the style of
                        the famous Fudin tea Bai Hao Yin Zhen.
                    </p>
                    <p>
                        The name translates as "Silver Needles with a White
                        Pile" (Kit. 白)) and indicates the abundance of tea
                        buds. Tender, unopened buds are covered with silver
                        fluff and have the shape of long, slightly curved
                        needles. Because of the kidney raw materials, the taste
                        of Silver Needles is interesting and rich.
                    </p>
                    <p>
                        For the production of our Needles, raw materials were
                        used, which were collected in early spring in the
                        highlands. The spring first harvest, especially in
                        Yunnan, where there is a pronounced seasonality of the
                        harvest, is valued more than others.
                    </p>
                    <p>
                        Aroma: sweet and light with hints of spicy herbs, dried
                        plums, and honey.
                    </p>
                    <p>
                        Taste: soft and silky. The aftertaste is pleasant and
                        long-lasting.
                    </p>
                    <p>Impact: relaxing and harmonizing.</p>`,
                SteepingInstructions: `<p>Traditional Preparation</p>
                    <p>
                        Add 7-10 grams to a Gaiwan or Gongfu Teapot
                        (150ml-200ml).
                    </p>
                    <p>Use 180° water.</p>
                    <p>
                        Briefly rinse the leaves. Decant and discard this
                        infusion.
                    </p>
                    <p>Infuse the first brew for 3 seconds.</p>
                    <p>Infuse 2nd and subsequent brews for 5-15 seconds.</p>
                    <p>
                        Repeat several times until the flavor and aroma of the
                        tea dissipates. As the brewing session ensues, increase
                        infusion time to coax out the body and strength of the
                        final infusions.
                    </p>`,
                flavor: "Flavor: soft and silky",
                Ingredients: "Organic white tea",
            },
            {
                id: 12,
                title: "GABA OOLONG #1",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069f4_gaba-oolong1-1200-min.jpg",
                price: 35,
                amount: 1,
                flow: 2,
                subCategory: 1,
                category: [3, 7],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068af_%D0%A3%D0%BB%D1%83%D0%BD%20%D0%93%D0%B0%D0%B1%D0%B0%20%D0%9D%D0%B0%D0%BD%D1%8C%D1%82%D0%BE%D1%83-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068a7_%D0%A3%D0%BB%D1%83%D0%BD%20%D0%93%D0%B0%D0%B1%D0%B0%20%D0%9D%D0%B0%D0%BD%D1%8C%D1%82%D0%BE%D1%83(2)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068ac_%D0%A3%D0%BB%D1%83%D0%BD%20%D0%93%D0%B0%D0%B1%D0%B0%20%D0%9D%D0%B0%D0%BD%D1%8C%D1%82%D0%BE%D1%83(3)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "soft, thick, warm with notes of baked fruits. Easy to drink, bright, but balanced bouquet. Impact: relaxing, meditative, but at the same time gentlycollecting and concentrating.",
                aboutProduct: `<p>
                        Taiwanese Gaba oolong of a moderate degree of roasting,
                        made from a tea leaf from a bush of the variety Si Tzu
                        Chun. It is grown in the tea region of Nantou at an
                        altitude of about 800 meters.
                    </p>
                    <p>
                        At the end of the 80s, the Japanese came up with a
                        technology for processing tea leaves without oxygen
                        access and learned how to make tea with a high content
                        of GABA. Gamma-aminobutyric acid (GABA or English GABA)
                        is responsible for concentration and efficiency,
                        slightly reduces pressure, relaxes, and relieves
                        tension.
                    </p>
                    <p>Aroma: black bread, coffee notes, fruit shades.</p>
                    <p>
                        Taste: soft, thick, and warm with notes of baked fruits.
                        Easy to drink, bright, but balanced bouquet.
                    </p>
                    <p>
                        Impact: relaxing, meditative, but at the same time
                        gently collecting and concentrating.
                    </p>`,
                SteepingInstructions: `<p>
                        Add 8-10 grams to a Gaiwan or Gongfu Teapot
                        (150ml-200ml).
                    </p>
                    <p>Use 212°F boiling water.</p>
                    <p>Don’t rinse this tea.</p>
                    <p>Infuse the first brew for 10 seconds.</p>
                    <p>Infuse 2nd and subsequent brews for 10-30 seconds.</p>
                    <p>
                        Repeat several times until the flavor and aroma of the
                        tea dissipates. As the brewing session ensues, increase
                        infusion time to coax out the body and strength of the
                        final infusions.
                    </p>`,
                flavor: "Flavor: warm with hints of baked fruit",
                Ingredients: "Organic oolong tea",
            },
            {
                id: 13,
                title: "GABA OOLONG #5",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069f1_gaba5-1200-min.jpg",
                price: 57,
                amount: 1,
                flow: 2,
                subCategory: 1,
                category: [1, 7],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068ad_%D0%93%D0%B0%D0%B1%D0%B0%20%D0%90%D0%BB%D0%B8%20%D0%A8%D0%B0%D0%BD%D1%8C%2C%20%D0%BF%D1%80%D0%B5%D0%BC%D0%B8%D1%83%D0%BC-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068a8_%D0%93%D0%B0%D0%B1%D0%B0%20%D0%90%D0%BB%D0%B8%20%D0%A8%D0%B0%D0%BD%D1%8C%2C%20%D0%BF%D1%80%D0%B5%D0%BC%D0%B8%D1%83%D0%BC(2)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068b2_%D0%93%D0%B0%D0%B1%D0%B0%20%D0%90%D0%BB%D0%B8%20%D0%A8%D0%B0%D0%BD%D1%8C%2C%20%D0%BF%D1%80%D0%B5%D0%BC%D0%B8%D1%83%D0%BC(3)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "pleasant, with a slight sourness. Impact: relaxing, meditative.",
                aboutProduct: `<p>
                        Gaba Ali Shan - oolong tea with a high content of GABA - 200 mg per 100 g of tea. Medium-fermented medium-rare oolong, made in the highlands of the Ali Shan farm in Taiwan using a special technology for processing GABA teas.
                    </p>
                    <p>
                    In dry form, it is a dark green dense hemisphere with golden inclusions and a small number of cuttings.
                    </p>
                    <p>
The tea stands out with a tangible profile of the classic oolong Ali Shan in combination with a peculiar, reminiscent of the flower-rowan taste of the classic Gaba tea. The character of the taste is soft, and pleasant, with a slight sourness.
                    </p>
                    <p>
The color of the drink is buckwheat-honey or golden. The aftertaste is long, and refreshing, which indicates the high quality of the tea.
                    </p>
                    <p>
                    The leaf is rich in glutamic acid, which is the basis of GABA. Despite the soothing, relieving excessive excitement, the effect of gamma-aminobutyric acid, a strong alpine raw material gives a tangible surge of energy and a boost of strength. It is not recommended to drink this tea just before going to bed, but in the afternoon or evening after a working day is a great option.
                    </p>`,
                SteepingInstructions: `<p>
                        Add 8-10 grams to a Gaiwan or Gongfu Teapot (150ml-200ml).


                    </p>
                    <p>
                    Use 212°F boiling water.


                    </p>
                    <p>
Don’t rinse this tea.


                    </p>
                    <p>
Infuse the first brew for  10 seconds.


                    </p>
                    <p>
Infuse 2nd and subsequent brews for 10-30  seconds.


                    </p>
                    <p>
Repeat several times until the flavor and aroma of the tea dissipates. As the brewing session ensues, increase infusion time to coax out the body and strength of the final infusions.


                    </p>`,
                flavor: "Flavor: pleasant, with a slight sourness",
                Ingredients: "Organic oolong tea",
            },
            {
                id: 14,
                title: "BLACK TEA #1",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069b1_black-1-min.jpg",
                price: 21,
                amount: 1,
                flow: 2,
                subCategory: 5,
                category: 7,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068da_%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B8%CC%86%D1%82%D0%B02-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068db_%D0%9B%D1%8E%20%D0%91%D0%B0%D0%BE%20%D0%A5%D1%8D%D0%B8%CC%86%20%D0%A7%D0%B0%206166%2C%202020%20%D0%B3(3)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068e6_%D0%9B%D1%8E%20%D0%91%D0%B0%D0%BE%20%D0%A5%D1%8D%D0%B8%CC%86%20%D0%A7%D0%B0%206166%2C%202020%20%D0%B3(4)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "soft, nutty, with fresh notes. Impact: leveling, concentrating. This is tea for attentive work and cheerful morning.",
                aboutProduct: `<p>
                        Black-aged Hei Cha tea from Guangxi in a traditional wicker basket. Produced under the brand Zhong Cha, as well as the famous "Seals". Black tea has its own specifics of raw materials and processing technology, so it turns out to be very diverse in taste and aroma.


                    </p>
                    <p>
                    Aroma: dried fruits, vanilla, light tobacco notes, honey.


                    </p>
                    <p>
Taste: soft, nutty, with fresh notes 


                    </p>
                    <p>
Impact: leveling, concentrating. This is tea for attentive work and a cheerful morning


                    </p>
                    <p>
Production: collection, fermentation, and the beginning of primary aging - 2020, packing and packaging - 2022.


                    </p>
                    `,
                SteepingInstructions: `<p>
                        Traditional Preparation


                    </p>
                    <p>
                    Add 10-12 grams to a Gaiwan or Gongfu Teapot (150ml-200ml). 


                    </p>
                    <p>
Use 212°F boiling water.


                    </p>
                    <p>
Briefly rinse the leaves. Decant and discard this infusion.


                    </p>
                    <p>
Infuse the first brew for 10 seconds.  


                    </p>
                    <p>
Infuse 2nd and subsequent brews for 10-30 seconds. 


                    </p>
                    <p>
                     Repeat several times until the flavor and aroma of the tea dissipates. As the brewing session ensues, increase infusion time to coax out the body and strength of the final infusions.

   
                    </p>`,
                flavor: "Flavor: soft, nutty, with fresh notes",
                Ingredients: "Organic black tea",
            },
            {
                id: 15,
                title: "GABA OOLONG #4",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069f0_gaba4-1200-min.jpg",
                price: 65,
                amount: 1,
                flow: 1,
                subCategory: 1,
                category: [1, 3, 7],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068ae_%D0%93%D0%B0%D0%B1%D0%B0%20%D0%A0%D1%83%D0%B1%D0%B8%D0%BD%20%D0%A2%D0%B5%CC%88%D0%BC%D0%BD%D0%B0%D1%8F-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068a9_%D0%93%D0%B0%D0%B1%D0%B0%20%D0%A0%D1%83%D0%B1%D0%B8%D0%BD%20%D0%A2%D0%B5%CC%88%D0%BC%D0%BD%D0%B0%D1%8F(2)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068ab_%D0%93%D0%B0%D0%B1%D0%B0%20%D0%A0%D1%83%D0%B1%D0%B8%D0%BD%20%D0%A2%D0%B5%CC%88%D0%BC%D0%BD%D0%B0%D1%8F(3)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "deep, bright, warm, spicy, with notes of bread and cocoa beans. The aftertaste has a bitterness of coffee and a pleasant astringency. Impact: meditative, but at the same time collecting and concentrating.",
                aboutProduct: `<p>
                        High-grade Gaba tea. It is made from the Assamese Ruby No. 18 variety - the same variety that is used for the production of the eponymous red tea. This makes not only the taste special but also the effect of this Gaba. Unlike other oolongs made using Gaba technology, Ruby has a powerful, but rather concentrating, collecting effect.


                    </p>
                    <p>
                    At the end of the 80s, the Japanese came up with a technology for processing tea leaves without oxygen access and learned how to make tea with a high content of GABA. Gamma-aminobutyric acid (GABA or English GABA) is responsible for concentration and efficiency, slightly reduces pressure, relaxes, and relieves tension.


                    </p>
                    <p>
The prefix "dark" in the name of this oolong indicates a strong degree of roasting (warming up) - a rich "roasted" flavor. 


                    </p>
                    <p>
Aroma: brown bread crust, tobacco, coffee notes, fruit shades.


                    </p>
                    <p>
Taste: deep, bright, warm, and spicy, with notes of bread and cocoa beans. The aftertaste has the bitterness of coffee and a pleasant astringency.


                    </p>
                    <p>
Impact: meditative, but at the same time collecting and concentrating.


                    </p>
                    `,
                SteepingInstructions: `<p>
                        Add 8-10 grams to a Gaiwan or Gongfu Teapot (150ml-200ml).


                    </p>
                    <p>
                    Use 212°F boiling water.


                    </p>
                    <p>
Don’t rinse this tea.


                    </p>
                    <p>
Infuse the first brew for  10 seconds.


                    </p>
                    <p>
Infuse 2nd and subsequent brews for 10-30  seconds.


                    </p>
                    <p>
Repeat several times until the flavor and aroma of the tea dissipates. As the brewing session ensues, increase infusion time to coax out the body and strength of the final infusions.</p>
                    `,
                flavor: "Flavor: warm, with hints of bread",
                Ingredients: "Organic oolong tea",
            },
            {
                id: 16,
                title: "SHU PU-ERH #9",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069b4_shu-9-min.jpg",
                price: 12,
                amount: 1,
                flow: 4,
                subCategory: 5,
                category: [3, 7],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80664a_%D0%93%D1%83%D0%BD%D1%82%D0%B8%D0%BD%20%D0%AE%D0%B8%CC%86%20%D0%98%D0%BD%D1%8C%2C%202013%20%D0%B3(2)-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80667a_%D0%93%D1%83%D0%BD%D1%82%D0%B8%D0%BD%20%D0%AE%D0%B8%CC%86%20%D0%98%D0%BD%D1%8C%2C%202013%20%D0%B3(1)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806707_%D0%93%D1%83%D0%BD%D1%82%D0%B8%D0%BD%20%D0%AE%D0%B8%CC%86%20%D0%98%D0%BD%D1%8C%2C%202013%20%D0%B3(3)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "balanced, woody-creamy, soft, but at the same time dense and quite expressive. Impact: moderately tones, gives energy, balances.",
                aboutProduct: `<p>
                        Proper storage in a professional warehouse, balance of taste, and absence of extraneous notes.


                    </p>
                    <p>
                    Budget Shu often has disadvantages — rough raw materials, defective notes, and bitterness. There is none of this here. Just a good and very solid shooter.


                    </p>
                    <p>
Aroma: dried fruits, woody notes.


                    </p>
                    <p>
Taste: balanced, woody-creamy, soft, but at the same time dense and quite expressive.


                    </p>
                    <p>
Effect: moderately tones, gives energy, balances.


                    </p>
                    <p>
Production: 2013, Gu Cha Yuan Factory (kit. 古茶源), Menghai County, Xishuangbanna County, Yunnan Province, China.


                    </p>
                    `,
                SteepingInstructions: `<p>
                        Traditional Preparation


                    </p>
                    <p>
                    Add 7-10 grams to a Gaiwan or Gongfu Teapot (150ml-200ml). 


                    </p>
                    <p>
Use 212°F boiling water.


                    </p>
                    <p>
Briefly rinse the leaves. Decant and discard this infusion.


                    </p>
                    <p>
Infuse the first brew for 10 seconds.  


                    </p>
                    <p>
Infuse 2nd and subsequent brews for 10-30 seconds.  


                    </p>
                    <p>
                        Repeat several times until the flavor and aroma of the tea dissipates. As the brewing session ensues, increase infusion time to coax out the body and strength of the final infusions.


                    </p>
                    `,
                flavor: "Flavor: balanced, woody-creamy, soft.",
                Ingredients: "Organic Shu Pu-erh",
            },
            {
                id: 17,
                title: "GREEN TEA #1",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069bc_green-1-min.jpg",
                price: 12,
                amount: 1,
                flow: 2,
                subCategory: 3,
                category: 7,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806787_%D0%97%D0%B5%D0%BB%D0%B5%CC%88%D0%BD%D1%8B%D0%B8%CC%86%20%D1%87%D0%B0%D0%B8%CC%86%20%D0%91%D0%B8%D0%BB%D0%BE%D1%87%D1%83%D0%BD%D1%8C%20%C2%AB%D0%98%D0%B7%D1%83%D0%BC%D1%80%D1%83%D0%B4%D0%BD%D1%8B%D0%B5%20%D0%A1%D0%BF%D0%B8%D1%80%D0%B0%D0%BB%D0%B8%20%D0%92%D0%B5%D1%81%D0%BD%D1%8B%C2%BB%2C%20%D0%AE%D0%BD%D1%8C%D0%BD%D0%B0%D0%BD%D1%8C%2C%202022%20%D0%B3-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806755_%D0%97%D0%B5%D0%BB%D0%B5%CC%88%D0%BD%D1%8B%D0%B8%CC%86%20%D1%87%D0%B0%D0%B8%CC%86%20%D0%91%D0%B8%D0%BB%D0%BE%D1%87%D1%83%D0%BD%D1%8C%20%C2%AB%D0%98%D0%B7%D1%83%D0%BC%D1%80%D1%83%D0%B4%D0%BD%D1%8B%D0%B5%20%D0%A1%D0%BF%D0%B8%D1%80%D0%B0%D0%BB%D0%B8%20%D0%92%D0%B5%D1%81%D0%BD%D1%8B%C2%BB%2C%20%D0%AE%D0%BD%D1%8C%D0%BD%D0%B0%D0%BD%D1%8C%2C%202022%20%D0%B3(2)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806757_%D0%97%D0%B5%D0%BB%D0%B5%CC%88%D0%BD%D1%8B%D0%B8%CC%86%20%D1%87%D0%B0%D0%B8%CC%86%20%D0%91%D0%B8%D0%BB%D0%BE%D1%87%D1%83%D0%BD%D1%8C%20%C2%AB%D0%98%D0%B7%D1%83%D0%BC%D1%80%D1%83%D0%B4%D0%BD%D1%8B%D0%B5%20%D0%A1%D0%BF%D0%B8%D1%80%D0%B0%D0%BB%D0%B8%20%D0%92%D0%B5%D1%81%D0%BD%D1%8B%C2%BB%2C%20%D0%AE%D0%BD%D1%8C%D0%BD%D0%B0%D0%BD%D1%8C%2C%202022%20%D0%B3(3)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "dense, rich, and long, with notes of fresh cucumbers, young shoots, and porcini mushrooms. Impact: refreshing, invigorating, and toning. Excellent 'morning' tea.",
                aboutProduct: `<p>The famous green tea from Yunnan province. There are a large number of buds in the raw material, which is clearly visible against the background of green leaves. Thanks to this, tea is drunk for a long time and has a bright aroma. </p>
                    <p>The aroma of dry leaf: bright, smoked, baked.</p>
                    <p>Taste and aftertaste: dense, rich, and long, with notes of fresh cucumbers, young shoots, and porcini mushrooms. With a noticeable but pleasant astringency, it smoothly turns into a sweet, juicy aftertaste. At the end of the tea party, the bitterness fades away, and only sweetness and tender herbiness remain. </p>
                    <p>Effect: refreshing, invigorating, and toning. Excellent "morning" tea.</p>
                    `,
                SteepingInstructions: `<p>Tea Preparation</p>
                    <p>Add 6 grams to a Teapot ( 300ml ). </p>
                    <p>Use 180°F water. </p>
                    <p>Infuse the brew for 2-3 minutes.</p>`,
                flavor: "Flavor: cucumbers, young shoots, mushrooms",
                Ingredients:
                    "Tea Preparation Add 6 grams to a Teapot ( 300ml ). Use 180°F water. Infuse the brew for 2-3 minutes.",
            },
            {
                id: 18,
                title: "OSMANTHUS OOLONG",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069fe_Osman-Thus%20Oolong-1200-1-min.jpg",
                price: 45,
                amount: 1,
                flow: 1,
                subCategory: 1,
                category: [1, 7],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068b1_%D0%A3%D0%BB%D1%83%D0%BD%20%D1%81%20%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D1%82%D1%83%D1%81%D0%BE%D0%BC%20%D1%81%20%D0%BE.%20%D0%A2%D0%B0%D0%B8%CC%86%D0%B2%D0%B0%D0%BD%D1%8C%2C%20%D0%BD%D0%B0%D1%82%D1%83%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B8%CC%86-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068b6_%D0%A3%D0%BB%D1%83%D0%BD%20%D1%81%20%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D1%82%D1%83%D1%81%D0%BE%D0%BC%20%D1%81%20%D0%BE.%20%D0%A2%D0%B0%D0%B8%CC%86%D0%B2%D0%B0%D0%BD%D1%8C%2C%20%D0%BD%D0%B0%D1%82%D1%83%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B8%CC%86(2)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068b7_%D0%A3%D0%BB%D1%83%D0%BD%20%D1%81%20%D0%BE%D1%81%D0%BC%D0%B0%D0%BD%D1%82%D1%83%D1%81%D0%BE%D0%BC%20%D1%81%20%D0%BE.%20%D0%A2%D0%B0%D0%B8%CC%86%D0%B2%D0%B0%D0%BD%D1%8C%2C%20%D0%BD%D0%B0%D1%82%D1%83%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B8%CC%86(3)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "fresh, bright taste, dried fruit with berry sweetness. Shades of peaches and apricots. Impact: it refreshes well and gives strength, evens out the condition.",
                aboutProduct: `<p>
                        Taiwanese oolong flavored with natural osmanthus flowers — Gui Hua. Without artificial additives and flavors.


                    </p>
                    <p>
                    Bush variety: based on a blend of Si Tzu Chun and Jin Xuan varieties.


                    </p>
                    <p>
Aroma: the bright aroma of flowers, fruit cocktails (peach, apricot, and nectarine), and honey. Delicate notes of white, sweet wine.


                    </p>
                    <p>
Taste and aftertaste: fresh, bright taste, dried fruit with berry sweetness. Shades of peaches and apricots. At the same time, the taste of the tea leaf is in the foreground, and osmanthus only perfectly complements it. Gradually, the taste of osmanthus completely disappears, leaving a pure taste of oolong.


                    </p>
                    <p>
Impact: it refreshes well and gives strength, evens out the condition.


                    </p>
                    `,
                SteepingInstructions: `<p>
                        Tea Preparation


                    </p>
                    <p>
                    Add 6 grams to a Teapot (300 ml). 


                    </p>
                    <p>
Use 180°F water. 


                    </p>
                    <p>
Infuse the brew for 2-3 minutes.


                    </p>`,
                flavor: "Flavor: dried fruit with berry sweetness",
                Ingredients: "Organic oolong tea",
            },
            {
                id: 19,
                title: "WISHAN OOLONG #2",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069fa_Wishan-2-1200-min.jpg",
                price: 15,
                amount: 1,
                flow: 2,
                subCategory: 1,
                category: [1, 7],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068ba_%D0%A8%D1%83%D0%B8%CC%86%20%D0%A1%D1%8F%D0%BD%D1%8C%20%D0%93%D0%B0%D0%BE%20%D0%A8%D0%B0%D0%BD%D1%8C%20%D0%A2%D0%B0%D0%BD%20%D0%91%D1%8D%D0%B8%CC%86%20%C2%AB%E2%80%8E%D0%92%D1%8B%D1%81%D0%BE%D0%BA%D0%BE%D0%B3%D0%BE%D1%80%D0%BD%D1%8B%D0%B8%CC%86%20%D0%9D%D0%B0%D1%80%D1%86%D0%B8%D1%81%D1%81%C2%BB-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068bc_%D0%A8%D1%83%D0%B8%CC%86%20%D0%A1%D1%8F%D0%BD%D1%8C%20%D0%93%D0%B0%D0%BE%20%D0%A8%D0%B0%D0%BD%D1%8C%20%D0%A2%D0%B0%D0%BD%20%D0%91%D1%8D%D0%B8%CC%86%20%C2%AB%E2%80%8E%D0%92%D1%8B%D1%81%D0%BE%D0%BA%D0%BE%D0%B3%D0%BE%D1%80%D0%BD%D1%8B%D0%B8%CC%86%20%D0%9D%D0%B0%D1%80%D1%86%D0%B8%D1%81%D1%81%C2%BB(2)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068b8_%D0%A8%D1%83%D0%B8%CC%86%20%D0%A1%D1%8F%D0%BD%D1%8C%20%D0%93%D0%B0%D0%BE%20%D0%A8%D0%B0%D0%BD%D1%8C%20%D0%A2%D0%B0%D0%BD%20%D0%91%D1%8D%D0%B8%CC%86%20%C2%AB%E2%80%8E%D0%92%D1%8B%D1%81%D0%BE%D0%BA%D0%BE%D0%B3%D0%BE%D1%80%D0%BD%D1%8B%D0%B8%CC%86%20%D0%9D%D0%B0%D1%80%D1%86%D0%B8%D1%81%D1%81%C2%BB(3)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "clean and strong, oily and dense, but at the same time delicate. Smoothly turns into a long, refreshing, sweet aftertaste. Impact: it will warm,cheer up and inspire.",
                aboutProduct: `<p>
                        The taste and aroma of Wishan oolongs depend on many parameters, but two main ones can be distinguished: raw materials and heating. Raw materials determine the potential of tea. For example, if the bushes grow in a good place, get the right amount of sun, fog, and moisture, and the soil under the bushes is rich in necessary substances, then you can make an outstanding tea with an unforgettable taste from the leaves of such bushes. Warming up determines the final result. Tea can be spoiled if it is overheated or, conversely, underheated. But when all the technical subtleties are observed, it turns out perfectly balanced in taste and aroma... Shui Xian Gao Shan Tang Bei. Or "A High-Altitude Daffodil Warmed on Coals".


                    </p>
                    <p>
                    The advantages of Narcissus are reflected in the name: the high-altitude collection area promises a wealth of raw materials, and successful warming up using traditional technology on natural coals means an interesting bouquet.


                    </p>
                    <p>
Degree of warming up: Jun Ho, medium.


                    </p>
                    <p>
Aroma: bright, rich, and rich. Honey and chocolate, fruits, caramel, and walnuts are felt in the aroma of the warmed leaf.


                    </p>
                    <p>
Taste: clean and strong, oily and dense, but at the same time delicate. Smoothly turns into a long, refreshing, sweet aftertaste.


                    </p>
                    <p>
Impact: it will warm, cheer up and inspire.


                    </p>
                    `,
                SteepingInstructions: `<p>
                        Traditional Preparation


                    </p>
                    <p>
                    Add 7-10 grams to a Gaiwan or Gongfu Teapot (150ml-200ml). 


                    </p>
                    <p>
Use 212°F boiling water.


                    </p>
                    <p>
Briefly rinse the leaves. Decant and discard this infusion.


                    </p>
                    <p>
Infuse the first brew for 1 second.  


                    </p>
                    <p>
Infuse 2nd and subsequent brews for 5-15 seconds. 


                    </p>
                    <p>
                        Repeat several times until the flavor and aroma of the tea dissipates. As the brewing session ensues, increase infusion time to coax out the body and strength of the final infusions.


                    </p>
                    `,
                flavor: "Flavor: clean and strong, oily and dense",
                Ingredients: "Organic oolong tea",
                TopSale: true,
            },
            {
                id: 20,
                title: "DONG DING LAO SHI",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069fc_dong-1200-min.jpg",
                price: 50,
                amount: 1,
                flow: 1,
                subCategory: 1,
                category: 4,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068b5_%D0%A3%D0%BB%D1%83%D0%BD%20%D0%94%D1%83%D0%BD%20%D0%94%D0%B8%D0%BD%20%D0%9B%D0%B0%D0%BE%20%D0%A8%D0%B8%2C%20%D1%82%D1%80%D0%B0%D0%B4%D0%B8%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B8%CC%86-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068b3_%D0%A3%D0%BB%D1%83%D0%BD%20%D0%94%D1%83%D0%BD%20%D0%94%D0%B8%D0%BD%20%D0%9B%D0%B0%D0%BE%20%D0%A8%D0%B8%2C%20%D1%82%D1%80%D0%B0%D0%B4%D0%B8%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B8%CC%86(2)-min.jpg",
                minImg3: null,
                availability: "in stock",
                TastingNotes:
                    "soft, sweet, multi-faceted, spicy-caramel, nutty and woody-dried fruit, with smoky coffee notes in the aftertaste and menthol freshness. Impact: intoxicating, relaxing, meditative.",
                aboutProduct: `<p>
                        Medium-fermented highly roasted hemispherical twisted oolong. It is grown and made on the tea farm of the Lu Gu region.


                    </p>
                    <p>
                    This tea is the ancestor of almost the entire tradition of Taiwanese oolongs, originally produced on a mountain peak in the area of Nantou. For this, he received the name "Oolong from Frosty Peak". The technology of its manufacture came to the island together with refugees from Fujian Province (China) in the mid-1960s. Some features of the technology have become leading in the tradition of Taiwanese teas. Now tea called "Dong Ding" is made all over Taiwan and this name has become more of an indication of the processing technology (special roasting) than the terrain.


                    </p>
                    <p>
Lao Shi Dong Ding (traditional Dong Ding) has preserved the taste of that era through the centuries, it differs from its modern counterparts. The tea is made from the Qing Xing variety, and has a dark color and a sweet-caramel taste, which is due to technological features. The brightest and most important is roasting. It occurs in two stages, first, they are fried according to the modern method in a drying cabinet, but then they are brought on charcoal. Solid wood is used for coals, for expensive representatives - coals of the Lunyan tree.


                    </p>
                    <p>
This tea only improves over time. It is better not to drink it immediately after production, after the fire settles down, the residual bitterness in the taste passes, and only sweetness remains. This tea is perfect for long-term storage, it is from him that the famous Lao Cha Wangs originate.


                    </p>
                    <p>
Aroma: caramel, honey, with nuances of flowers, fruits, and spices.


                    </p>
                    <p>
Taste: soft, sweet, multi-faceted, spicy caramel, nutty and woody-dried fruit, with smoky coffee notes in the aftertaste and menthol freshness. 


                    </p>
                    <p>
                       Effects: intoxicating, relaxing, meditative.

 
                    </p>
                    `,
                SteepingInstructions: `<p>
                        Traditional Preparation


                    </p>
                    <p>
                    Add 7-10 grams to a Gaiwan or Gongfu Teapot (150ml-200ml). 


                    </p>
                    <p>
Use 212°F boiling water.


                    </p>
                    <p>
Briefly rinse the leaves. Decant and discard this infusion.


                    </p>
                    <p>
Infuse the first brew for 10 seconds.  


                    </p>
                    <p>
Infuse 2nd and subsequent brews for 10-30 seconds. 


                    </p>
                    <p>
                        Repeat several times until the flavor and aroma of the tea dissipates. As the brewing session ensues, increase infusion time to coax out the body and strength of the final infusions.


                    </p>
                    `,
                flavor: "Flavor: spicy caramel, nutty, woody, fruit",
                Ingredients: "Organic oolong tea",
                TopSale: true,
            },
            {
                id: 21,
                title: "WISHAN OOLONG #1",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069fb_wishan-1200-min.jpg",
                price: 15,
                amount: 1,
                flow: 1,
                subCategory: 1,
                category: [1, 7],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068be_%D0%9C%D1%8D%D0%B8%CC%86%20%D0%A7%D0%B6%D0%B0%D0%BD%D1%8C%20%C2%AB%D0%94%D0%B8%D0%BA%D0%B0%D1%8F%20%D0%A1%D0%BB%D0%B8%D0%B2%D0%B0%C2%BB-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068b0_%D0%9C%D1%8D%D0%B8%CC%86%20%D0%A7%D0%B6%D0%B0%D0%BD%D1%8C%20%C2%AB%D0%94%D0%B8%D0%BA%D0%B0%D1%8F%20%D0%A1%D0%BB%D0%B8%D0%B2%D0%B0%C2%BB(2)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068b9_%D0%9C%D1%8D%D0%B8%CC%86%20%D0%A7%D0%B6%D0%B0%D0%BD%D1%8C%20%C2%AB%D0%94%D0%B8%D0%BA%D0%B0%D1%8F%20%D0%A1%D0%BB%D0%B8%D0%B2%D0%B0%C2%BB(3)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "pure and strong, enveloping and soft, but at the same time delicate. Voluminous, sweet and fruity, with baked notes. Impact: leveling, relaxing-meditative, collecting.",
                aboutProduct: `<p>
                        Mei Zhan (梅占, "Wild Plum") is a Chinese oolong from the vicinity of the Wu Mountains in the north of Fujian Province. 


                    </p>
                    <p>
                    The taste and aroma of Wishan oolongs depend on many parameters, but two main ones can be distinguished: raw materials and heating. Raw materials determine the potential of tea. For example, if the bushes grow in a good place, get the right amount of sun, fog, and moisture, and the soil under the bushes is rich in necessary substances, then you can make an outstanding tea with an unforgettable taste from the leaves of such bushes. Warming up determines the final result. Tea can be spoiled if it is overheated or, conversely, underheate. But when all the technical subtleties are observed, it turns out perfectly balanced in taste and aroma... Mei Zhan.


                    </p>
                    <p>
Degree of warming up: Jun Ho, medium.


                    </p>
                    <p>
Aroma: bright, rich, and complex.  Sweet fruits, flowers, and chocolate, caramel are felt in the aroma of the warmed leaf. 


                    </p>
                    <p>
Taste: pure and strong, enveloping and soft, but at the same time delicate. Voluminous, sweet and fruity, with baked notes. Smoothly turns into a long, refreshing, sweet aftertaste. 


                    </p>
                    <p>
Impact: leveling, relaxing-meditative, collecting. 


                    </p>
                    `,
                SteepingInstructions: `<p>
                        Traditional Preparation


                    </p>
                    <p>
                    Add 7-10 grams to a Gaiwan or Gongfu Teapot (150ml-200ml). 


                    </p>
                    <p>
Use 212°F boiling water.


                    </p>
                    <p>
Briefly rinse the leaves. Decant and discard this infusion.


                    </p>
                    <p>
Infuse the first brew for 1 second.  


                    </p>
                    <p>
Infuse 2nd and subsequent brews for 5-15 seconds. 


                    </p>
                    <p>
                        Repeat several times until the flavor and aroma of the tea dissipates. As the brewing session ensues, increase infusion time to coax out the body and strength of the final infusions.


                    </p>
                    `,
                flavor: "Flavor: voluminous sweet and fruity",
                Ingredients: "Organic oolong tea",
            },
            {
                id: 22,
                title: "TIE-GUAN YIN #3",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806a1b_Tie-Guan%203%201200%20copy-min.jpg",
                price: 15,
                amount: 1,
                flow: 3,
                subCategory: 1,
                category: 7,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8067cc_%D0%A3%D0%BB%D1%83%D0%BD%20%D0%A2%D0%B5%D0%B3%D1%83%D0%B0%D0%BD%D1%8C%D0%B8%D0%BD%D1%8C%20%D0%B2%20%D0%9A%D1%83%D0%B3%D1%83%D0%B0%2C%20%D0%BF%D1%80%D0%BE%D0%B6%D0%B0%D1%80%D0%B5%D0%BD%D0%BD%D1%8B%D0%B8%CC%86%20%D0%B8%20%D0%B2%D1%8B%D0%B4%D0%B5%D1%80%D0%B6%D0%B0%D0%BD%D0%BD%D1%8B%D0%B8%CC%86%2C%202019%20%D0%B3-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80678a_%D0%A3%D0%BB%D1%83%D0%BD%20%D0%A2%D0%B5%D0%B3%D1%83%D0%B0%D0%BD%D1%8C%D0%B8%D0%BD%D1%8C%20%D0%B2%20%D0%9A%D1%83%D0%B3%D1%83%D0%B0%2C%20%D0%BF%D1%80%D0%BE%D0%B6%D0%B0%D1%80%D0%B5%D0%BD%D0%BD%D1%8B%D0%B8%CC%86%20%D0%B8%20%D0%B2%D1%8B%D0%B4%D0%B5%D1%80%D0%B6%D0%B0%D0%BD%D0%BD%D1%8B%D0%B8%CC%86%2C%202019%20%D0%B3(2)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8067f6_%D0%A3%D0%BB%D1%83%D0%BD%20%D0%A2%D0%B5%D0%B3%D1%83%D0%B0%D0%BD%D1%8C%D0%B8%D0%BD%D1%8C%20%D0%B2%20%D0%9A%D1%83%D0%B3%D1%83%D0%B0%2C%20%D0%BF%D1%80%D0%BE%D0%B6%D0%B0%D1%80%D0%B5%D0%BD%D0%BD%D1%8B%D0%B8%CC%86%20%D0%B8%20%D0%B2%D1%8B%D0%B4%D0%B5%D1%80%D0%B6%D0%B0%D0%BD%D0%BD%D1%8B%D0%B8%CC%86%2C%202019%20%D0%B3(3)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "chocolate, nutty tones. The taste of the raw material itself is felt, the weak bitterness of cougar smoothly turns into sweetness and remains in the aftertaste. Impact: keeps the body in good shape, and the spirit in peace.",
                aboutProduct: `<p>
                        Oolong from Anxi County, roasted and aged in kugua. Kugua, or Momordica harantia, is a Chinese pumpkin in which different teas are aged in a traditional way for China. After that, the tea acquires original notes in taste and aroma, reminiscent of Taiwanese Lao cha. 


                    </p>
                    <p>
                    Aroma: slightly sweet and spicy. There are notes of nuts and dried fruits. The heated gaiwan is dominated by the aroma of cocoa, nuts, and cream. A real tea dessert, like prunes in chocolate. 


                    </p>
                    <p>
Taste: chocolate, nutty tones. The taste of the raw material itself is felt, and the weak bitterness of cougar smoothly turns into sweetness and remains in the aftertaste. 


                    </p>
                    <p>
Impact: keeps the body in good shape, and the spirit in peace.


                    </p>
                    `,
                SteepingInstructions: `<p>
                        Traditional Preparation


                    </p>
                    <p>
                    Add 4-6 grams to a Gaiwan or Gongfu Teapot (150ml-200ml). 


                    </p>
                    <p>
Use 212°F boiling water.


                    </p>
                    <p>
Briefly rinse the leaves. Decant and discard this infusion.


                    </p>
                    <p>
Infuse the first brew for 10 seconds.  


                    </p>
                    <p>
Infuse 2nd and subsequent brews for 10-30 seconds. 


                    </p>
                    <p>
                        Repeat several times until the flavor and aroma of the tea dissipates. As the brewing session ensues, increase infusion time to coax out the body and strength of the final infusions.


                    </p>
                    `,
                flavor: "Flavor: fresh and fruity",
                Ingredients: "Organic oolong tea",
            },
            {
                id: 23,
                title: "MILK OOLONG",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069f2_milk-oolong-1200-min.jpg",
                price: 18,
                amount: 1,
                flow: 1,
                subCategory: 1,
                category: 8,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806899_%D0%9C%D0%BE%D0%BB%D0%BE%D1%87%D0%BD%D1%8B%D0%B8%CC%86%20%D0%A3%D0%BB%D1%83%D0%BD%20%C2%AB%D0%9D%D0%B0%D0%B8%CC%86%20%D0%A1%D1%8F%D0%BD%C2%BB%2C%20%D0%9A%D0%B8%D1%82%D0%B0%D0%B8%CC%86%2C%202022%20%D0%B3-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068a6_%D0%9C%D0%BE%D0%BB%D0%BE%D1%87%D0%BD%D1%8B%D0%B8%CC%86%20%D0%A3%D0%BB%D1%83%D0%BD%20%C2%AB%D0%9D%D0%B0%D0%B8%CC%86%20%D0%A1%D1%8F%D0%BD%C2%BB%2C%20%D0%9A%D0%B8%D1%82%D0%B0%D0%B8%CC%86%2C%202022%20%D0%B3(2)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80683e_%D0%9C%D0%BE%D0%BB%D0%BE%D1%87%D0%BD%D1%8B%D0%B8%CC%86%20%D0%A3%D0%BB%D1%83%D0%BD%20%C2%AB%D0%9D%D0%B0%D0%B8%CC%86%20%D0%A1%D1%8F%D0%BD%C2%BB%2C%20%D0%9A%D0%B8%D1%82%D0%B0%D0%B8%CC%86%2C%202022%20%D0%B3(3)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "sweet, floral, creamy. Without bitterness and astringency. Impact: refreshing, relaxing, and harmonizing.",
                aboutProduct: `<p>
                        The name "Nai Xiang" translates as "Milk flavor". This tea is based on raw materials of the Mao Xie or Teguanyin variety. The refreshing taste and floral aroma were complemented by a creamy caramel note with the help of a food flavor.


                    </p>
                    <p>
                    Aroma: sweet, milky caramel with a slight chocolate tint. The warmed tea leaves smell of cotton candy, sweet popcorn, and whipped cream. 


                    </p>
                    <p>
Taste: sweet, floral, creamy. Without bitterness and astringency.


                    </p>
                    <p>
Effect: refreshing, relaxing, and harmonizing.


                    </p>
                    `,
                SteepingInstructions: `<p>
                        Tea Preparation


                    </p>
                    <p>
                    Add 6 grams to a Teapot (300 ml). 


                    </p>
                    <p>
Use 200°F water. 


                    </p>
                    <p>
Infuse the brew for 3 minutes.


                    </p>
                    `,
                flavor: "Flavor: sweetish, floral, creamy",
                Ingredients: "Oolong tea",
            },
            {
                id: 24,
                title: "BLACK TEA #3",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069b2_black-3-min.jpg",
                price: 15,
                amount: 1,
                flow: 3,
                subCategory: 5,
                category: 1,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068ef_%D0%9B%D1%8E%D0%B0%D0%BD%D1%8C%20%D0%A5%D1%8D%D0%B8%CC%86%20%D0%A7%D0%B0%20%D0%B2%20%D0%BA%D0%BE%D1%80%D0%B7%D0%B8%D0%BD%D0%BA%D0%B5%2C%202021%20%D0%B3(3)-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068e1_%D0%9B%D1%8E%D0%B0%D0%BD%D1%8C%20%D0%A5%D1%8D%D0%B8%CC%86%20%D0%A7%D0%B0%20%D0%B2%20%D0%BA%D0%BE%D1%80%D0%B7%D0%B8%D0%BD%D0%BA%D0%B5%2C%202021%20%D0%B3(2)-min.jpg",
                minImg3: null,
                availability: "in stock",
                TastingNotes:
                    "spicy, sweet, with a pleasant bitterness. It looks like both Wishan oolong and Shu Pu'er. Impact: gently tones, and smoothes.",
                aboutProduct: `<p>
                        Black fermented tea Hei Cha from Anhui province. Packed in a traditional bamboo basket of 500 grams. 


                    </p>
                    <p>
                    Aroma: sweet, woody-spicy, chocolate, with notes of dead leaves.


                    </p>
                    <p>
Taste: spicy, sweet, with a pleasant bitterness. It looks like both Wishan oolong and Shu Pu'er.


                    </p>
                    <p>
Effect: gently tones, and smoothes.


                    </p>
                    `,
                SteepingInstructions: `<p>
                        Traditional Preparation


                    </p>
                    <p>
                    Add 10-12 grams to a Gaiwan or Gongfu Teapot (150ml-200ml). 


                    </p>
                    <p>
Use 212°F boiling water.


                    </p>
                    <p>
Briefly rinse the leaves. Decant and discard this infusion.


                    </p>
                    <p>
Infuse the first brew for 10 seconds.  


                    </p>
                    <p>
Infuse 2nd and subsequent brews for 10-30 seconds. 


                    </p>
                    <p>
                       Repeat several times until the flavor and aroma of the tea dissipates. As the brewing session ensues, increase infusion time to coax out the body and strength of the final infusions.

 
                    </p>
                    `,
                flavor: "Flavor: spicy, sweet, pleasant bitterness",
                Ingredients: "Organic black tea",
            },
            {
                id: 25,
                title: "AGED OOLONG #1",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069f9_Aged%20Oolong-1200-min.jpg",
                price: 50,
                amount: 1,
                flow: 1,
                subCategory: 1,
                category: [1, 7],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068cb_%D0%9B%D1%83%20%D0%93%D1%83%20%D0%9B%D0%B0%D0%BE%20%D0%A7%D0%B0%20%D0%92%D0%B0%D0%BD%2012-%D0%BB%D0%B5%D1%82%D0%BD%D0%B8%D0%B8%CC%86-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068b4_%D0%9B%D1%83%20%D0%93%D1%83%20%D0%9B%D0%B0%D0%BE%20%D0%A7%D0%B0%20%D0%92%D0%B0%D0%BD%2012-%D0%BB%D0%B5%D1%82%D0%BD%D0%B8%D0%B8%CC%86(2)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068bd_%D0%9B%D1%83%20%D0%93%D1%83%20%D0%9B%D0%B0%D0%BE%20%D0%A7%D0%B0%20%D0%92%D0%B0%D0%BD%2012-%D0%BB%D0%B5%D1%82%D0%BD%D0%B8%D0%B8%CC%86(3)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "deep, spicy caramel, nutty, with chocolate and smoky coffee notes in the aftertaste. Impact: harmonizing, relaxing, meditative. Suitable for an attentive tea ceremony.",
                aboutProduct: `<p>
                        Aged 12-year-old oolong from the Lu Gu farm.


                    </p>
                    <p>
                    The modern technology of Lao Cha Van production is as follows. Oolong is prepared in the same way as the rest of Taiwan's oolongs. Most oolongs are first prepared for storage by roasting to such an extent that the moisture content level is suitable for preservation. The master leaves a small amount of the best tea in the year for storage. It is poured into large stone or clay vessels, covering the top with thick paper to absorb moisture.  The maturing tea is usually taken out and checked every two to three years, thoroughly fried again to remove excess moisture and preserve the aroma.


                    </p>
                    <p>
The natural aging process takes about three years, as a result of which tea loses its fresh appearance and smell. At least after three years of storage, the tea begins to acquire a special softness characteristic of aged oolongs. Experts determine the age of six to eight years at least for the maturity of Lao Cha Wang.


                    </p>
                    <p>
Aroma: caramel, tobacco-coffee, nutty.


                    </p>
                    <p>
Taste: deep, spicy-caramel, nutty, with chocolate and smoky coffee notes in the aftertaste. 


                    </p>
                    <p>
Effects: harmonizing, relaxing, meditative. Suitable for an attentive tea ceremony.


                    </p>
                    <p>
                        Collection: 12 years ago, Taiwan Island.


                    </p>
                    `,
                SteepingInstructions: `<p>
                        Traditional Preparation


                    </p>
                    <p>
                    Add 7-10 grams to a Gaiwan or Gongfu Teapot (150ml-200ml). 


                    </p>
                    <p>
Use 200°F water. 


                    </p>
                    <p>
Briefly rinse the leaves. Decant and discard this infusion.


                    </p>
                    <p>
Infuse the first brew for 10 seconds.  


                    </p>
                    <p>
Infuse 2nd and subsequent brews for 10-30 seconds. 


                    </p>
                    <p>
                        Repeat several times until the flavor and aroma of the tea dissipates. As the brewing session ensues, increase infusion time to coax out the body and strength of the final infusions.


                    </p>
                    `,
                flavor: "Flavor: deep, spicy caramel, nutty",
                Ingredients: "Organic oolong tea",
            },
            {
                id: 26,
                title: "TIE-GUAN YIN #1",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069f3_1200-Tie-Guan%20Yin%201-min.jpg",
                price: 14,
                amount: 1,
                flow: 1,
                subCategory: 1,
                category: [3, 7],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80678c_%D0%A3%D0%BB%D1%83%D0%BD%20%D0%A2%D0%B5%D0%B3%D1%83%D0%B0%D0%BD%D1%8C%D0%B8%D0%BD%D1%8C%2C%20%D0%B2%D0%B5%D1%81%D0%BD%D0%B0%202022%20%D0%B3-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806789_%D0%A3%D0%BB%D1%83%D0%BD%20%D0%A2%D0%B5%D0%B3%D1%83%D0%B0%D0%BD%D1%8C%D0%B8%D0%BD%D1%8C%2C%20%D0%B2%D0%B5%D1%81%D0%BD%D0%B0%202022%20%D0%B3(2)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806818_%D0%A3%D0%BB%D1%83%D0%BD%20%D0%A2%D0%B5%D0%B3%D1%83%D0%B0%D0%BD%D1%8C%D0%B8%D0%BD%D1%8C%2C%20%D0%B2%D0%B5%D1%81%D0%BD%D0%B0%202022%20%D0%B3(3)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "fresh and fruity. Over time, a berry sourness and a small, pleasant astringency appear. Fresh and light aftertaste. Impact: refreshing, relaxing.",
                aboutProduct: `<p>
                        The famous oolong from the south of Fujian Province from Anxi County. It is there that Te guan yin has been traditionally grown since the VII century. In Anxi, tea is classified according to the method of processing. Our Teguanyin was created using the classic Guo Xiang leaf processing technology "Fruit Flavor". It is appreciated for its delicate, delicate aroma and a mild taste.


                    </p>
                    <p>
                    Aroma: sweet, with notes of applesauce and blooming lilac.


                    </p>
                    <p>
Taste: fresh and fruity. Over time, a berry sourness and a small, pleasant astringency appear. Fresh and light aftertaste.


                    </p>
                    <p>
Effect: refreshing, relaxing. 


                    </p>
                    `,
                SteepingInstructions: `<p>
                        Tea Preparation


                    </p>
                    <p>
                    Add 6 grams to a Teapot (300 ml). 


                    </p>
                    <p>
Use 200°F water. 


                    </p>
                    <p>
Infuse the brew for 2-3 minutes.


                    </p>
                    `,
                flavor: "Flavor: fresh and fruity",
                Ingredients: "Organic oolong tea",
            },
            {
                id: 27,
                title: "DAN TSUNG #1",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069ee_dan-1200-min.jpg",
                price: 33,
                amount: 1,
                flow: 4,
                subCategory: 1,
                category: [1, 7],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068c1_%D0%9C%D0%B8%20%D0%9B%D0%B0%D0%BD%D1%8C%20%D0%A1%D1%8F%D0%BD%20%D0%93%D0%B0%D0%BE%D1%88%D0%B0%D0%BD%D1%8C%20%D0%94%D0%B0%D0%BD%D1%8C%20%D0%A6%D1%83%D0%BD%20%C2%AB%D0%9C%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%9E%D1%80%D1%85%D0%B8%D0%B4%D0%B5%D1%8F%C2%BB%20-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068c4_%D0%9C%D0%B8%20%D0%9B%D0%B0%D0%BD%D1%8C%20%D0%A1%D1%8F%D0%BD%20%D0%93%D0%B0%D0%BE%D1%88%D0%B0%D0%BD%D1%8C%20%D0%94%D0%B0%D0%BD%D1%8C%20%D0%A6%D1%83%D0%BD%20%C2%AB%D0%9C%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%9E%D1%80%D1%85%D0%B8%D0%B4%D0%B5%D1%8F%C2%BB(2)%20-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068c6_%D0%9C%D0%B8%20%D0%9B%D0%B0%D0%BD%D1%8C%20%D0%A1%D1%8F%D0%BD%20%D0%93%D0%B0%D0%BE%D1%88%D0%B0%D0%BD%D1%8C%20%D0%94%D0%B0%D0%BD%D1%8C%20%D0%A6%D1%83%D0%BD%20%C2%AB%D0%9C%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%9E%D1%80%D1%85%D0%B8%D0%B4%D0%B5%D1%8F%C2%BB(3)%20-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "rich, thick, with obvious citrus-honey notes and pleasant, expressive astringency. Impact: fills with energy and cheerfulness, lifts the mood.",
                aboutProduct: `<p>
                        A classic representative of the oolongs from Guangdong province. It is distinguished by a bright, multifaceted aroma and high—quality raw materials from the peaks of Feng Huang Shan, a mountain in Southern China with a favorable climate and soil for tea.


                    </p>
                    <p>
                    Aroma: complex, intoxicating, with notes of ripe fruits, honey, and sweet flowers.


                    </p>
                    <p>
Taste: rich, thick, with obvious citrus-honey notes and pleasant, expressive astringency. 


                    </p>
                    <p>
Impact: fills with energy and cheerfulness, lifts the mood.


                    </p>
                    `,
                SteepingInstructions: `<p>
                       Traditional Preparation

 
                    </p>
                    <p>
                    Add 7-10 grams to a Gaiwan or Gongfu Teapot (150ml-200ml). 


                    </p>
                    <p>
Use 212°F boiling water.


                    </p>
                    <p>
Briefly rinse the leaves. Decant and discard this infusion.


                    </p>
                    <p>
Infuse the first brew for 6 seconds.  


                    </p>
                    <p>
Infuse 2nd and subsequent brews for 10-30 seconds. 


                    </p>
                    `,
                flavor: "Flavor: rich, thick, citrus, honey",
                Ingredients: "Organic oolong tea",
            },
            {
                id: 28,
                title: "SHU PU-ERH #18",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069b6_shu-18-min.jpg",
                price: 15,
                amount: 1,
                flow: 4,
                subCategory: 5,
                category: [3, 7],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806752_%D0%93%D1%83%D0%BD%D1%82%D0%B8%D0%BD%20%D0%92%D0%B0%D0%BD%2C%202012%20%D0%B3(3)-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8066c8_%D0%93%D1%83%D0%BD%D1%82%D0%B8%D0%BD%20%D0%92%D0%B0%D0%BD%2C%202012%20%D0%B3(4)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806750_%D0%93%D1%83%D0%BD%D1%82%D0%B8%D0%BD%20%D0%92%D0%B0%D0%BD%2C%202012%20%D0%B3(2)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "sweet-woody, sleeper and dense with hints of bitter chocolate and prunes. Impact: powerful, actively toning. Impact: powerful, actively toning.",
                aboutProduct: `<p>A good sample of aged guntina.</p>
                    <p>
                        The word guntin (kit. 宫廷, "Palace") indicates the
                        category of raw materials, i.e. the size of the sheet.
                        Such leaves are small, and at the same time whole, and
                        not cut. In the guntins, tender leaves are necessarily
                        interspersed with a large number of tea buds. Together
                        they provide a rich taste and a strong impact.
                    </p>
                    <p>
                        By nature, this tea is bold and even brutal, but noble.
                    </p>
                    <p>Aroma: bright, with a clear camphor note.</p>
                    <p>
                        Taste: sweet-woody, sleeper, and dense with hints of
                        bitter chocolate and prunes. All these notes will be
                        intertwined harmoniously, without kinks, thanks to
                        proper storage in a specialized warehouse.
                    </p>
                    <p>Impact: powerful, actively toning.</p>
                    <p>
                        Production: 2012, Menghai Da Tang Factory (Chinese:
                        Menghai County, Xishuangbanna County, Yunnan Province,
                        China.
                    </p>`,
                SteepingInstructions: `<p>Traditional Preparation</p>
                    <p>
                        Add 7-10 grams to a Gaiwan or Gongfu Teapot
                        (150ml-200ml).
                    </p>
                    <p>Use 212°F boiling water.</p>
                    <p>
                        Briefly rinse the leaves. Decant and discard this
                        infusion.
                    </p>
                    <p>Infuse the first brew for 10 seconds.</p>
                    <p>Infuse 2nd and subsequent brews for 10-30 seconds.</p>
                    <p>
                        Repeat several times until the flavor and aroma of the
                        tea dissipates. As the brewing session ensues, increase
                        infusion time to coax out the body and strength of the
                        final infusions.
                    </p>`,
                flavor: "Flavor: sweet woody, chocolate, prunes",
                Ingredients: "Organic Shu Pu-erh",
            },
            {
                id: 29,
                title: "GREEN TEA #2",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069bb_green-2-min.jpg",
                price: 27,
                amount: 1,
                flow: 2,
                subCategory: 3,
                category: 7,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806788_%D0%97%D0%B5%D0%BB%D0%B5%CC%88%D0%BD%D1%8B%D0%B8%CC%86%20%D1%87%D0%B0%D0%B8%CC%86%20%D0%A1%D0%B8%20%D0%A5%D1%83%20%D0%9B%D1%83%D0%BD%D1%86%D0%B7%D0%B8%D0%BD%20%C2%AB%D0%9A%D0%BE%D0%BB%D0%BE%D0%B4%D0%B5%D1%86%20%D0%94%D1%80%D0%B0%D0%BA%D0%BE%D0%BD%D0%B0%C2%BB%2C%20%D0%B2%D1%8B%D1%81%D1%88%D0%B8%D0%B8%CC%86%20%D1%81%D0%BE%D1%80%D1%82%2C%20%D0%B2%D0%B5%D1%81%D0%BD%D0%B0%202022%20%D0%B3(3)-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806785_%D0%97%D0%B5%D0%BB%D0%B5%CC%88%D0%BD%D1%8B%D0%B8%CC%86%20%D1%87%D0%B0%D0%B8%CC%86%20%D0%A1%D0%B8%20%D0%A5%D1%83%20%D0%9B%D1%83%D0%BD%D1%86%D0%B7%D0%B8%D0%BD%20%C2%AB%D0%9A%D0%BE%D0%BB%D0%BE%D0%B4%D0%B5%D1%86%20%D0%94%D1%80%D0%B0%D0%BA%D0%BE%D0%BD%D0%B0%C2%BB%2C%20%D0%B2%D1%8B%D1%81%D1%88%D0%B8%D0%B8%CC%86%20%D1%81%D0%BE%D1%80%D1%82%2C%20%D0%B2%D0%B5%D1%81%D0%BD%D0%B0%202022%20%D0%B3-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806786_%D0%97%D0%B5%D0%BB%D0%B5%CC%88%D0%BD%D1%8B%D0%B8%CC%86%20%D1%87%D0%B0%D0%B8%CC%86%20%D0%A1%D0%B8%20%D0%A5%D1%83%20%D0%9B%D1%83%D0%BD%D1%86%D0%B7%D0%B8%D0%BD%20%C2%AB%D0%9A%D0%BE%D0%BB%D0%BE%D0%B4%D0%B5%D1%86%20%D0%94%D1%80%D0%B0%D0%BA%D0%BE%D0%BD%D0%B0%C2%BB%2C%20%D0%B2%D1%8B%D1%81%D1%88%D0%B8%D0%B8%CC%86%20%D1%81%D0%BE%D1%80%D1%82%2C%20%D0%B2%D0%B5%D1%81%D0%BD%D0%B0%202022%20%D0%B3(2)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "thick, oily and rich. Sweet, floral notes with a slight bitterness. Impact: refreshes, invigorates, and improves mindfulness and efficiency.",
                aboutProduct: `<p>
                        Longjing ( Dragon Well ) is one of the ten "Famous Teas of China".


                    </p>
                    <p>
                    It is made of small tea leaves and buds, thanks to which it is drunk for a long time, and has a bright aroma and rich taste. In the manufacture of thin and flat leaves are obtained.


                    </p>
                    <p>
Aroma: bright, rich, sweet, delicate notes of roasted sunflower seeds and sunflower oil.


                    </p>
                    <p>
Taste: thick, oily, and rich. Sweet, floral notes with a slight bitterness.


                    </p>
                    <p>
Effect: refreshes, invigorates, and improves mindfulness and efficiency.


                    </p>
                    `,
                SteepingInstructions: `<p>
                        Tea Preparation


                    </p>
                    <p>
                    Add 4 grams to a Teapot (300 ml). 


                    </p>
                    <p>
Use 195°F water. 


                    </p>
                    <p>
Infuse the brew for 2.5 minutes.


                    </p>
                    `,
                flavor: "Flavor: flowery with slight bitterness",
                Ingredients: "Organic green tea",
                TopSale: true,
            },
            {
                id: 30,
                title: "Green tea FLOW",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069b9_green%20flow%20combo-min.jpg",
                price: 50,
                amount: 1,
                flow: null,
                subCategory: null,
                category: [2, 7],
                minImg1: null,
                minImg2: null,
                minImg3: null,
                availability: "in stock",
                TastingNotes:
                    "The most popular and diverse type of tea in China. It has a clean and sweet aroma, delicate, but at the same time full of taste. A bouquet of green tea is recognized by floral, baked, fruit, and berry shades.",
                aboutProduct: `<p>
                        The set includes 6 varieties of green tea of 0.78 OZ (22 G). The most popular and diverse type of tea in China. It has a clean and sweet aroma, delicate, but at the same time full of taste. A bouquet of green tea is recognized by floral, baked, fruit, and berry shades.


                    </p>
                    <p>
                    Get acquainted with our collection, try new items, or make a delicious tea gift for a friend. By buying a set you save 20%.


                    </p>
                    <p>
Composition:


                    </p>
                    <p>
Green tea #1,#2, #3, #4


                    </p>
                    <p>
+ 2 secret teas


                    </p>
                    <p>
Total weight: 4.6 OZ (132 G).


                    </p>
                    <p>
                       Tea is packed in foil, sealed bags. The package's appearance and the kit's composition may differ from those shown in the photo and description. We make all replacements for samples that are as close to taste and aroma as possible.

 
                    </p>
                    <p>
Have a nice tea party.


                    </p>
                    `,
                SteepingInstructions: null,
                flavor: "The set includes 6 varieties of green tea",
                Ingredients: "Organic green tea",
            },
            {
                id: 31,
                title: "Pu-erh FLOW",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069b8_pu-erh%20flow%20combo-min.jpg",
                price: 55,
                amount: 1,
                flow: null,
                subCategory: null,
                category: [2, 7],
                minImg1: null,
                minImg2: null,
                minImg3: null,
                availability: "in stock",
                TastingNotes:
                    "A variety of Pu-eth is presented - young, aged, of different localities, factories, and forms of the press. There is a myth that the taste and aroma of Pu-erh are limited to peat, earth, and fish notes. We will prove to you that Pu-erh is capable of much more!",
                aboutProduct: `<p>
                        The set includes 6 varieties of Shu Pu-erh of 0.78 OZ
                        (22 G). A variety of Pu-eth is presented - young, aged,
                        of different localities, factories, and forms of the
                        press.
                    </p>
                    <p>
                        There is a myth that the taste and aroma of Pu-erh are
                        limited to peat, earth, and fish notes. We will prove to
                        you that Pu-erh is capable of much more!
                    </p>
                    <p>
                        Get to know our collection, try new items or make a
                        friend an invigorating tea gift. By buying a set you
                        save 20%.
                    </p>
                    <p>Composition:</p>
                    <p>Shu pu-erh #2, #4, #6</p>
                    <p>Sheng pu-erh #1</p>
                    <p>+ 2 secret tea</p>
                    <p>Total weight: 4.6 OZ (132 G)</p>
                    <p>
                        Tea is packed in foil, sealed bags. The package's
                        appearance and the kit's composition may differ from
                        those shown in the photo and description. We make all
                        replacements for samples that are as close to taste and
                        aroma as possible.
                    </p>
                    <p>Have a nice tea party.</p>`,
                SteepingInstructions: null,
                flavor: "The set includes 6 varieties of Shu Pu-erh",
                Ingredients: "Organic Shu Pu-erh",
            },
            {
                id: 32,
                title: "TeaFLOW",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806924_Slide7-min.jpg",
                price: 72,
                amount: 1,
                flow: null,
                subCategory: null,
                category: [2, 7],
                minImg1: null,
                minImg2: null,
                minImg3: null,
                availability: "in stock",
                TastingNotes:
                    "Each tea is a bestseller in the top-quality segment of our collection. An ideal option for a first date or when you want something different, but always delicious.",
                aboutProduct: `<p>
                        The set comes with 6 types of tea. Each tea is a
                        bestseller in the top-quality segment of our collection.
                        An ideal option for a first date or when you want
                        something different, but always delicious.
                    </p>
                    <p>
                        Explore our collection, sample some of our most recent
                        additions, or give a friend an invigorating tea gift. By
                        buying a set you save 20% and have free delivery.
                    </p>
                    <p>Composition:</p>
                    <p>White tea #1 - 0.78 OZ (22 G)</p>
                    <p>Green tea #3 - 1.5 OZ ( 43 G)</p>
                    <p>Green tea #2 - 0.78 OZ (22 G)</p>
                    <p>Tie Guan Yin #2 - 1.5 OZ ( 43 G)</p>
                    <p>Red tea #2 - 1.5 OZ ( 43 G)</p>
                    <p>Shu pu-erh #2 - 3 OZ ( 86 G)</p>
                    <p>Total weight: 9.2 OZ (259 G)</p>
                    <p>
                        The appearance of the packaging and the composition of
                        the kit may differ from those shown in the photo and in
                        the description. We make all replacements for samples
                        that are as close as possible to taste and aroma.
                    </p>
                    <p>Enjoy your tea.</p>`,
                SteepingInstructions: null,
                flavor: "The set comes with 6 types of tea",
                Ingredients:
                    "Organic Shu Pu-erh, Organic green tea, Organic oolong tea, Organic red tea, Organic white tea.",
            },
            {
                id: 33,
                title: "Teapot #1",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069ec_teapot-1-min.jpg",
                price: 85,
                amount: 1,
                flow: null,
                subCategory: null,
                category: 5,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80690f_%D0%A7%D0%B0%D0%B8%CC%86%D0%BD%D0%B8%D0%BA%203-min.jpeg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806905_%D0%A7%D0%B0%D0%B8%CC%86%D0%BD%D0%B8%D0%BA%204-min.jpeg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80690c_%D0%A7%D0%B0%D0%B8%CC%86%D0%BD%D0%B8%D0%BA%205-min.jpeg",
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Tea ceremony teapot, Yixing clay, 135 ml",
                Ingredients: null,
            },
            {
                id: 34,
                title: "Teapot #2",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069e9_teapot-2-min.jpg",
                price: 70,
                amount: 1,
                flow: null,
                subCategory: null,
                category: [3, 5],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80691c_%D0%A7%D0%B0%D0%B8%CC%86%D0%BD%D0%B8%D0%BA%203-min.jpeg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806919_%D0%A7%D0%B0%D0%B8%CC%86%D0%BD%D0%B8%D0%BA%204-min.jpeg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80691b_%D0%A7%D0%B0%D0%B8%CC%86%D0%BD%D0%B8%D0%BA%205-min.jpeg",
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Tea ceremony teapot, Yixing clay, 160 ml",
                Ingredients: null,
            },
            {
                id: 35,
                title: "Teapot #5",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069ed_teapot-5-min.jpg",
                price: 100,
                amount: 1,
                flow: null,
                subCategory: null,
                category: [4, 5],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80692e_img_9146-1000x1000-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806931_img_9148-1000x1000-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806936_img_9149-1000x1000-min.jpg",
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Tea ceremony teapot, Yixing clay, 105 ml",
                Ingredients: null,
            },
            {
                id: 36,
                title: "Gaiwan #1",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069d5_gaiwan-1-new-1-min.jpg",
                price: 18,
                amount: 1,
                flow: null,
                subCategory: null,
                category: [3, 5],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068ea_%D0%93%D0%B0%D0%B8%CC%86%D0%B2%D0%B0%D0%BD%D1%8C%20%D0%9A%D0%BE%D1%81%D0%BC%D0%BE%D1%81%202-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068f0_%D0%93%D0%B0%D0%B8%CC%86%D0%B2%D0%B0%D0%BD%D1%8C%20%D0%9A%D0%BE%D1%81%D0%BC%D0%BE%D1%81%203-min.jpg",
                minImg3: null,
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Gaiwan Cosmos, clay, glaze, 130 ml",
                Ingredients: null,
            },
            {
                id: 37,
                title: "Teacup #7",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069df_teacup-7-new-min.jpg",
                price: 5,
                amount: 1,
                flow: null,
                subCategory: null,
                category: 5,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806948_img_5224-1000x1000-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80694c_img_5223-1000x1000-min.jpg",
                minImg3: null,
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Teacup, white matte, porcelain, 60 ml",
                Ingredients: null,
            },
            {
                id: 38,
                title: "Teacup #1",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069d9_tea-cup-1-new-1-min.jpg",
                price: 8,
                amount: 1,
                flow: null,
                subCategory: null,
                category: [3, 5],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068ff_%D0%9F%D0%B8%D0%B0%D0%BB%D0%B0%20%D0%A1%D0%B0%D0%BA%D1%83%D1%80%D0%B0%203-min.jpeg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068fd_%D0%9F%D0%B8%D0%B0%D0%BB%D0%B0%20%D0%A1%D0%B0%D0%BA%D1%83%D1%80%D0%B0%202-min.jpeg",
                minImg3: null,
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Teacup sakura 326, clay, glaze, 65 ml",
                Ingredients: null,
            },
            {
                id: 39,
                title: "Teacup #2",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069da_tea-cup-2-new-1-min.jpg",
                price: 5,
                amount: 1,
                flow: null,
                subCategory: null,
                category: 5,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806911_%D0%9F%D0%B8%D0%B0%D0%BB%D0%B0%202-min.jpeg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806912_%D0%9F%D0%B8%D0%B0%D0%BB%D0%B0%203-min.jpeg",
                minImg3: null,
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Teacup blue sky, porcelain, 60 ml",
                Ingredients: null,
            },
            {
                id: 40,
                title: "Gaiwan #4",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069d7_gaiwan-4-new-1-min.jpeg",
                price: 36,
                amount: 1,
                flow: null,
                subCategory: null,
                category: 5,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806937_%D0%93%D0%B0%D0%B8%CC%86%D0%B2%D0%B0%D0%BD%D1%8C%203-min.jpeg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80693c_%D0%93%D0%B0%D0%B8%CC%86%D0%B2%D0%B0%D0%BD%D1%8C%202-min.jpeg",
                minImg3: null,
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Gaiwan Fan Gu, porcelain, 185 ml",
                Ingredients: null,
            },
            {
                id: 41,
                title: "Teapot #4",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069eb_teapot-4-min.jpg",
                price: 70,
                amount: 1,
                flow: null,
                subCategory: null,
                category: [4, 5],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806932_img_8523-1000x1000.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806930_img_8525-1000x1000.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80692d_img_8526-1000x1000.jpg",
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Tea ceremony teapot, Yixing clay, 165 ml",
                Ingredients: null,
            },
            {
                id: 42,
                title: "Teapot #3",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069ea_teapot-3-min.jpg",
                price: 80,
                amount: 1,
                flow: null,
                subCategory: null,
                category: 5,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806929_img_8464-1000x1000-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80692f_img_8460-1000x1000-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806927_img_8463-1000x1000-min.jpg",
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Tea ceremony teapot, Yixing clay, 190 ml",
                Ingredients: null,
            },
            {
                id: 43,
                title: "Gaiwan #5",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069d8_gaiwan-5-new-min.jpeg",
                price: 30,
                amount: 1,
                flow: null,
                subCategory: null,
                category: [5, 6],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806941_%D0%93%D0%B0%D0%B8%CC%86%D0%B2%D0%B0%D0%BD%D1%8C%203-min.jpeg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806940_%D0%93%D0%B0%D0%B8%CC%86%D0%B2%D0%B0%D0%BD%D1%8C%202-min.jpeg",
                minImg3: null,
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Gaiwan Cobalt Lotus, hand-painted, 170 ml",
                Ingredients: null,
            },
            {
                id: 44,
                title: "Teacup #5",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069dd_Teacup%20%235-new-1-min.jpg",
                price: 18,
                amount: 1,
                flow: null,
                subCategory: null,
                category: 5,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806943_img_8186-1000x1000-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806946_img_8185-1000x1000-min.jpg",
                minImg3: null,
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Teacup, lava ceramic, 100 ml",
                Ingredients: null,
            },
            {
                id: 45,
                title: "Teacup #8",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069e0_Teacup%20%238-new-1-min.jpg",
                price: 18,
                amount: 1,
                flow: null,
                subCategory: null,
                category: 5,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80694d_dsc07420-1000x1000-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806956_dsc07419-1000x1000-min.jpg",
                minImg3: null,
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Teacup, lava ceramic, 100 ml",
                Ingredients: null,
            },
            {
                id: 46,
                title: "Gaiwan #2",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069d4_gaiwan-2-new-1-min.jpeg",
                price: 26,
                amount: 1,
                flow: null,
                subCategory: null,
                category: [3, 5],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806935_%D0%93%D0%B0%D0%B8%CC%86%D0%B2%D0%B0%D0%BD%D1%8C%202-min.jpeg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80693a_%D0%93%D0%B0%D0%B8%CC%86%D0%B2%D0%B0%D0%BD%D1%8C%204-min.jpeg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806939_%D0%93%D0%B0%D0%B8%CC%86%D0%B2%D0%B0%D0%BD%D1%8C%205-min.jpeg",
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Gaiwan Cranes, porcelain, 180 ml",
                Ingredients: null,
            },
            {
                id: 47,
                title: "Chaban #2",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069c5_chaban-2-new-1-min.jpeg",
                price: 150,
                amount: 1,
                flow: null,
                subCategory: null,
                category: 6,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80691f_%D0%A7%D0%B0%D0%B1%D0%B0%D0%BD%D1%8C%202-min.jpeg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80691e_%D0%A7%D0%B0%D0%B1%D0%B0%D0%BD%D1%8C%204-min.jpeg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806922_%D0%A7%D0%B0%D0%B1%D0%B0%D0%BD%D1%8C%205-min.jpeg",
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Chaban (Tea Tray) made of wood, solid",
                Ingredients: null,
            },
            {
                id: 48,
                title: "Pu-erh tea knife #1",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069c8_pu-erh-tea-knife-new-1-min.jpeg",
                price: 9,
                amount: 1,
                flow: null,
                subCategory: null,
                category: 6,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068ee_%D0%A8%D0%B8%D0%BB%D0%BE%20%D0%B4%D0%BB%D1%8F%20%D0%BF%D1%83%D1%8D%D1%80%D0%B0%20.jpeg",
                minImg2: null,
                minImg3: null,
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Pu-erh tea knife Cigar, dark, flat cut",
                Ingredients: null,
            },
            {
                id: 49,
                title: "Chaban #1",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069c6_Chaban%20%231-new-1-min.jpeg",
                price: 110,
                amount: 1,
                flow: null,
                subCategory: null,
                category: 6,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068f3_%D0%A7%D0%B0%D0%B1%D0%B0%D0%BD%D1%8C%20StoneLeaf%202.jpeg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068f5_%D0%A7%D0%B0%D0%B1%D0%B0%D0%BD%D1%8C%20StoneLeaf%203.jpeg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068fa_%D0%A7%D0%B0%D0%B1%D0%B0%D0%BD%D1%8C%20StoneLeaf%204.jpeg",
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: `Chaban (Tea Tray), "Black Horse", bamboo`,
                Ingredients: null,
            },
            {
                id: 50,
                title: "Chaban #3",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069c4_chaban-3-new-1-min.jpeg",
                price: 60,
                amount: 1,
                flow: null,
                subCategory: null,
                category: 6,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806923_%D0%A7%D0%B0%D0%B1%D0%B0%D0%BD%D1%8C%202-min.jpeg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806921_%D0%A7%D0%B0%D0%B1%D0%B0%D0%BD%D1%8C%203-min.jpeg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806925_%D0%A7%D0%B0%D0%B1%D0%B0%D0%BD%D1%8C%204-min.jpeg",
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: `Chaban (Tea Tray) "With a bird", bamboo`,
                Ingredients: null,
            },
            {
                id: 51,
                title: "Tweezers tea #1",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069c7_tweezers-tea-1-new-1-min.jpeg",
                price: 5,
                amount: 1,
                flow: null,
                subCategory: null,
                category: 6,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068ed_%D0%9F%D0%B8%D0%BD%D1%86%D0%B5%D1%82%20%D1%81%20%D0%BE%D0%B1%D0%BC%D0%BE%D1%82%D0%BA%D0%BE%D0%B8%CC%86%20-min.jpeg",
                minImg2: null,
                minImg3: null,
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Tweezers tea, bamboo",
                Ingredients: null,
            },
            {
                id: 52,
                title: "BLACK TEA #2",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068e8_%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B8%CC%86%D1%82%D0%B0-min.jpg",
                price: 27,
                amount: 1,
                flow: 2,
                subCategory: 5,
                category: [1, 7],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068de_%D0%9B%D1%8E%20%D0%91%D0%B0%D0%BE%20%D0%A5%D1%8D%D0%B8%CC%86%20%D0%A7%D0%B0%208005%2C%202018%20%D0%B3(2)-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068dc_%D0%9B%D1%8E%20%D0%91%D0%B0%D0%BE%20%D0%A5%D1%8D%D0%B8%CC%86%20%D0%A7%D0%B0%208005%2C%202018%20%D0%B3(3)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068e3_%D0%9B%D1%8E%20%D0%91%D0%B0%D0%BE%20%D0%A5%D1%8D%D0%B8%CC%86%20%D0%A7%D0%B0%208005%2C%202018%20%D0%B3(4)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "soft, woody-chocolate, with vegetable shades. Impact: leveling, concentrating. This is tea for attentive work and cheerful morning.",
                aboutProduct: `
                <p>Black-aged Hei Cha tea from Guangxi in a stylish package. Produced by the Zhong Cha factory, which is also the author of the famous "Seals". Black tea has its own specifics of raw materials and processing technology, so it turns out to be very diverse in taste and aroma</p>
                <p>Aroma: dried fruits, fallen leaves, light tobacco notes, honey.

</p>
                <p>Taste: soft, woody-chocolate, with vegetable shades. 

</p>
                <p>Impact: leveling, concentrating. This is tea for attentive work and a cheerful morning.

</p>
                <p>Production: collection, fermentation, and the beginning of primary aging - 2018, packing and packaging - 2020.

</p>
                `,
                SteepingInstructions: `
                <p>Traditional Preparation

</p>
                <p>Add 10-12 grams to a Gaiwan or Gongfu Teapot (150ml-200ml). 

</p>
                <p>Use 212°F boiling water.

</p>
                <p>Briefly rinse the leaves. Decant and discard this infusion.

</p>
                <p>Infuse the first brew for 10 seconds.  

</p>
                <p>Infuse 2nd and subsequent brews for 10-30 seconds. 

</p>
                <p>Repeat several times until the flavor and aroma of the tea dissipates. As the brewing session ensues, increase infusion time to coax out the body and strength of the final infusions.

</p>
                `,
                flavor: "Flavor: soft, woody-chocolate, vegetable",
                Ingredients: "Organic black tea",
            },
            {
                id: 53,
                title: "RED TEA #15",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069f6_red-15-1200-min.jpg",
                price: 33,
                amount: 1,
                flow: 3,
                subCategory: 2,
                category: [1, 7],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068d0_%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B8%CC%86%D1%82%D0%B02-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068d5_%D0%A8%D0%B0%D0%B8%CC%86%D1%85%D1%83%D0%BD%20%D1%81%D0%BE%20%D1%81%D1%82%D0%B0%D1%80%D1%8B%D1%85%20%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8C%D0%B5%D0%B2%20%D0%B8%D0%B7%20%D0%A6%D0%B7%D0%B8%D0%BD%D0%BE%D1%88%D0%B0%D0%BD%D1%8C-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068d2_%D0%A8%D0%B0%D0%B8%CC%86%D1%85%D1%83%D0%BD%20%D1%81%D0%BE%20%D1%81%D1%82%D0%B0%D1%80%D1%8B%D1%85%20%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8C%D0%B5%D0%B2%20%D0%B8%D0%B7%20%D0%A6%D0%B7%D0%B8%D0%BD%D0%BE%D1%88%D0%B0%D0%BD%D1%8C(3)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "sweet, balanced, and dense. Notes of baked fruits and chocolate. The aftertaste is enveloping, and fresh. Impact: warming, gently toning, concentrating.",
                aboutProduct: `
                <p>
                Red tea from big old tea trees (Gu Shu), dried in the sun (kit.
                晒红乔木古树). The tea is harvested from trees about 150 years
                old in a high-altitude tea garden on the slope of Mount
                Jinoshan. The developed root system of old trees makes the
                leaves richer in trace elements, and the high-altitude
                collection area is characterized by ecological purity and a
                climate favorale for tea cultivation.
            </p>
            <p>
                Jinoshan Mountain, also known as Yule Shan, belongs to the group
                of 6 Famous Tea Mountains. It is located near the city of
                Jinghong, the administrative center of Xishuangbanna County.
            </p>
            <p>
                Shaikhuns are a special category of red teas, where the final
                drying of the tea leaf is carried out in the sun, and not in a
                drying cabinet (oven), as in the "classic" dianthus. In this
                tea, the leaf has a characteristic fragrant berry aroma and
                retains more moisture and enzymes. And most importantly,
                shaikhun, like sheng puer, has a high potential for further
                changes in the aging process - the taste will add roundness,
                honey, and depth, and the effect is smoothness and strength.
            </p>
            <p>Aroma: delicate, fruity, floral with confectionery notes</p>
            <p>
                Taste: sweet, balanced, dense. Notes of baked fruits and
                chocolate. The aftertaste is enveloping and fresh. Over time,
                shaikhun will gain flavor and aroma, and become softer and
                thicker.
            </p>
            <p>Impact: warming, gently toning, concentrating.</p>
            <p>
                Collection: First collection in spring 2022, Jinoshan Mountain
                (Yule), Xishuangbanna County, Yunnan Province, China.
            </p>
                `,
                SteepingInstructions: `
                <p>Traditional Preparation</p>
            <p>Add 7-10 grams to a Gaiwan or Gongfu Teapot (150ml-200ml).</p>
            <p>Use 212°F boiling water.</p>
            <p>Briefly rinse the leaves. Decant and discard this infusion.</p>
            <p>Infuse the first brew for 3 seconds.</p>
            <p>Infuse 2nd and subsequent brews for 5-15 seconds.</p>
            <p>
                Repeat several times until the flavor and aroma of the tea
                dissipates. As the brewing session ensues, increase infusion
                time to coax out the body and strength of the final infusions.
            </p>
                `,
                flavor: "Flavor: sweet, balanced, dense",
                Ingredients: "Organic red tea",
            },
            {
                id: 54,
                title: "RED TEA #10",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069f7_red-10-min.jpg",
                price: 38,
                amount: 1,
                flow: 1,
                subCategory: 2,
                category: [1, 7],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068dd_%D0%95%20%D0%A8%D0%B5%D0%BD%20%D0%A5%D1%83%D0%BD%20%D0%A7%D0%B0%20%D1%81%20%D0%B4%D0%B8%D0%BA%D0%B8%D1%85%20%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8C%D0%B5%D0%B2%2C%20%D0%B2%D0%B5%D1%81%D0%BD%D0%B0%202022%20%D0%B3-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068d1_%D0%95%20%D0%A8%D0%B5%D0%BD%20%D0%A5%D1%83%D0%BD%20%D0%A7%D0%B0%20%D1%81%20%D0%B4%D0%B8%D0%BA%D0%B8%D1%85%20%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8C%D0%B5%D0%B2%2C%20%D0%B2%D0%B5%D1%81%D0%BD%D0%B0%202022%20%D0%B3(2)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068e5_%D0%95%20%D0%A8%D0%B5%D0%BD%20%D0%A5%D1%83%D0%BD%20%D0%A7%D0%B0%20%D1%81%20%D0%B4%D0%B8%D0%BA%D0%B8%D1%85%20%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8C%D0%B5%D0%B2%2C%20%D0%B2%D0%B5%D1%81%D0%BD%D0%B0%202022%20%D0%B3(3)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    'refined, bright, sweet, with fruit and berry sourness, "festive". Impact: powerful, warming, intoxicating, meditative.',
                aboutProduct: `
                            <p>
                Red tea from wild tea trees from the mountainous region of
                Ulyanshan. The first spring training camp.
            </p>
            <p>
                A special type of wild tea tree defines a unique aromatic and
                flavor palette. The tea is completely different from the classic
                Yunnan reds. It has the potential to change over time — it will
                gain softness and depth of taste.
            </p>
            <p>
                Aroma: heady, fragrant, with hints of wild berries, flowers, and
                tropical fruits (passion fruit).
            </p>
            <p>
                Taste: refined, bright, sweet, with fruit and berry sourness,
                "festive".
            </p>
            <p>Effects: powerful, warming, intoxicating, meditative.</p>
            <p>
                Collection: Spring 2022, Ulyanshan Mountains, Pu'er County,
                prov. Yunnan, China.
            </p>
                `,
                SteepingInstructions: `
                <p>Traditional Preparation</p>
            <p>Add 7-10 grams to a Gaiwan or Gongfu Teapot (150ml-200ml).</p>
            <p>Use 212°F boiling water.</p>
            <p>Briefly rinse the leaves. Decant and discard this infusion.</p>
            <p>Infuse the first brew for 5 seconds.</p>
            <p>Infuse 2nd and subsequent brews for 5-15 seconds.</p>
            <p>
                Repeat several times until the flavor and aroma of the tea
                dissipates. As the brewing session ensues, increase infusion
                time to coax out the body and strength of the final infusions.
            </p>
                `,
                flavor: "Flavor: refined, bright, sweet",
                Ingredients: "Organic red tea",
            },
            {
                id: 55,
                title: "SHU PU-ERH #16",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069fd_shu-16-1200-min.jpg",
                price: 30,
                amount: 1,
                flow: 4,
                subCategory: 5,
                category: [1, 7],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80674f_%D0%9C%D1%8D%D0%BD%D0%BA%D1%83%20%D0%93%D1%83%20%D0%A8%D1%83%20%D1%81%D0%BE%20%D1%81%D1%82%D0%B0%D1%80%D1%8B%D1%85%20%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8C%D0%B5%D0%B2%2C%202021%20%D0%B3-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8066aa_%D0%9C%D1%8D%D0%BD%D0%BA%D1%83%20%D0%93%D1%83%20%D0%A8%D1%83%20%D1%81%D0%BE%20%D1%81%D1%82%D0%B0%D1%80%D1%8B%D1%85%20%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8C%D0%B5%D0%B2%2C%202021%20%D0%B3(2)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806864_%D0%9C%D1%8D%D0%BD%D0%BA%D1%83%20%D0%93%D1%83%20%D0%A8%D1%83%20%D1%81%D0%BE%20%D1%81%D1%82%D0%B0%D1%80%D1%8B%D1%85%20%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8C%D0%B5%D0%B2%2C%202021%20%D0%B3(3)-min.jpg",
                availability: "in stock",
                TastingNotes:
                    "soft, balanced, enveloping. The profile is woody, with notes of nuts, cream and caramel. Impact:delicately invigorating, concentrating.",
                aboutProduct: `
                <p>
                For the production of this Shu Pu-erh, raw materials from old
                tea trees from the Manku region were used. The harvest is spring
                2020, which is especially valuable since cheaper summer or
                autumn raw materials are more often taken for Shu Pu-erh.
            </p>
            <p>
                WoodySingle raw materials (not blended) from old trees from 150
                to 250 years old from one tea garden. The trees grow on a
                mountain slope at an altitude of 1800m and reach 2-3 meters in
                height.
            </p>
            <p>
                Fermentation was carried out in the Menghai region by an
                experienced technologist using a special technology of low-run
                fermentation in bamboo baskets. This technology allows you to
                preserve as much as possible in the finished tea the full depth
                of taste and aroma of the original first-class raw materials.
            </p>
            <p>Aroma: woody, fruity, and creamy.</p>
            <p>
                Taste: soft, balanced, enveloping. The profile is woody, with
                notes of nuts, cream, and caramel. Over time, it will actively
                change and become more rounded and noble.
            </p>
            <p>Effect: delicately invigorating, concentrating.</p>
            <p>
                Production: harvest - Spring 2020, Mengku Region, Lincang
                County, fermentation - May-June 2020, Menghai County,
                Xishuangbanna County, Yunnan Province, China.
            </p>
                `,
                SteepingInstructions: `
                <p>Traditional Preparation</p>
            <p>Add 7-10 grams to a Gaiwan or Gongfu Teapot (150ml-200ml).</p>
            <p>Use 212°F boiling water.</p>
            <p>Briefly rinse the leaves. Decant and discard this infusion.</p>
            <p>Infuse the first brew for 10 seconds.</p>
            <p>Infuse 2nd and subsequent brews for 10-30 seconds.</p>
            <p>
                Repeat several times until the flavor and aroma of the tea
                dissipates. As the brewing session ensues, increase infusion
                time to coax out the body and strength of the final infusions.
            </p>
                `,
                flavor: "Flavor: juicy, sweet and strong",
                Ingredients: "Organic Shu Pu-erh",
            },
            {
                id: 56,
                title: `DONG DING LAO SHI`,
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069fc_dong-1200-min.jpg",
                price: 50,
                amount: 1,
                flow: null,
                subCategory: 1,
                category: [1, 7],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068b5_%D0%A3%D0%BB%D1%83%D0%BD%20%D0%94%D1%83%D0%BD%20%D0%94%D0%B8%D0%BD%20%D0%9B%D0%B0%D0%BE%20%D0%A8%D0%B8%2C%20%D1%82%D1%80%D0%B0%D0%B4%D0%B8%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B8%CC%86-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068b3_%D0%A3%D0%BB%D1%83%D0%BD%20%D0%94%D1%83%D0%BD%20%D0%94%D0%B8%D0%BD%20%D0%9B%D0%B0%D0%BE%20%D0%A8%D0%B8%2C%20%D1%82%D1%80%D0%B0%D0%B4%D0%B8%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B8%CC%86(2)-min.jpg",
                minImg3: null,
                availability: "in stock",
                TastingNotes: `soft, sweet, multi-faceted, spicy-caramel, nutty and
woody-dried fruit, with smoky coffee notes in the
aftertaste and menthol freshness. Impact:
intoxicating, relaxing, meditative.`,
                aboutProduct: `<p>
                Medium-fermented highly roasted hemispherical twisted oolong. It
                is grown and made on the tea farm of the Lu Gu region.
            </p>
            <p>
                This tea is the ancestor of almost the entire tradition of
                Taiwanese oolongs, originally produced on a mountain peak in the
                area of Nantou. For this, he received the name "Oolong from
                Frosty Peak". The technology of its manufacture came to the
                island together with refugees from Fujian Province (China) in
                the mid-1960s. Some features of the technology have become
                leading in the tradition of Taiwanese teas. Now tea called "Dong
                Ding" is made all over Taiwan and this name has become more of
                an indication of the processing technology (special roasting)
                than the terrain.
            </p>
            <p>
                Lao Shi Dong Ding (traditional Dong Ding) has preserved the
                taste of that era through the centuries, it differs from its
                modern counterparts. The tea is made from the Qing Xing variety,
                and has a dark color and a sweet-caramel taste, which is due to
                technological features. The brightest and most important is
                roasting. It occurs in two stages, first, they are fried
                according to the modern method in a drying cabinet, but then
                they are brought on charcoal. Solid wood is used for coals, for
                expensive representatives - coals of the Lunyan tree.
            </p>
            <p>
                This tea only improves over time. It is better not to drink it
                immediately after production, after the fire settles down, the
                residual bitterness in the taste passes, and only sweetness
                remains. This tea is perfect for long-term storage, it is from
                him that the famous Lao Cha Wangs originate.
            </p>
            <p>
                Aroma: caramel, honey, with nuances of flowers, fruits, and
                spices.
            </p>
            <p>
                Taste: soft, sweet, multi-faceted, spicy caramel, nutty and
                woody-dried fruit, with smoky coffee notes in the aftertaste and
                menthol freshness.
            </p>
            <p>Effects: intoxicating, relaxing, meditative.</p>`,
                SteepingInstructions: `<p>Traditional Preparation</p>
            <p>Add 7-10 grams to a Gaiwan or Gongfu Teapot (150ml-200ml).</p>
            <p>Use 212°F boiling water.</p>
            <p>Briefly rinse the leaves. Decant and discard this infusion.</p>
            <p>Infuse the first brew for 10 seconds.</p>
            <p>Infuse 2nd and subsequent brews for 10-30 seconds.</p>
            <p>
                Repeat several times until the flavor and aroma of the tea
                dissipates. As the brewing session ensues, increase infusion
                time to coax out the body and strength of the final infusions.
            </p>`,
                flavor: "Flavor: spicy caramel, nutty, woody, fruit",
                Ingredients: "Organic oolong tea",
            },
            {
                id: 57,
                title: "RED TEA #5",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069f8_red-5-min.jpg",
                price: 37,
                amount: 1,
                flow: 3,
                subCategory: 2,
                category: [1, 3, 7],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068e2_%D0%93%D1%83%D0%BD%D1%84%D1%83%20%D0%A5%D1%83%D0%BD%20%D0%B8%D0%B7%20%D0%B7%D0%B0%D0%BF%D0%BE%D0%B2%D0%B5%D0%B4%D0%BD%D0%B8%D0%BA%D0%B0%20%D0%A2%D1%83%D0%BD%20%D0%9C%D1%83-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068c9_%D0%93%D1%83%D0%BD%D1%84%D1%83%20%D0%A5%D1%83%D0%BD%20%D0%B8%D0%B7%20%D0%B7%D0%B0%D0%BF%D0%BE%D0%B2%D0%B5%D0%B4%D0%BD%D0%B8%D0%BA%D0%B0%20%D0%A2%D1%83%D0%BD%20%D0%9C%D1%83(2)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068cd_%D0%93%D1%83%D0%BD%D1%84%D1%83%20%D0%A5%D1%83%D0%BD%20%D0%B8%D0%B7%20%D0%B7%D0%B0%D0%BF%D0%BE%D0%B2%D0%B5%D0%B4%D0%BD%D0%B8%D0%BA%D0%B0%20%D0%A2%D1%83%D0%BD%20%D0%9C%D1%83(3)-min.jpg",
                availability: "in stock",
                TastingNotes: `balanced, thick, and rich with light Assamese and spicy-caramel
notes in the aftertaste. Impact: tonic, warming and slightly
relaxing.`,
                aboutProduct: `
                            <p>
                Gongfu Hong from the Tong Mu Reserve (桐木工夫红, "Red tea of
                the highest quality from Tong Mu") is a rare Chinese red tea of
                the highest category from the Wishan Nature Reserve in the north
                of Fujian Province. Made in spring from raw materials from wild
                bushes.
            </p>
            <p>
                Aroma: bright, deep, and fragrant. There are notes of flowers,
                caramel, bread, and chocolate.
            </p>
            <p>
                Taste: rich, balanced, thick, and rich with light Assamese and
                spicy-caramel notes in the aftertaste. In terms of the richness
                of the taste palette and the quality of raw materials, this tea
                can rightfully compare with the best Taiwanese red teas and even
                surpass them.
            </p>
            <p>Impact: tonic, warming, and slightly relaxing.</p>
                `,
                SteepingInstructions: `            <p>Traditional Preparation</p>
            <p>Add 7-10 grams to a Gaiwan or Gongfu Teapot (150ml-200ml).</p>
            <p>Use 212°F boiling water.</p>
            <p>Briefly rinse the leaves. Decant and discard this infusion.</p>
            <p>Infuse the first brew for 2 seconds.</p>
            <p>Infuse 2nd and subsequent brews for 5-15 seconds.</p>
            <p>
                Repeat several times until the flavor and aroma of the tea
                dissipates. As the brewing session ensues, increase infusion
                time to coax out the body and strength of the final infusions.
            </p>`,
                flavor: "Flavor:balanced, thick, rich, spicy caramel",
                Ingredients: "Organic red tea",
            },
            {
                id: 58,
                title: "GREEN TEA #3",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069ba_green-3-min.jpg",
                price: 14,
                amount: 1,
                flow: 2,
                subCategory: 3,
                category: [3, 7],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806759_%D0%9C%D0%B0%D0%BE%D1%86%D0%B7%D1%8F%D0%BD%D1%8C%20%D0%95%20%D0%A8%D1%8D%D0%BD%2C%20%D0%B2%D0%B5%D1%81%D0%BD%D0%B0%202022%20%D0%B3-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806758_%D0%9C%D0%B0%D0%BE%D1%86%D0%B7%D1%8F%D0%BD%D1%8C%20%D0%95%20%D0%A8%D1%8D%D0%BD%2C%20%D0%B2%D0%B5%D1%81%D0%BD%D0%B0%202022%20%D0%B3(2)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80675a_%D0%9C%D0%B0%D0%BE%D1%86%D0%B7%D1%8F%D0%BD%D1%8C%20%D0%95%20%D0%A8%D1%8D%D0%BD%2C%20%D0%B2%D0%B5%D1%81%D0%BD%D0%B0%202022%20%D0%B3(3)-min.jpg",
                availability: "in stock",
                TastingNotes: `sweet, herbaceous, refreshing taste with a smooth transition to
astringent, slightly minty and spicy aftertaste. The taste of fresh
grass and flowers. Light sourness of wild berries. Impact:
invigorating and toning, refreshing.`,
                aboutProduct: `<p>
                Green Chinese tea from Fujian province. The name Mao Jian Ye
                Sheng (Chinese: 毛尖野生, Wild Fleecy Peaks) speaks of the wild
                origin of this tea. This is clearly felt in the taste and aroma
                of tea: a bright, rich profile with a subtle acidity. At the
                same time, only small and tender shoots were selected to
                preserve the tenderness and delicacy of green tea.
            </p>
            <p>
                The aroma of a dry leaf: bright, fresh, slightly spicy, with a
                slight flowery. Subtle fruity and vanilla notes with spices.
            </p>
            <p>
                Taste and aftertaste: sweet, herbaceous, refreshing taste with a
                smooth transition to astringent, slightly minty, and spicy
                aftertaste. The taste of fresh grass and flowers. The light
                sourness of wild berries.
            </p>
            <p>Impact: invigorating and toning, refreshing.</p>`,
                SteepingInstructions: `            <p>Tea Preparation</p>
            <p>Add 6 grams to a Teapot (300 ml).</p>
            <p>Use 180°F water.</p>
            <p>Infuse the brew for 2-3 minutes.</p>`,
                flavor: "Flavor: herbs, flowers, wild berries.",
                Ingredients: "Organic green tea",
            },
            {
                id: 59,
                title: "SHU PU-ERH #2",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069b3_shu-2-min.jpg",
                price: 15,
                amount: 1,
                flow: 4,
                subCategory: 5,
                category: [3, 7],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806630_%D0%A8%D1%83%20%D0%BF%D1%83%D1%8D%D1%80%20%D0%AE%D0%BD%20%D0%A7%D0%B6%D0%B5%D0%BD%D1%8C%20%D0%93%D1%83%D0%BD%D1%82%D0%B8%D0%BD%2C%202016%20%D0%B3-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80665e_%D0%A8%D1%83%20%D0%BF%D1%83%D1%8D%D1%80%20%D0%AE%D0%BD%20%D0%A7%D0%B6%D0%B5%D0%BD%D1%8C%20%D0%93%D1%83%D0%BD%D1%82%D0%B8%D0%BD%2C%202016%20%D0%B3(2)-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80674e_%D0%A8%D1%83%20%D0%BF%D1%83%D1%8D%D1%80%20%D0%AE%D0%BD%20%D0%A7%D0%B6%D0%B5%D0%BD%D1%8C%20%D0%93%D1%83%D0%BD%D1%82%D0%B8%D0%BD%2C%202016%20%D0%B3(3)-min.jpg",
                availability: "in stock",
                TastingNotes: `fruity and nut-chocolate with a pleasant bitterness. Impact:
invigorates and tones`,
                aboutProduct: `<p>
                Invigorating pu-erh from Xin Wen factory. It is known for its
                combination of price and quality.
            </p>
            <p>
                The word Guntin (kit. 宫廷) in the name of the brick translates
                as Palace and indicates the category of raw materials. Palace or
                Imperial Pu-erh are small leaves containing large buds and a
                complete or almost complete absence of cuttings. This tea
                invigorates well, it is brewed quickly and deliciously.
            </p>
            <p>
                Aroma: sweet, woody, and nutty with notes of bitter chocolate.
            </p>
            <p>
                Taste: bright, rich, and thick with a pleasant bitterness,
                fruity, and nutty chocolate shades.
            </p>
            <p>
                Effect: invigorates and tones, a wonderful energizer. Helps on
                the road. An interesting substitute for coffee; is Pu-erh
                cheerfulness lasts longer and ends smoothly, unlike coffee, when
                strength disappears suddenly.
            </p>
            <p>
                Production: 2016, Xin Wen Factory, Yongde County, Lincang
                County, Yunnan Province, China.
            </p>`,
                SteepingInstructions: `<p>Traditional Preparation</p>
            <p>Add 7-10 grams to a Gaiwan or Gongfu Teapot (150ml-200ml).</p>
            <p>Use 212°F boiling water.</p>
            <p>Briefly rinse the leaves. Decant and discard this infusion.</p>
            <p>Infuse the first brew for 10 seconds.</p>
            <p>Infuse 2nd and subsequent brews for 10-30 seconds.</p>
            <p>
                Repeat several times until the flavor and aroma of the tea
                dissipates. As the brewing session ensues, increase infusion
                time to coax out the body and strength of the final infusions.
            </p>`,
                flavor: "Flavor: sweet, woody, nutty, chocolate",
                Ingredients: "Organic Shu Pu’er",
            },
            {
                id: 60,
                title: "Teacup #9",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069e1_teacup-9-new-1-min.jpg",
                price: 14,
                amount: 1,
                flow: null,
                subCategory: null,
                category: [4, 5],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806975_img_9992-1000x1000.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80697e_img_9993-1000x1000.jpg",
                minImg3: null,
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Teacup Cosmos, clay, glaze, 100 ml",
                Ingredients: null,
            },
            {
                id: 61,
                title: "TEACUP #10",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069e2_teacup-10-new-1-min.jpg",
                price: 14,
                amount: 1,
                flow: null,
                subCategory: null,
                category: [4, 5],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80697b_img_9998-1000x1000.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806977_img_9997-1000x1000.jpg",
                minImg3: null,
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Teacup Cosmos #2, clay, glaze, 100 ml",
                Ingredients: null,
            },
            {
                id: 62,
                title: "TEACUP #11",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069e3_teacup-11-new-1-min.jpg",
                price: 10,
                amount: 1,
                flow: null,
                subCategory: null,
                category: [4, 5],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806978_img_9988-1000x1000.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80697a_img_9987-1000x1000.jpg",
                minImg3: null,
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Teacup bronze, high-temperature fired, 60 m",
                Ingredients: null,
            },
            {
                id: 63,
                title: "Chaban #3",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069c4_chaban-3-new-1-min.jpeg",
                price: 60,
                amount: 1,
                flow: null,
                subCategory: null,
                category: [3, 6],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806923_%D0%A7%D0%B0%D0%B1%D0%B0%D0%BD%D1%8C%202-min.jpeg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806921_%D0%A7%D0%B0%D0%B1%D0%B0%D0%BD%D1%8C%203-min.jpeg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806925_%D0%A7%D0%B0%D0%B1%D0%B0%D0%BD%D1%8C%204-min.jpeg",
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: `Chaban (Tea Tray) "With a bird", bamboo`,
                Ingredients: null,
            },
            {
                id: 64,
                title: "fireproof Teapot #1",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069d1_teapot-is-fireproof-glass-1-new-min.jpeg",
                price: 25,
                amount: 1,
                flow: null,
                subCategory: null,
                category: [3, 6],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806913_%D0%A7%D0%B0%D0%B8%CC%86%D0%BD%D0%B8%D0%BA%20%D0%B8%D0%B7%20%D0%BE%D0%B3%D0%BD%D0%B5%D1%83%D0%BF%D0%BE%D1%80%D0%BD%D0%BE%D0%B3%D0%BE%20%D1%81%D1%82%D0%B5%D0%BA%D0%BB%D0%B0%202-min.jpeg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806916_%D0%A7%D0%B0%D0%B8%CC%86%D0%BD%D0%B8%D0%BA%20%D0%B8%D0%B7%20%D0%BE%D0%B3%D0%BD%D0%B5%D1%83%D0%BF%D0%BE%D1%80%D0%BD%D0%BE%D0%B3%D0%BE%20%D1%81%D1%82%D0%B5%D0%BA%D0%BB%D0%B0%203-min.jpeg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806914_%D0%A7%D0%B0%D0%B8%CC%86%D0%BD%D0%B8%D0%BA%20%D0%B8%D0%B7%20%D0%BE%D0%B3%D0%BD%D0%B5%D1%83%D0%BF%D0%BE%D1%80%D0%BD%D0%BE%D0%B3%D0%BE%20%D1%81%D1%82%D0%B5%D0%BA%D0%BB%D0%B0%204-min.jpeg",
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: `Bamboo fireproof glass teapot, 1000 ml`,
                Ingredients: null,
            },
            {
                id: 65,
                title: "Cha He #1",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069c9_Cha%20He%20%231%20-%20new-min.jpg",
                price: 9,
                amount: 1,
                flow: null,
                subCategory: null,
                category: [3, 6],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068f8_%D0%A7%D0%B0%D1%85%D1%8D%20%D0%93%D0%BE%D1%80%D1%8B%202.jpeg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068f7_%D0%A7%D0%B0%D1%85%D1%8D%20%D0%93%D0%BE%D1%80%D1%8B%203.jpeg",
                minImg3: null,
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: `Cha He, mountains, porcelain`,
                Ingredients: null,
            },
            {
                id: 66,
                title: "Cha Hai #1",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069d0_cha-hai-1-new-min.jpeg",
                price: 15,
                amount: 1,
                flow: null,
                subCategory: null,
                category: 6,
                minImg1:
                    "https://cdn.prod.website-files.com/64899c647bc07ddd2ccf0cf5/64899c647bc07ddd2ccf10b6_%D0%A7%D0%B0%D1%85%D0%B0%D0%B8%CC%86%20%D0%A2%D1%80%D0%B0%D0%BF%D0%B5%D1%86%D0%B8%D1%8F%202-min.jpeg",
                minImg2: null,
                minImg3: null,
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Cha Hai trapeze, glass, 325 ml",
                Ingredients: null,
            },
            {
                id: 67,
                title: "Chaban #4",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069c3_Chaban%20%234-new-1-min.jpg",
                price: 190,
                amount: 1,
                flow: null,
                subCategory: null,
                category: [4, 6],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806953_img_4749-1000x1000-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806955_img_4748-1000x1000-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806954_img_4750-1000x1000-min.jpg",
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Chaban (Tea Tray) is made of wood, solid",
                Ingredients: null,
            },
            {
                id: 68,
                title: "CHA HAI #2",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069cf_cha-hai-2-new-min.jpg",
                price: 18,
                amount: 1,
                flow: null,
                subCategory: null,
                category: 6,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806949_img_3749-1000x1000-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80694a_img_3748-1000x1000-min.jpg",
                minImg3: null,
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Cha hai Trapeze with green handle, 325 ml",
                Ingredients: null,
            },
            {
                id: 69,
                title: "CHA HAI #3",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069ce_cha-hai-3-new-min.jpg",
                price: 26,
                amount: 1,
                flow: null,
                subCategory: null,
                category: 6,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80694b_img_9463-1000x1000-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806952_img_9462-1000x1000-min.jpg",
                minImg3: null,
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Cha hai with wooden handle, glass 450 ml",
                Ingredients: null,
            },
            {
                id: 70,
                title: "FIGURE #1",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069e4_figure-1-min.jpg",
                price: 16,
                amount: 1,
                flow: null,
                subCategory: null,
                category: 6,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806951_img_9323-1000x1000-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80694f_img_9322-1000x1000-min.jpg",
                minImg3: null,
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Figure of Happy Hotei, clay, glaze",
                Ingredients: null,
            },
            {
                id: 71,
                title: "Teacup #6",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069de_teacup-6-new-min.jpg",
                price: 9,
                amount: 1,
                flow: null,
                subCategory: null,
                category: 5,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806944_img_5336-1000x1000-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806947_img_5337-1000x1000-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806945_dscf7722-1000x1000-min.jpg",
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Teacup, Ice glass, 50 ml",
                Ingredients: null,
            },
            {
                id: 72,
                title: "Teacup #3",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069db_tea-cup-3-new-1-min.jpg",
                price: 23,
                amount: 1,
                flow: null,
                subCategory: null,
                category: 5,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80690a_%D0%9F%D0%B8%D0%B0%D0%BB%D0%B0%202.jpeg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806915_%D0%9F%D0%B8%D0%B0%D0%BB%D0%B0%203.jpeg",
                minImg3: null,
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Teacup flower, Zhu Yao glaze, 80 ml",
                Ingredients: null,
            },
            {
                id: 73,
                title: "Gaiwan #3",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069d6_gaiwan-3-new-1-min.jpeg",
                price: 36,
                amount: 1,
                flow: null,
                subCategory: null,
                category: 5,
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80693d_%D0%93%D0%B0%D0%B8%CC%86%D0%B2%D0%B0%D0%BD%D1%8C%203-min.jpeg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806942_%D0%93%D0%B0%D0%B8%CC%86%D0%B2%D0%B0%D0%BD%D1%8C%202-min.jpeg",
                minImg3: null,
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Gaiwan Fan Gu, porcelain, 185 ml",
                Ingredients: null,
            },
            {
                id: 74,
                title: "FIGURE #3",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069d3_figure-3-new-1-min.jpg",
                price: 23,
                amount: 1,
                flow: null,
                subCategory: null,
                category: [4, 6],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806968_img_9288-1000x1000-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806969_img_9289-1000x1000-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806967_img_9290-1000x1000-min.jpg",
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Figure of a pair of piglets, clay",
                Ingredients: null,
            },
            {
                id: 75,
                title: "CHA HAI #7",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069ca_cha-hai-7-new-min.jpg",
                price: 23,
                amount: 1,
                flow: null,
                subCategory: null,
                category: [4, 6],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806963_img_8093-1000x1000-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80695f_img_8092-1000x1000-min.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80696a_img_8091-1000x1000-min.jpg",
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Cha hai Square, chop glass, 200 ml",
                Ingredients: null,
            },
            {
                id: 76,
                title: "FIGURE #4",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069e6_figure-4-min.jpg",
                price: 17,
                amount: 1,
                flow: null,
                subCategory: null,
                category: [4, 6],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80696b_img_9340-1000x1000.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80696c_img_9341-1000x1000.jpg",
                minImg3: null,
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Figure of an old man, clay",
                Ingredients: null,
            },
            {
                id: 77,
                title: "FIGURE #6",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069e7_figure-6-min.jpg",
                price: 37,
                amount: 1,
                flow: null,
                subCategory: null,
                category: [4, 6],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806970_img_9975-1000x1000.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80696d_img_9976-1000x1000.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80697d_img_9973-1000x1000.jpg",
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Figurine of Green Rhinoceros, clay",
                Ingredients: null,
            },
            {
                id: 78,
                title: "FIGURE #7",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069e8_figure-7-min.jpg",
                price: 22,
                amount: 1,
                flow: null,
                subCategory: null,
                category: [4, 6],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806971_img_9969-1000x1000.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806973_img_9968-1000x1000.jpg",
                minImg3: null,
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Figurine of a seated monk, clay, glaze",
                Ingredients: null,
            },
        ],
    };

    return null;
};

export default Context;
