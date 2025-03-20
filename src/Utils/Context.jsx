import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const productContext = createContext();

const Context = (props) => {
    const [productsApiData, setproductsApiData] = useState({
        categories: [
            {
                id: 1,
                categoryName: "premium tea",
                slug: "premium-tea",
            },
            {
                id: 2,
                categoryName: "sets",
                slug: "sets",
            },
            {
                id: 3,
                categoryName: "top sales",
                slug: "top-sales",
            },
            {
                id: 4,
                categoryName: "new arrivals",
                slug: "new-arrivals",
            },
            {
                id: 5,
                categoryName: "teaware",
                slug: "teaware",
            },
            {
                id: 6,
                slug: "accessories",
                categoryName: "accessories",
            },
        ],
        subCategories: [
            { id: 1, SubTitle: "oolong tea", slug: "oolong-tea" },
            { id: 2, SubTitle: "red tea", slug: "red-tea" },
            { id: 3, SubTitle: "green tea", slug: "green-tea" },
            { id: 4, SubTitle: "white tea", slug: "white-tea" },
            { id: 5, SubTitle: "black tea", slug: "black-tea" },
        ],
        flows: [
            {
                id: 1,
                flowTitle: "relax flow",
                slug: "relax-flow",
                image: "/Images/Flows/relax-flow.jpg",
                desc: "Teas that help you to find your inner calm and unwind",
            },
            {
                id: 2,
                flowTitle: "Life flow",
                slug: "life-flow",
                image: "/Images/Flows/life-flow.jpg",
                desc: "Designed to promote wellness and balance in your daily life",
            },
            {
                id: 3,
                flowTitle: "Awareness flow",
                slug: "awareness-flow",
                image: "/Images/Flows/awareness-flow.jpg",
                desc: "Teas that will help you slow down for a moment and reconnect with yourself",
            },
            {
                id: 4,
                flowTitle: "energy flow",
                slug: "energy-flow",
                image: "/Images/Flows/energy-flow.jpg",
                desc: "Perfect for those who looking for a natural boost of energy",
            },
        ],
        followUs: [
            { id: 1, image: "/Images/Follow/follow-us-1.jpg" },
            { id: 2, image: "/Images/Follow/follow-us-2.jpg" },
            { id: 3, image: "/Images/Follow/follow-us-3.jpg" },
            { id: 4, image: "/Images/Follow/follow-us-4.jpg" },
        ],
        products: [
            {
                id: 1,
                title: "red tea #10",
                param: "red-tea-10",
                price: 25,
                size: "0.78 oz (22 G) zip pouch",
                amount: 1,
                flow: null,
                slug: ["new-arrivals", "red-tea"],
                teaSizeAndPrice: [
                    {
                        size: "0.78 oz (22 G) zip pouch",
                        price: 25,
                    },
                    {
                        size: "1.5 oz (43 G) tin",
                        price: 38,
                    },
                    {
                        size: "3 oz (86 G) zip pouch",
                        price: 71,
                    },
                    {
                        size: "7.5 oz (215 G) zip pouch",
                        price: 170,
                    },
                ],
                image: "/Images/Products/red-tea-10-1.jpg",
                minImg1: "/Images/Products/red-tea-10-2.jpg",
                minImg2: "/Images/Products/red-tea-10-3.jpg",
                minImg3: "/Images/Products/red-tea-10-4.jpg",
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
                title: "ginseng oolong",
                param: "ginseng-oolong",
                price: 9,
                size: "0.78 oz (22 G) zip pouch",
                amount: 1,
                flow: 4,
                slug: ["top-sales", "products", "energy-flow", "oolong-tea"],
                teaSizeAndPrice: [
                    {
                        size: "0.78 oz (22 G) zip pouch",
                        price: 9,
                    },
                    {
                        size: "0.78 oz (22 G) tin",
                        price: 9,
                    },
                    {
                        size: "1.5 oz (43 G) zip pouch",
                        price: 14,
                    },
                    {
                        size: "1.5 oz (43 G) tin",
                        price: 14,
                    },
                    {
                        size: "3 oz (86 G) zip pouch",
                        price: 21,
                    },
                    {
                        size: "3 oz (86 G) tin",
                        price: 21,
                    },
                    {
                        size: "7.5 oz (215 G) zip pouch",
                        price: 45,
                    },
                ],
                image: "/Images/Products/ginseng-oolong-1.jpg",
                minImg1: "/Images/Products/ginseng-oolong-2.jpg",
                minImg2: "/Images/Products/ginseng-oolong-3.jpg",
                minImg3: "/Images/Products/ginseng-oolong-4.jpg",
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
            },
            {
                id: 3,
                title: "shu pu-erh #10",
                param: "shu-pu-erh-10",
                price: 16,
                size: "0.78 oz (22 G) zip pouch",
                amount: 1,
                flow: 4,
                slug: ["premium-tea", "products", "energy-flow", "black-tea"],
                teaSizeAndPrice: [
                    {
                        size: "0.78 oz (22 G) zip pouch",
                        price: 16,
                    },
                    {
                        size: "0.78 oz (22 G) tin",
                        price: 16,
                    },
                    {
                        size: "1.5 oz (43 G) zip pouch",
                        price: 27,
                    },
                    {
                        size: "1.5 oz (43 G) tin",
                        price: 27,
                    },
                    {
                        size: "3 oz (86 G) zip pouch",
                        price: 50,
                    },
                    {
                        size: "3 oz (86 G) tin",
                        price: 50,
                    },
                    {
                        size: "7 oz (200 G) trunk",
                        price: 120,
                    },
                ],
                image: "/Images/Products/shu-pu-erh-10-1.jpg",
                minImg1: "/Images/Products/shu-pu-erh-10-2.jpg",
                minImg2: "/Images/Products/shu-pu-erh-10-3.jpg",
                minImg3: "/Images/Products/shu-pu-erh-10-4.jpg",
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
                title: "shu pu-erh #14",
                param: "shu-pu-erh-14",
                image: "/Images/Products/shu-pu-erh-14-1.jpg",
                price: 9,
                size: "0.78 oz (22 G) zip pouch",
                amount: 1,
                flow: 4,
                slug: ["top-sales", "products", "energy-flow", "black-tea"],
                teaSizeAndPrice: [
                    {
                        size: "0.78 oz (22 G) zip pouch",
                        price: 9,
                    },
                    {
                        size: "0.78 oz (22 G) tin",
                        price: 9,
                    },
                    {
                        size: "1.5 oz (43 G) zip pouch",
                        price: 14,
                    },
                    {
                        size: "1.5 oz (43 G) tin",
                        price: 14,
                    },
                    {
                        size: "3 oz (86 G) zip pouch",
                        price: 21,
                    },
                    {
                        size: "3 oz (86 G) tin",
                        price: 21,
                    },
                    {
                        size: "7.5 oz (215 G) zip pouch",
                        price: 45,
                    },
                ],
                minImg1: "/Images/Products/shu-pu-erh-14-2.jpg",
                minImg2: "/Images/Products/shu-pu-erh-14-3.jpg",
                minImg3: "/Images/Products/shu-pu-erh-14-4.jpg",
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
                title: "red tea #4",
                param: "red-tea-4",
                image: "/Images/Products/red-tea-4-1.jpg",
                price: 8,
                size: "0.78 oz (22 G) zip pouch",
                amount: 1,
                flow: 3,
                slug: ["top-sales", "products", "awareness-flow", "red-tea"],
                teaSizeAndPrice: [
                    {
                        size: "0.78 oz (22 G) zip pouch",
                        price: 8,
                    },
                    {
                        size: "1.5 oz (43 G) tin",
                        price: 12,
                    },
                    {
                        size: "3 oz (86 G) zip pouch",
                        price: 18,
                    },
                    {
                        size: "7.5 oz (215 G) zip pouch",
                        price: 35,
                    },
                ],
                minImg1: "/Images/Products/red-tea-4-2.jpg",
                minImg2: "/Images/Products/red-tea-4-3.jpg",
                minImg3: "/Images/Products/red-tea-4-4.jpg",
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
            },
            {
                id: 6,
                title: "black tea #3",
                param: "black-tea-3",
                image: "/Images/Products/black-tea-3-1.jpg",
                price: 10,
                size: "0.78 oz (22 G) zip pouch",
                amount: 1,
                flow: null,
                slug: ["products", "awareness-flow", "black-tea"],
                teaSizeAndPrice: [
                    {
                        size: "0.78 oz (22 G) zip pouch",
                        price: 10,
                    },
                    {
                        size: "1.5 oz (43 G) tin",
                        price: 15,
                    },
                    {
                        size: "3 oz (86 G) zip pouch",
                        price: 25,
                    },
                    {
                        size: "7.5 oz (215 G) zip pouch",
                        price: 55,
                    },
                ],
                minImg1: "/Images/Products/black-tea-3-2.jpg",
                minImg2: "/Images/Products/black-tea-3-3.jpg",
                minImg3: "/Images/Products/black-tea-3-4.jpg",
                minImg3: null,
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
                title: "shu pu-erh #27",
                param: "shu-pu-erh-27",
                image: "/Images/Products/shu-pu-erh-27-1.jpg",
                price: 10,
                size: "0.78 oz (22 G) zip pouch",
                amount: 1,
                flow: null,
                slug: ["new-arrivals", "products", "black-tea"],
                teaSizeAndPrice: [
                    {
                        size: "0.78 oz (22 G) zip pouch",
                        price: 10,
                    },
                    {
                        size: "1.5 oz (43 G) zip pouch",
                        price: 15,
                    },
                    {
                        size: "3 oz (86 G) zip pouch",
                        price: 26,
                    },
                    {
                        size: "7 oz (215 G) cake",
                        price: 45,
                    },
                ],
                minImg1: "/Images/Products/shu-pu-erh-27-2.jpg",
                minImg2: "/Images/Products/shu-pu-erh-27-3.jpg",
                minImg3: "/Images/Products/shu-pu-erh-27-4.jpg",
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
                title: "sheng pu-erh #3",
                param: "sheng-pu-erh-3",
                image: "/Images/Products/sheng-pu-erh-3-1.jpg",
                price: 14,
                size: "0.78 oz (22 G) zip pouch",
                amount: 1,
                flow: 3,
                slug: [
                    "premium-tea",
                    "products",
                    "awareness-flow",
                    "green-tea",
                ],
                teaSizeAndPrice: [
                    {
                        size: "0.78 oz (22 G) zip pouch",
                        price: 14,
                    },
                    {
                        size: "0.78 oz (22 G) tin",
                        price: 14,
                    },
                    {
                        size: "1.5 oz (43 G) zip pouch",
                        price: 21,
                    },
                    {
                        size: "1.5 oz (43 G) tin",
                        price: 21,
                    },
                    {
                        size: "3 oz (86 G) zip pouch",
                        price: 35,
                    },
                    {
                        size: "3 oz (86 G) tin",
                        price: 35,
                    },
                    {
                        size: "6 oz (172 G) zip pouch",
                        price: 45,
                    },
                    {
                        size: "12.6 oz (357 G) cake",
                        price: 45,
                    },
                ],
                minImg1: "/Images/Products/sheng-pu-erh-3-2.jpg",
                minImg2: "/Images/Products/sheng-pu-erh-3-3.jpg",
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
            },
            {
                id: 9,
                title: "red tea #3",
                param: "red-tea-3",
                image: "/Images/Products/red-tea-3-1.jpg",
                price: 14,
                size: "0.78 oz (22 G) zip pouch",
                amount: 1,
                flow: 3,
                slug: ["products", "awareness-flow", "red-tea"],
                teaSizeAndPrice: [
                    {
                        size: "0.78 oz (22 G) zip pouch",
                        price: 14,
                    },
                    {
                        size: "1.5 oz (43 G) tin",
                        price: 21,
                    },
                    {
                        size: "3 oz (86 G) zip pouch",
                        price: 35,
                    },
                    {
                        size: "7.5 oz (215 G) zip pouch",
                        price: 80,
                    },
                ],
                minImg1: "/Images/Products/red-tea-3-2.jpg",
                minImg2: "/Images/Products/red-tea-3-3.jpg",
                minImg3: "/Images/Products/red-tea-3-4.jpg",
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
                TopSale: true,
            },
            {
                id: 10,
                title: "red tea #6",
                param: "red-tea-6",
                image: "/Images/Products/red-tea-6-1.jpg",
                price: 16,
                size: "0.78 oz (22 G) zip pouch",
                amount: 1,
                flow: 4,
                slug: ["premium-tea", "products", "energy-flow", "red-tea"],
                teaSizeAndPrice: [
                    {
                        size: "0.78 oz (22 G) zip pouch",
                        price: 16,
                    },
                    {
                        size: "1.5 oz (43 G) tin",
                        price: 27,
                    },
                    {
                        size: "3 oz (86 G) zip pouch",
                        price: 50,
                    },
                    {
                        size: "7.5 oz (215 G) zip pouch",
                        price: 115,
                    },
                ],
                minImg1: "/Images/Products/red-tea-6-2.jpg",
                minImg2: "/Images/Products/red-tea-6-3.jpg",
                minImg3: "/Images/Products/red-tea-6-4.jpg",
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
                title: "white tea #1",
                param: "white-tea-1",
                image: "/Images/Products/white-tea-1-1.jpg",
                price: 14,
                size: "0.78 oz (22 G) zip pouch",
                amount: 1,
                flow: 1,
                slug: ["products", "relax-flow", "white-tea"],
                teaSizeAndPrice: [
                    {
                        size: "0.78 oz (22 G) tin",
                        price: 14,
                    },
                    {
                        size: "1.5 oz (43 G) zip pouch",
                        price: 21,
                    },
                    {
                        size: "3 oz (86 G) zip pouch",
                        price: 35,
                    },
                    {
                        size: "7.5 oz (215 G) zip pouch",
                        price: 80,
                    },
                ],
                minImg1: "/Images/Products/white-tea-1-2.jpg",
                minImg2: "/Images/Products/white-tea-1-3.jpg",
                minImg3: "/Images/Products/white-tea-1-4.jpg",
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
                title: "gaba oolong #1",
                param: "gaba-oolong-1",
                image: "/Images/Products/gaba-oolong-1-1.jpg",
                price: 14,
                size: "0.78 oz (22 G) zip pouch",
                amount: 1,
                flow: 2,
                slug: ["top-sales", "life-flow", "oolong-tea"],
                teaSizeAndPrice: [
                    {
                        size: "0.78 oz (22 G) zip pouch",
                        price: 14,
                    },
                    {
                        size: "1.5 oz (43 G) zip pouch",
                        price: 21,
                    },
                    {
                        size: "3 oz (86 G) zip pouch",
                        price: 35,
                    },
                    {
                        size: "7.5 oz (215 G) zip pouch",
                        price: 80,
                    },
                ],
                minImg1: "/Images/Products/gaba-oolong-1-2.jpg",
                minImg2: "/Images/Products/gaba-oolong-1-3.jpg",
                minImg3: "/Images/Products/gaba-oolong-1-4.jpg",
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
                title: "gaba oolong #5",
                param: "gaba-oolong-5",
                image: "/Images/Products/gaba-oolong-5-1.jpg",
                price: 18,
                size: "0.78 oz (22 G) zip pouch",
                amount: 1,
                flow: 2,

                slug: ["premium-tea", "products", "life-flow", "oolong-tea"],
                teaSizeAndPrice: [
                    {
                        size: "0.78 oz (22 G) zip pouch",
                        price: 18,
                    },
                    {
                        size: "1.5 oz (43 G) zip pouch",
                        price: 30,
                    },
                    {
                        size: "3 oz (86 G) tin",
                        price: 57,
                    },
                    {
                        size: "7.5 oz (215 G) zip pouch",
                        price: 134,
                    },
                ],
                minImg1: "/Images/Products/gaba-oolong-5-2.jpg",
                minImg2: "/Images/Products/gaba-oolong-5-3.jpg",
                minImg3: "/Images/Products/gaba-oolong-5-4.jpg",
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
                title: "black tea #1",
                param: "black-tea-1",
                image: "/Images/Products/black-tea-1-1.jpg",
                price: 14,
                size: "0.78 oz (22 G) zip pouch",
                amount: 1,
                flow: 2,

                slug: ["products", "life-flow", "black-tea"],
                teaSizeAndPrice: [
                    {
                        size: "0.78 oz (22 G) zip pouch",
                        price: 14,
                    },
                    {
                        size: "1.5 oz (43 G) zip pouch",
                        price: 21,
                    },
                    {
                        size: "3 oz (86 G) zip pouch",
                        price: 35,
                    },
                    {
                        size: "7.5 oz (215 G) zip pouch",
                        price: 80,
                    },
                ],
                minImg1: "/Images/Products/black-tea-1-2.jpg",
                minImg2: "/Images/Products/black-tea-1-3.jpg",
                minImg3: "/Images/Products/black-tea-1-4.jpg",
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
                title: "gaba oolong #4",
                param: "gaba-oolong-4",
                image: "/Images/Products/gaba-oolong-4-1.jpg",
                price: 20,
                size: "0.78 oz (22 G) zip pouch",
                amount: 1,
                flow: 1,
                slug: [
                    "premium-tea",
                    "top-sales",
                    "products",
                    "relax-flow",
                    "oolong-tea",
                ],
                teaSizeAndPrice: [
                    {
                        size: "0.78 oz (22 G) zip pouch",
                        price: 20,
                    },
                    {
                        size: "1.5 oz (43 G) zip pouch",
                        price: 35,
                    },
                    {
                        size: "3 oz (86 G) zip pouch",
                        price: 65,
                    },
                    {
                        size: "7.5 oz (215 G) zip pouch",
                        price: 156,
                    },
                ],
                minImg1: "/Images/Products/gaba-oolong-4-2.jpg",
                minImg2: "/Images/Products/gaba-oolong-4-3.jpg",
                minImg3: "/Images/Products/gaba-oolong-4-4.jpg",
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
                title: "shu pu-erh #9",
                param: "shu-pu-erh-9",
                image: "/Images/Products/shu-pu-erh-9-1.jpg",
                price: 9,
                size: "0.78 oz (22 G) zip pouch",
                amount: 1,
                flow: 4,
                slug: ["top-sales", "energy-flow", "black-tea"],
                teaSizeAndPrice: [
                    {
                        size: "0.78 oz (22 G) zip pouch",
                        price: 9,
                    },
                    {
                        size: "1.5 oz (43 G) tin",
                        price: 12,
                    },
                    {
                        size: "3 oz (86 G) tin",
                        price: 18,
                    },
                    {
                        size: "12.6 oz (357 G) cake",
                        price: 45,
                    },
                ],
                minImg1: "/Images/Products/shu-pu-erh-9-2.jpg",
                minImg2: "/Images/Products/shu-pu-erh-9-3.jpg",
                minImg3: "/Images/Products/shu-pu-erh-9-4.jpg",
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
                title: "green tea #1",
                param: "green-tea-1",
                image: "/Images/Products/green-tea-1-1.jpg",
                price: 8,
                size: "0.78 oz (22 G) zip pouch",
                amount: 1,
                flow: 2,

                slug: ["products", "green-tea", "life-flow"],
                teaSizeAndPrice: [
                    {
                        size: "0.78 oz (22 G) zip pouch",
                        price: 8,
                    },
                    {
                        size: "1.5 oz (43 G) tin",
                        price: 12,
                    },
                    {
                        size: "3 oz (86 G) zip pouch",
                        price: 18,
                    },
                    {
                        size: "7.5 oz (215 G) zip pouch",
                        price: 35,
                    },
                ],
                minImg1: "/Images/Products/green-tea-1-2.jpg",
                minImg2: "/Images/Products/green-tea-1-3.jpg",
                minImg3: "/Images/Products/green-tea-1-4.jpg",
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
                title: "osmanthus oolong",
                param: "osmanthus-oolong",
                image: "/Images/Products/osmanthus-oolong-1.jpg",
                price: 15,
                size: "0.78 oz (22 G) zip pouch",
                amount: 1,
                flow: 1,

                slug: ["premium-tea", "products", "oolong-tea"],
                teaSizeAndPrice: [
                    {
                        size: "0.78 oz (22 G) zip pouch",
                        price: 15,
                    },
                    {
                        size: "1.5 oz (43 G) zip pouch",
                        price: 25,
                    },
                    {
                        size: "3 oz (86 G) tin",
                        price: 45,
                    },
                    {
                        size: "7.5 oz (215 G) zip pouch",
                        price: 100,
                    },
                ],
                minImg1: "/Images/Products/osmanthus-oolong-2.jpg",
                minImg2: "/Images/Products/osmanthus-oolong-3.jpg",
                minImg3: "/Images/Products/osmanthus-oolong-4.jpg",
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
                TopSale: true,
            },
            {
                id: 19,
                title: "wishan oolong #2",
                param: "wishan-oolong-2",
                image: "/Images/Products/wishan-oolong-2-1.jpg",
                price: 15,
                size: "0.78 oz (22 G) zip pouch",
                amount: 1,
                flow: 2,

                slug: ["premium-tea", "products", "life-flow", "oolong-tea"],
                teaSizeAndPrice: [
                    {
                        size: "0.78 oz (22 G) zip pouch",
                        price: 15,
                    },
                    {
                        size: "1.5 oz (43 G) zip pouch",
                        price: 25,
                    },
                    {
                        size: "3 oz (86 G) zip pouch",
                        price: 45,
                    },
                    {
                        size: "7.5 oz (215 G) zip pouch",
                        price: 100,
                    },
                ],
                minImg1: "/Images/Products/wishan-oolong-2-2.jpg",
                minImg2: "/Images/Products/wishan-oolong-2-3.jpg",
                minImg3: "/Images/Products/wishan-oolong-2-4.jpg",
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
                title: `dong ding lao shi`,
                param: `dong-ding-lao-shi`,
                image: "/Images/Products/dong-ding-lao-shi-1.jpg",
                price: 16,
                size: "0.78 oz (22 G) zip pouch",
                amount: 1,
                flow: null,

                slug: ["premium-tea", "products", "relax-flow"],
                teaSizeAndPrice: [
                    {
                        size: "0.78 oz (22 G) zip pouch",
                        price: 16,
                    },
                    {
                        size: "1.5 oz (43 G) zip pouch",
                        price: 27,
                    },
                    {
                        size: "3 oz (86 G) tin",
                        price: 50,
                    },
                    {
                        size: "7.5 oz (215 G) zip pouch",
                        price: 115,
                    },
                ],
                minImg1: "/Images/Products/dong-ding-lao-shi-2.jpg",
                minImg2: "/Images/Products/dong-ding-lao-shi-3.jpg",
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
                TopSale: true,
            },
            {
                id: 21,
                title: "wishan oolong #1",
                param: "wishan-oolong-1",
                image: "/Images/Products/wishan-oolong-1-1.jpg",
                price: 15,
                size: "0.78 oz (22 G) zip pouch",
                amount: 1,
                flow: 1,
                slug: ["premium-tea", "products", "relax-flow", "oolong-tea"],
                teaSizeAndPrice: [
                    {
                        size: "0.78 oz (22 G) zip pouch",
                        price: 15,
                    },
                    {
                        size: "1.5 oz (43 G) zip pouch",
                        price: 25,
                    },
                    {
                        size: "3 oz (86 G) zip pouch",
                        price: 45,
                    },
                    {
                        size: "7.5 oz (215 G) zip pouch",
                        price: 100,
                    },
                ],
                minImg1: "/Images/Products/wishan-oolong-1-2.jpg",
                minImg2: "/Images/Products/wishan-oolong-1-3.jpg",
                minImg3: "/Images/Products/wishan-oolong-1-4.jpg",
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
                TopSale: true,
            },
            {
                id: 22,
                title: "tie-guan yin #3",
                param: "tie-guan-yin-3",
                image: "/Images/Products/tie-guan-yin-3-1.jpg",
                price: 10,
                size: "0.78 oz (22 G) zip pouch",
                amount: 1,
                flow: 3,

                slug: ["products", "awareness-flow", "oolong-tea"],
                teaSizeAndPrice: [
                    {
                        size: "0.78 oz (22 G) zip pouch",
                        price: 10,
                    },
                    {
                        size: "0.78 oz (22 G) tin",
                        price: 10,
                    },
                    {
                        size: "1.5 oz (43 G) zip pouch",
                        price: 15,
                    },
                    {
                        size: "1.5 oz (43 G) tin",
                        price: 15,
                    },
                    {
                        size: "3 oz (100 G) trunk",
                        price: 30,
                    },
                ],
                minImg1: "/Images/Products/tie-guan-yin-3-2.jpg",
                minImg2: "/Images/Products/tie-guan-yin-3-3.jpg",
                minImg3: "/Images/Products/tie-guan-yin-3-4.jpg",
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
                title: "milk oolong",
                param: "milk-oolong",
                image: "/Images/Products/milk-oolong-1.jpg",
                price: 8,
                size: "0.78 oz (22 G) zip pouch",
                amount: 1,
                flow: 1,

                slug: ["products", "relax-flow", "oolong-tea"],
                teaSizeAndPrice: [
                    {
                        size: "0.78 oz (22 G) zip pouch",
                        price: 8,
                    },
                    {
                        size: "1.5 oz (43 G) zip pouch",
                        price: 12,
                    },
                    {
                        size: "3 oz (86 G) tin",
                        price: 18,
                    },
                    {
                        size: "7.5 oz (215 G) zip pouch",
                        price: 35,
                    },
                ],
                minImg1: "/Images/Products/milk-oolong-2.jpg",
                minImg2: "/Images/Products/milk-oolong-3.jpg",
                minImg3: "/Images/Products/milk-oolong-4.jpg",
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
                title: "shu pu-erh #2",
                param: "shu-pu-erh-2",
                image: "/Images/Products/shu-pu-erh-2-1.jpg",
                price: 7,
                size: "0.78 oz (22 G) zip pouch",
                amount: 1,
                flow: 4,

                slug: ["top-sales", "products", "energy-flow", "black-tea"],
                teaSizeAndPrice: [
                    {
                        size: "0.78 oz (22 G) zip pouch",
                        price: 7,
                    },
                    {
                        size: "1.5 oz (43 G) zip pouch",
                        price: 10,
                    },
                    {
                        size: "3 oz (86 G) tin",
                        price: 15,
                    },
                    {
                        size: "8.8 oz (250 G) brick",
                        price: 30,
                    },
                ],
                minImg1: "/Images/Products/shu-pu-erh-2-2.jpg",
                minImg2: "/Images/Products/shu-pu-erh-2-3.jpg",
                minImg3: "/Images/Products/shu-pu-erh-2-4.jpg",
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
                id: 25,
                title: "aged oolong #1",
                param: "aged-oolong-1",
                image: "/Images/Products/aged-oolong-1-1.jpg",
                price: 16,
                size: "0.78 oz (22 G) zip pouch",
                amount: 1,
                flow: 1,

                slug: ["premium-tea", "products", "relax-flow", "oolong-tea"],
                teaSizeAndPrice: [
                    {
                        size: "0.78 oz (22 G) zip pouch",
                        price: 16,
                    },
                    {
                        size: "1.5 oz (43 G) zip pouch",
                        price: 27,
                    },
                    {
                        size: "3 oz (86 G) tin",
                        price: 50,
                    },
                    {
                        size: "7.5 oz (215 G) zip pouch",
                        price: 115,
                    },
                ],
                minImg1: "/Images/Products/aged-oolong-1-2.jpg",
                minImg2: "/Images/Products/aged-oolong-1-3.jpg",
                minImg3: "/Images/Products/aged-oolong-1-4.jpg",
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
                title: "tie-guan yin #1",
                param: "tie-guan-yin-1",
                image: "/Images/Products/tie-guan-yin-1-1.jpg",
                price: 9,
                size: "0.78 oz (22 G) zip pouch",
                amount: 1,
                flow: 1,

                slug: ["top-sales", "products", "relax-flow", "oolong-tea"],
                teaSizeAndPrice: [
                    {
                        size: "0.78 oz (22 G) zip pouch",
                        price: 9,
                    },
                    {
                        size: "1.5 oz (43 G) tin",
                        price: 14,
                    },
                    {
                        size: "3 oz (86 G) zip pouch",
                        price: 21,
                    },
                    {
                        size: "3 oz (86 G) tin",
                        price: 21,
                    },
                    {
                        size: "7.5 oz (215 G) zip pouch",
                        price: 45,
                    },
                ],
                minImg1: "/Images/Products/tie-guan-yin-1-2.jpg",
                minImg2: "/Images/Products/tie-guan-yin-1-3.jpg",
                minImg3: "/Images/Products/tie-guan-yin-1-4.jpg",
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
                title: "dan tsung #1",
                param: "dan-tsung-1",
                image: "/Images/Products/dan-tsung-1-1.jpg",
                price: 19,
                size: "0.78 oz (22 G) zip pouch",
                amount: 1,
                flow: 4,

                slug: ["premium-tea", "products", "energy-flow", "oolong-tea"],
                teaSizeAndPrice: [
                    {
                        size: "0.78 oz (22 G) zip pouch",
                        price: 19,
                    },
                    {
                        size: "0.78 oz (22 G) tin",
                        price: 19,
                    },
                    {
                        size: "1.5 oz (43 G) zip pouch",
                        price: 33,
                    },
                    {
                        size: "1.5 oz (43 G) tin",
                        price: 33,
                    },
                    {
                        size: "3 oz (86 G) zip pouch",
                        price: 60,
                    },
                    {
                        size: "3 oz (86 G) tin",
                        price: 60,
                    },
                    {
                        size: "7.5 oz (215 G) zip pouch",
                        price: 145,
                    },
                ],
                minImg1: "/Images/Products/dan-tsung-1-2.jpg",
                minImg2: "/Images/Products/dan-tsung-1-3.jpg",
                minImg3: "/Images/Products/dan-tsung-1-4.jpg",
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
                title: "shu pu-erh #18",
                param: "shu-pu-erh-18",
                image: "/Images/Products/shu-pu-erh-18-1.jpg",
                price: 10,
                size: "0.78 oz (22 G) zip pouch",
                amount: 1,
                flow: 4,

                slug: ["top-sales", "products", "energy-flow", "black-tea"],
                teaSizeAndPrice: [
                    {
                        size: "0.78 oz (22 G) zip pouch",
                        price: 10,
                    },
                    {
                        size: "0.78 oz (22 G) tin",
                        price: 10,
                    },
                    {
                        size: "1.5 oz (43 G) zip pouch",
                        price: 15,
                    },
                    {
                        size: "1.5 oz (43 G) tin",
                        price: 15,
                    },
                    {
                        size: "3 oz (86 G) zip pouch",
                        price: 25,
                    },
                    {
                        size: "3 oz (86 G) tin",
                        price: 25,
                    },
                    {
                        size: "7.5 oz (172 G) zip pouch",
                        price: 40,
                    },
                    {
                        size: "12.6 oz (357 G) zip pouch",
                        price: 60,
                    },
                ],
                minImg1: "/Images/Products/shu-pu-erh-18-2.jpg",
                minImg2: "/Images/Products/shu-pu-erh-18-3.jpg",
                minImg3: "/Images/Products/shu-pu-erh-18-4.jpg",
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
                title: "green tea #2",
                param: "green-tea-2",
                image: "/Images/Products/green-tea-2-1.jpg",
                price: 17,
                size: "0.78 oz (22 G) zip pouch",
                amount: 1,
                flow: 2,

                slug: ["products", "life-flow", "green-tea"],
                teaSizeAndPrice: [
                    {
                        size: "0.78 oz (22 G) zip pouch",
                        price: 17,
                    },
                    {
                        size: "0.78 oz (22 G) tin",
                        price: 17,
                    },
                    {
                        size: "1.5 oz (43 G) tin",
                        price: 27,
                    },
                    {
                        size: "3 oz (86 G) zip pouch",
                        price: 49,
                    },
                    {
                        size: "7.5 oz (215 G) zip pouch",
                        price: 115,
                    },
                ],
                minImg1: "/Images/Products/green-tea-2-2.jpg",
                minImg2: "/Images/Products/green-tea-2-3.jpg",
                minImg3: "/Images/Products/green-tea-2-4.jpg",
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
            },
            {
                id: 30,
                title: "green tea flow",
                param: "green-tea_flow",
                image: "/Images/Products/green-tea_flow-1.jpg",
                price: 50,
                size: null,
                amount: 1,
                flow: null,
                slug: ["sets", "products"],
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 50,
                    },
                ],
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
                TopSale: true,
            },
            {
                id: 31,
                title: "pu-erh flow",
                param: "pu-erh-flow",
                image: "/Images/Products/pu-erh-flow-1.jpg",
                price: 55,
                size: null,
                amount: 1,
                flow: null,
                slug: ["sets", "products"],
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 55,
                    },
                ],
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
                title: "teaFlow",
                param: "tea-flow",
                image: "/Images/Products/tea-flow-1.jpg",
                price: null,
                size: null,
                amount: 1,
                flow: null,
                slug: ["sets", "products"],
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 72,
                    },
                ],
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
                title: "black tea #2",
                param: "black-tea-2",
                image: "/Images/Products/black-tea-2-1.jpg",
                price: 17,
                size: "0.78 oz (22 G) zip pouch",
                amount: 1,
                flow: 2,
                slug: ["premium-tea", "products", "life-flow", "black-tea"],
                teaSizeAndPrice: [
                    {
                        size: "0.78 oz (22 G) zip pouch",
                        price: 17,
                    },
                    {
                        size: "1.5 oz (43 G) tin",
                        price: 27,
                    },
                    {
                        size: "3 oz (86 G) zip pouch",
                        price: 49,
                    },
                    {
                        size: "7.5 oz (215 G) zip pouch",
                        price: 115,
                    },
                ],
                minImg1: "/Images/Products/black-tea-2-2.jpg",
                minImg2: "/Images/Products/black-tea-2-3.jpg",
                minImg3: "/Images/Products/black-tea-2-4.jpg",
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
                id: 34,
                title: "red tea #15",
                param: "red-tea-15",
                image: "/Images/Products/red-tea-15-1.jpg",
                price: 19,
                size: "0.78 oz (22 G) zip pouch",
                amount: 1,
                flow: 3,
                slug: ["premium-tea", "products", "awareness-flow", "red-tea"],
                teaSizeAndPrice: [
                    {
                        size: "0.78 oz (22 G) zip pouch",
                        price: 19,
                    },
                    {
                        size: "1.5 oz (43 G) tin",
                        price: 33,
                    },
                    {
                        size: "3 oz (86 G) zip pouch",
                        price: 60,
                    },
                    {
                        size: "7.5 oz (215 G) zip pouch",
                        price: 145,
                    },
                ],
                minImg1: "/Images/Products/red-tea-15-2.jpg",
                minImg2: "/Images/Products/red-tea-15-3.jpg",
                minImg3: "/Images/Products/red-tea-15-4.jpg",
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
                id: 35,
                title: "green tea #4",
                param: "green-tea-4",
                image: "/Images/Products/green-tea-4-1.jpg",
                price: 8,
                size: "0.78 oz (22 G) zip pouch",
                amount: 1,
                flow: 2,
                slug: ["top-sales", "products", "life-flow", "green-tea"],
                teaSizeAndPrice: [
                    {
                        size: "0.78 oz (22 G) zip pouch",
                        price: 8,
                    },
                    {
                        size: "0.78 oz (22 G) tin",
                        price: 8,
                    },
                    {
                        size: "1.5 oz (43 G) tin",
                        price: 12,
                    },
                    {
                        size: "3 oz (86 G) zip pouch",
                        price: 18,
                    },
                    {
                        size: "7.5 oz (215 G) zip pouch",
                        price: 35,
                    },
                ],
                minImg1: "/Images/Products/green-tea-4-2.jpg",
                minImg2: "/Images/Products/green-tea-4-3.jpg",
                minImg3: "/Images/Products/green-tea-4-4.jpg",
                availability: "in stock",
                TastingNotes: `mild taste without astringency or bitterness, with a slight sourness of green apples. The aftertaste is long, juicy, refreshing. Impact: perfectly refreshes, and gently tones. A good option for morning or afternoon tea.`,
                aboutProduct: `
                <p>Green tea with jasmine petals. Thanks to natural aromatization, jasmine’s fragrance is delicate, and soft, and lasts until the end of the tea party. </p>
                <p>Fragrance: subtle, sweet, with a pronounced note of jasmine.</p> 
                <p>Taste and aftertaste: mild taste without astringency or bitterness, with a slight sourness of green apples. The aftertaste is long, juicy, and refreshing. </p> 
                <p>Effect: perfectly refreshes, gently tones. A good option for morning or afternoon tea.</p>
                `,
                SteepingInstructions: `<p>Tea Preparation</p>
                <p>Add 6 grams to a Teapot (300 ml). </p> 
                <p>Use 180°F water. </p> 
                <p>Infuse the brew for 2-3 minutes.</p>`,
                flavor: "Flavor: mild, sourness of the green apple",
                Ingredients: "Organic green tea",
            },
            {
                id: 36,
                title: "shu pu-erh #16",
                param: "shu-pu-erh-16",
                image: "/Images/Products/shu-pu-erh-16-1.jpg",
                price: 18,
                size: "0.78 oz (22 G) zip pouch",
                amount: 1,
                flow: 4,

                slug: ["premium-tea", "products", "energy-flow", "black-tea"],
                teaSizeAndPrice: [
                    {
                        size: "0.78 oz (22 G) zip pouch",
                        price: 18,
                    },
                    {
                        size: "1.5 oz (43 G) tin",
                        price: 30,
                    },
                    {
                        size: "3 oz (86 G) zip pouch",
                        price: 57,
                    },
                    {
                        size: "7.5 oz (215 G) zip pouch",
                        price: 120,
                    },
                ],
                minImg1: "/Images/Products/shu-pu-erh-16-2.jpg",
                minImg2: "/Images/Products/shu-pu-erh-16-3.jpg",
                minImg3: "/Images/Products/shu-pu-erh-16-4.jpg",
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
                id: 37,
                title: "red tea #5",
                param: "red-tea-5",
                image: "/Images/Products/red-tea-5-1.jpg",
                price: 21,
                size: "0.78 oz (22 G) zip pouch",
                amount: 1,
                flow: 3,
                slug: [
                    "premium-tea",
                    "top-sales",
                    "products",
                    "awareness-flow",
                    "red-tea",
                ],
                teaSizeAndPrice: [
                    {
                        size: "0.78 oz (22 G) zip pouch",
                        price: 21,
                    },
                    {
                        size: "1.5 oz (43 G) tin",
                        price: 37,
                    },
                    {
                        size: "3 oz (86 G) zip pouch",
                        price: 70,
                    },
                    {
                        size: "7.5 oz (215 G) zip pouch",
                        price: 170,
                    },
                ],
                minImg1: "/Images/Products/red-tea-5-2.jpg",
                minImg2: "/Images/Products/red-tea-5-3.jpg",
                minImg3: "/Images/Products/red-tea-5-4.jpg",
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
                id: 38,
                title: "green tea #3",
                param: "green-tea-3",
                image: "/Images/Products/green-tea-3-1.jpg",
                price: 9,
                size: "0.78 oz (22 G) zip pouch",
                amount: 1,
                flow: 2,
                slug: ["top-sales", "products", "life-flow", "green-tea"],
                teaSizeAndPrice: [
                    {
                        size: "0.78 oz (22 G) zip pouch",
                        price: 9,
                    },
                    {
                        size: "1.5 oz (43 G) tin",
                        price: 14,
                    },
                    {
                        size: "3 oz (86 G) zip pouch",
                        price: 21,
                    },
                    {
                        size: "7.5 oz (215 G) zip pouch",
                        price: 45,
                    },
                ],
                minImg1: "/Images/Products/green-tea-3-2.jpg",
                minImg2: "/Images/Products/green-tea-3-3.jpg",
                minImg3: "/Images/Products/green-tea-3-4.jpg",
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
                id: 39,
                title: "cha hai #4",
                param: "cha-hai-4",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069cd_cha-hai-4-new-min.jpg",
                price: 22,
                size: null,
                amount: 1,
                flow: null,
                slug: "accessories",
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 22,
                    },
                ],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80694e_img_3493-1000x1000-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806950_img_3492-1000x1000-min.jpg",
                minImg3: null,
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Cha hai Sama Doyo, glass, 300 ml",
                Ingredients: null,
            },
            {
                id: 40,
                title: "teapot #1",
                param: "teapot-1",
                image: "/Images/Products/teapot-1-1.jpg",
                price: 85,
                size: null,
                amount: 1,
                flow: null,
                slug: "teaware",
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 85,
                    },
                ],
                minImg1: "/Images/Products/teapot-1-2.jpeg",
                minImg2: "/Images/Products/teapot-1-3.jpeg",
                minImg3: "/Images/Products/teapot-1-4.jpeg",
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Tea ceremony teapot, Yixing clay, 135 ml",
                Ingredients: null,
            },
            {
                id: 41,
                title: "teapot #2",
                param: "teapot-2",
                image: "/Images/Products/teapot-2-1.jpg",
                price: 70,
                size: null,
                amount: 1,
                flow: null,
                slug: ["top-sales", "teaware"],
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 70,
                    },
                ],
                minImg1: "/Images/Products/teapot-2-2.jpeg",
                minImg2: "/Images/Products/teapot-2-3.jpeg",
                minImg3: "/Images/Products/teapot-2-4.jpeg",
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Tea ceremony teapot, Yixing clay, 160 ml",
                Ingredients: null,
            },
            {
                id: 42,
                title: "teapot #5",
                param: "teapot-5",
                image: "/Images/Products/teapot-5-1.jpg",
                price: 100,
                size: null,
                amount: 1,
                flow: null,
                slug: ["new-arrivals", "teaware"],
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 100,
                    },
                ],
                minImg1: "/Images/Products/teapot-5-2.jpg",
                minImg2: "/Images/Products/teapot-5-3.jpg",
                minImg3: "/Images/Products/teapot-5-4.jpg",
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Tea ceremony teapot, Yixing clay, 105 ml",
                Ingredients: null,
            },
            {
                id: 43,
                title: "gaiwan #1",
                param: "gaiwan-1",
                image: "/Images/Products/gaiwan-1-1.jpg",
                price: 18,
                size: null,
                amount: 1,
                flow: null,
                slug: ["top-sales", "teaware"],
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 18,
                    },
                ],
                minImg1: "/Images/Products/gaiwan-1-2.jpg",
                minImg2: "/Images/Products/gaiwan-1-3.jpg",
                minImg3: null,
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Gaiwan Cosmos, clay, glaze, 130 ml",
                Ingredients: null,
            },
            {
                id: 44,
                title: "teacup #7",
                param: "teacup-7",
                image: "/Images/Products/teacup-7-1.jpg",
                price: 5,
                size: null,
                amount: 1,
                flow: null,
                slug: "teaware",
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 5,
                    },
                ],
                minImg1: "/Images/Products/teacup-7-2.jpg",
                minImg2: "/Images/Products/teacup-7-3.jpg",
                minImg3: null,
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Teacup, white matte, porcelain, 60 ml",
                Ingredients: null,
            },
            {
                id: 45,
                title: "teacup #1",
                param: "teacup-1",
                image: "/Images/Products/teacup-1-1.jpg",
                price: 8,
                size: null,
                amount: 1,
                flow: null,
                slug: ["top-sales", "teaware"],
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 8,
                    },
                ],
                minImg1: "/Images/Products/teacup-1-2.jpeg",
                minImg2: "/Images/Products/teacup-1-3.jpeg",
                minImg3: null,
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Teacup sakura 326, clay, glaze, 65 ml",
                Ingredients: null,
            },
            {
                id: 46,
                title: "teacup #2",
                param: "teacup-2",
                image: "/Images/Products/teacup-2-1.jpg",
                price: 5,
                size: null,
                amount: 1,
                flow: null,
                slug: "teaware",
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 5,
                    },
                ],
                minImg1: "/Images/Products/teacup-2-2.jpeg",
                minImg2: "/Images/Products/teacup-2-3.jpeg",
                minImg3: null,
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Teacup blue sky, porcelain, 60 ml",
                Ingredients: null,
            },
            {
                id: 47,
                title: "gaiwan #4",
                param: "gaiwan-4",
                image: "/Images/Products/gaiwan-4-1.jpeg",
                price: 36,
                size: null,
                amount: 1,
                flow: null,
                slug: "teaware",
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 36,
                    },
                ],
                minImg1: "/Images/Products/gaiwan-4-2.jpeg",
                minImg2: "/Images/Products/gaiwan-4-3.jpeg",
                minImg3: null,
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Gaiwan Fan Gu, porcelain, 185 ml",
                Ingredients: null,
            },
            {
                id: 48,
                title: "teapot #4",
                param: "teapot-4",
                image: "/Images/Products/teapot-4-1.jpg",
                price: 70,
                size: null,
                amount: 1,
                flow: null,
                slug: ["new-arrivals", "teaware"],
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 70,
                    },
                ],
                minImg1: "/Images/Products/teapot-4-2.jpg",
                minImg2: "/Images/Products/teapot-4-3.jpg",
                minImg3: "/Images/Products/teapot-4-4.jpg",
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Tea ceremony teapot, Yixing clay, 165 ml",
                Ingredients: null,
            },
            {
                id: 49,
                title: "teapot #3",
                param: "teapot-3",
                image: "/Images/Products/teapot-3-1.jpg",
                price: 80,
                size: null,
                amount: 1,
                flow: null,
                slug: "teaware",
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 80,
                    },
                ],
                minImg1: "/Images/Products/teapot-3-2.jpg",
                minImg2: "/Images/Products/teapot-3-3.jpg",
                minImg3: "/Images/Products/teapot-3-4.jpg",
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Tea ceremony teapot, Yixing clay, 190 ml",
                Ingredients: null,
            },
            {
                id: 50,
                title: "gaiwan #5",
                param: "gaiwan-5",
                image: "/Images/Products/gaiwan-5-1.jpeg",
                price: 30,
                size: null,
                amount: 1,
                flow: null,
                slug: ["teaware", "accessories"],
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 30,
                    },
                ],
                minImg1: "/Images/Products/gaiwan-5-2.jpeg",
                minImg2: "/Images/Products/gaiwan-5-3.jpeg",
                minImg3: null,
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Gaiwan Cobalt Lotus, hand-painted, 170 ml",
                Ingredients: null,
            },
            {
                id: 51,
                title: "teacup #5",
                param: "teacup-5",
                image: "/Images/Products/teacup-5-1.jpg",
                price: 18,
                size: null,
                amount: 1,
                flow: null,
                slug: "teaware",
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 18,
                    },
                ],
                minImg1: "/Images/Products/teacup-5-2.jpg",
                minImg2: "/Images/Products/teacup-5-3.jpg",
                minImg3: null,
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Teacup, lava ceramic, 100 ml",
                Ingredients: null,
            },
            {
                id: 52,
                title: "teacup #8",
                param: "teacup-8",
                image: "/Images/Products/teacup-8-1.jpg",
                price: 18,
                size: null,
                amount: 1,
                flow: null,
                slug: "teaware",
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 18,
                    },
                ],
                minImg1: "/Images/Products/teacup-8-2.jpg",
                minImg2: "/Images/Products/teacup-8-3.jpg",
                minImg3: null,
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Teacup, lava ceramic, 100 ml",
                Ingredients: null,
            },
            {
                id: 53,
                title: "gaiwan #2",
                param: "gaiwan-2",
                image: "/Images/Products/gaiwan-2-1.jpeg",
                price: 26,
                size: null,
                amount: 1,
                flow: null,
                slug: ["teaware", "top-sales"],
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 26,
                    },
                ],
                minImg1: "/Images/Products/gaiwan-2-2.jpeg",
                minImg2: "/Images/Products/gaiwan-2-3.jpeg",
                minImg3: "/Images/Products/gaiwan-2-4.jpeg",
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Gaiwan Cranes, porcelain, 180 ml",
                Ingredients: null,
            },
            {
                id: 54,
                title: "chaban #2",
                param: "chaban-2",
                image: "/Images/Products/chaban-2-1.jpeg",
                price: 150,
                size: null,
                amount: 1,
                flow: null,
                slug: "accessories",
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 150,
                    },
                ],
                minImg1: "/Images/Products/chaban-2-2.jpeg",
                minImg2: "/Images/Products/chaban-2-3.jpeg",
                minImg3: "/Images/Products/chaban-2-4.jpeg",
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Chaban (Tea Tray) made of wood, solid",
                Ingredients: null,
            },
            {
                id: 55,
                title: "pu-erh tea knife #1",
                param: "pu-erh-tea-knife-1",
                image: "/Images/Products/pu-erh-tea-knife-1-1.jpeg",
                price: 9,
                size: null,
                amount: 1,
                flow: null,
                slug: "accessories",
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 9,
                    },
                ],
                minImg1: "/Images/Products/pu-erh-tea-knife-1-2.jpeg",
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
                id: 56,
                title: "chaban #1",
                param: "chaban-1",
                image: "/Images/Products/chaban-1-1.jpeg",
                price: 110,
                size: null,
                amount: 1,
                flow: null,
                slug: "accessories",
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 110,
                    },
                ],
                minImg1: "/Images/Products/chaban-1-2.jpeg",
                minImg2: "/Images/Products/chaban-1-3.jpeg",
                minImg3: "/Images/Products/chaban-1-4.jpeg",
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: `Chaban (Tea Tray), "Black Horse", bamboo`,
                Ingredients: null,
            },
            {
                id: 57,
                title: "chaban #3",
                param: "chaban-3",
                image: "/Images/Products/chaban-3-1.jpeg",
                price: 60,
                size: null,
                amount: 1,
                flow: null,
                slug: "accessories",
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 60,
                    },
                ],
                minImg1: "/Images/Products/chaban-3-2.jpeg",
                minImg2: "/Images/Products/chaban-3-3.jpeg",
                minImg3: "/Images/Products/chaban-3-4.jpeg",
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: `Chaban (Tea Tray) "With a bird", bamboo`,
                Ingredients: null,
            },
            {
                id: 58,
                title: "tweezers tea #1",
                param: "tweezers-tea-1",
                image: "/Images/Products/tweezers-tea-1-1.jpeg",
                price: 5,
                size: null,
                amount: 1,
                flow: null,
                slug: "accessories",
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 5,
                    },
                ],
                minImg1: "/Images/Products/tweezers-tea-1-2.jpeg",
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
                id: 59,
                title: "figure #7",
                param: "figure-7",
                image: "/Images/Products/figure-7-1.jpg",
                price: 22,
                size: null,
                amount: 1,
                flow: null,
                slug: ["new-arrivals", "accessories"],
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 22,
                    },
                ],
                minImg1: "/Images/Products/figure-7-2.jpg",
                minImg2: "/Images/Products/figure-7-3.jpg",
                minImg3: null,
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Figurine of a seated monk, clay, glaze",
                Ingredients: null,
            },
            {
                id: 60,
                title: "teacup #9",
                param: "teacup-9",
                image: "/Images/Products/teacup-9-1.jpg",
                price: 14,
                size: null,
                amount: 1,
                flow: null,
                slug: ["new-arrivals", "teaware"],
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 14,
                    },
                ],
                minImg1: "/Images/Products/teacup-9-2.jpg",
                minImg2: "/Images/Products/teacup-9-3.jpg",
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
                title: "teacup #10",
                param: "teacup-10",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069e2_teacup-10-new-1-min.jpg",
                price: 14,
                size: null,
                amount: 1,
                flow: null,
                slug: ["new-arrivals", "teaware"],
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 14,
                    },
                ],
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
                title: "teacup #11",
                param: "teacup-11",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069e3_teacup-11-new-1-min.jpg",
                price: 10,
                size: null,
                amount: 1,
                flow: null,
                slug: ["new-arrivals", "teaware"],
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 10,
                    },
                ],
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
                title: "chaban #3",
                param: "chaban-3",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069c4_chaban-3-new-1-min.jpeg",
                price: 60,
                size: null,
                amount: 1,
                flow: null,
                slug: ["top-sales", "accessories"],
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 60,
                    },
                ],
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
                title: "fireproof teapot #1",
                param: "fireproof-teapot-1",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069d1_teapot-is-fireproof-glass-1-new-min.jpeg",
                price: 25,
                size: null,
                amount: 1,
                flow: null,
                slug: ["top-sales", "accessories"],
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 25,
                    },
                ],
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
                title: "cha he #1",
                param: "cha-he-1",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069c9_Cha%20He%20%231%20-%20new-min.jpg",
                price: 9,
                size: null,
                amount: 1,
                flow: null,
                slug: ["top-sales", "accessories"],
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 9,
                    },
                ],
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
                title: "cha hai #1",
                param: "cha-hai-1",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069d0_cha-hai-1-new-min.jpeg",
                price: 15,
                size: null,
                amount: 1,
                flow: null,
                slug: "accessories",
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 15,
                    },
                ],
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
                title: "chaban #4",
                param: "chaban-4",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069c3_Chaban%20%234-new-1-min.jpg",
                price: 190,
                size: null,
                amount: 1,
                flow: null,
                slug: ["new-arrivals", "accessories"],
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 190,
                    },
                ],
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
                title: "cha hai #2",
                param: "cha-hai-2",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069cf_cha-hai-2-new-min.jpg",
                price: 18,
                size: null,
                amount: 1,
                flow: null,
                slug: "accessories",
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 18,
                    },
                ],
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
                title: "cha hai #3",
                param: "cha-hai-3",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069ce_cha-hai-3-new-min.jpg",
                price: 26,
                size: null,
                amount: 1,
                flow: null,
                slug: "accessories",
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 26,
                    },
                ],
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
                title: "figure #1",
                param: "figure-1",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069e4_figure-1-min.jpg",
                price: 16,
                size: null,
                amount: 1,
                flow: null,
                slug: "accessories",
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 16,
                    },
                ],
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
                title: "teacup #6",
                param: "teacup-6",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069de_teacup-6-new-min.jpg",
                price: 9,
                size: null,
                amount: 1,
                flow: null,
                slug: "teaware",
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 9,
                    },
                ],
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
                title: "teacup #3",
                param: "teacup-3",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069db_tea-cup-3-new-1-min.jpg",
                price: 23,
                size: null,
                amount: 1,
                flow: null,
                slug: "teaware",
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 23,
                    },
                ],
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
                title: "gaiwan #3",
                param: "gaiwan-3",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069d6_gaiwan-3-new-1-min.jpeg",
                price: 36,
                size: null,
                amount: 1,
                flow: null,
                slug: "teaware",
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 36,
                    },
                ],
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
                title: "figure #3",
                param: "figure-3",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069d3_figure-3-new-1-min.jpg",
                price: 23,
                size: null,
                amount: 1,
                flow: null,
                slug: ["new-arrivals", "accessories"],
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 23,
                    },
                ],
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
                title: "cha hai #7",
                param: "cha-hai-7",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069ca_cha-hai-7-new-min.jpg",
                price: 23,
                size: null,
                amount: 1,
                flow: null,
                slug: ["new-arrivals", "accessories"],
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 23,
                    },
                ],
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
                title: "figure #4",
                param: "figure-4",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069e6_figure-4-min.jpg",
                price: 17,
                size: null,
                amount: 1,
                flow: null,
                slug: ["new-arrivals", "accessories"],
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 17,
                    },
                ],
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
                title: "figure #6",
                param: "figure-6",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069e7_figure-6-min.jpg",
                price: 37,
                size: null,
                amount: 1,
                flow: null,
                slug: ["new-arrivals", "accessories"],
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 37,
                    },
                ],
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
                title: "chaban #7",
                param: "chaban-7",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069c1_chaban-7-new-1-min.jpg",
                price: 44,
                size: null,
                amount: 1,
                flow: null,
                slug: ["new-arrivals", "accessories"],
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 44,
                    },
                ],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806976_img_0001-1000x1000.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806972_img_0002-1000x1000.jpg",
                minImg3:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806974_img_0003-1000x1000.jpg",
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Chaban (Tea Tray) Classic mini",
                Ingredients: null,
            },
            {
                id: 79,
                title: "cha hai #6",
                param: "cha-hai-6",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069cb_cha-hai-6-new-min.jpg",
                price: 12,
                size: null,
                amount: 1,
                flow: null,
                slug: ["new-arrivals", "accessories"],
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 12,
                    },
                ],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80695e_p1005174-1000x1000-min.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80695c_dscf9642-1000x1000-min.jpg",
                minImg3: null,
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Cha hai Thermos small, glass, 180 ml",
                Ingredients: null,
            },
            {
                id: 80,
                title: "figure #5",
                param: "figure-5",
                image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069d2_figure-5-new-1-min.jpg",
                price: 16,
                size: null,
                amount: 1,
                flow: null,
                slug: ["new-arrivals", "accessories"],
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 16,
                    },
                ],
                minImg1:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80696f_img_9343-1000x1000.jpg",
                minImg2:
                    "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80696e_img_9344-1000x1000.jpg",
                minImg3: null,
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Figure of Pig, clay",
                Ingredients: null,
            },
            {
                id: 81,
                title: "teacup #4",
                param: "teacup-4",
                image: "/Images/Products/teacup-4-1.jpg",
                price: 6,
                size: null,
                amount: 1,
                flow: null,
                slug: "teaware",
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 6,
                    },
                ],
                minImg1: "/Images/Products/teacup-4-2.jpg",
                minImg2: "/Images/Products/teacup-4-3.jpg",
                minImg3: null,
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Teacup, red porcelain, 75 ml",
                Ingredients: null,
            },
            {
                id: 82,
                title: "cha hai #5",
                param: "cha-hai-5",
                image: "/Images/Products/cha-hai-5-1.jpg",
                price: 10,
                size: null,
                amount: 1,
                flow: null,
                slug: ["accessories", "teaware", "new-arrivals"],
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 10,
                    },
                ],
                minImg1: "/Images/Products/cha-hai-5-2.jpg",
                minImg2: "/Images/Products/cha-hai-5-3.jpg",
                minImg3: null,
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Cha hay Square, glass, 250 ml",
                Ingredients: null,
            },
            {
                id: 83,
                title: "chaban #5",
                param: "chaban-5",
                image: "/Images/Products/chaban-5-1.jpg",
                price: 90,
                size: null,
                amount: 1,
                flow: null,
                slug: ["accessories", "new-arrivals"],
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 90,
                    },
                ],
                minImg1: "/Images/Products/chaban-5-2.jpg",
                minImg2: "/Images/Products/chaban-5-3.jpg",
                minImg3: "/Images/Products/chaban-5-4.jpg",
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Chaban (Tea Tray), bamboo, dark",
                Ingredients: null,
            },
            {
                id: 84,
                title: "figure #2",
                param: "figure-2",
                image: "/Images/Products/figure-2-1.jpg",
                price: 12,
                size: null,
                amount: 1,
                flow: null,
                slug: "accessories",
                teaSizeAndPrice: [
                    {
                        size: null,
                        price: 12,
                    },
                ],
                minImg1: "/Images/Products/figure-2-2.jpg",
                minImg2: "/Images/Products/figure-2-3.jpg",
                minImg3: null,
                availability: "in stock",
                TastingNotes: null,
                aboutProduct: null,
                SteepingInstructions: null,
                flavor: "Figure of Mini Cat, porcelain",
                Ingredients: null,
            },
        ],
        journals: [
            {
                id: 1,
                date: "Jun 8,2023",
                title: "What is matcha?",
                param: "what-is-matcha",
                mainImgSrc: "/Images/Journal/journal-1.jpeg",
                artiest: "Paul White",
                pageContent: `
                <p>
                        Matcha tea has gained immense popularity in World
                        recently. The name "抹茶" (mattya or matcha) translates
                        from Japanese as "ground tea." Contrary to common myth,
                        this tea was invented in China, not in Japan as commonly
                        believed. During the Tang Dynasty in China (618-907 AD),
                        tea leaves were roasted and ground into a powder, which
                        was then brewed with salt and mint. During the Song
                        Dynasty (960-1279 AD), powdered tea became more popular:
                        it was brewed by pouring hot water over the tea powder
                        in a cup and whisking it with a bamboo whisk until a
                        frothy layer formed. The preparation of powdered tea
                        became a ritual among the Chan Buddhists. They brought
                        tea to Japan along with Buddhism. This led to the
                        formation of the Zen school and the transformation of
                        the tea-drinking process into a complex ceremony with
                        many rules and conventions.
                    </p>
                    <p className="font-bold">
                        "A person who has not drunk tea is out of harmony with
                        the universe." Japanese proverb
                    </p>
                    <p>
                        In the modern world, powdered tea has gained popularity
                        due to its invigorating properties and high vitamin
                        content. Nowadays, you can buy this tea in many
                        specialized stores and even in the mass market, as the
                        simpler grade of powder is used in tea cocktails and
                        culinary applications.
                    </p>
                    <p>
                        We offer matcha tea grown and produced in China, in the
                        Zhejiang province, in a large certified production
                        facility. On our website, you will find two options for
                        powdered tea - <a href="">ceremonial matcha</a> and a
                        simple, everyday variation.
                    </p>
                    <img
                        className="rounded-[5vw] w-[80%]"
                        src="/Images/Journal/journal-1-1.png"
                        alt=""
                    />
                    <p className="font-bold">
                        Health benefits
                    </p>
                    <p>
                        To make powdered tea, young leaves of the early
                        vegetative stage are used, and minimal processing is
                        involved. As a result, we obtain a highly concentrated
                        powder rich in beneficial elements that are easily
                        absorbed by the body. With just one bowl of matcha, you
                        will experience vitality, vitamins, and energy boosts
                        for the entire day!
                    </p>
                    <img
                        className="rounded-[5vw] w-[80%]"
                        src="/Images/Journal/journal-1-2.png"
                        alt=""
                    />
                    <p>
                        Research has shown that matcha antioxidant levels are
                        nearly 140 times higher than regular green tea
                        varieties. Additionally, this beverage contains the
                        amino acid L-theanine, which uplifts and stabilizes mood
                        without caffeine side effects. Matcha is also abundant
                        in calcium, potassium, and vitamins A, B, C, E, and K.
                        Moreover, the powdered form is easily and rapidly
                        absorbed by the body.
                    </p>
                    <p className="font-bold">
                        How to brew matcha?
                    </p>
                    <p>
                        You will need powdered tea, a bamboo whisk for whisking,
                        a chawan (tea bowl) for tea preparation, and a special
                        bamboo spoon.
                    </p>
                    <img
                        className="rounded-[5vw] w-[80%]"
                        src="/Images/Journal/journal-1-3.png"
                        alt=""
                    />
                    <p>
                        Prepare your Utensils. Heat the chawan before use and
                        wipe it dry. Also, slightly moisten the bamboo whisk,
                        and wipe the bamboo spoon dry to remove dust.
                    </p>
                    <p>
                        Prepare hot water (80-85°C) and add one spoonful of
                        powdered tea to the chawan. For a stronger tea, use
                        approximately 50ml of water for 4g of matcha. For a
                        milder tea, use 100ml of water for 2g.
                    </p>
                    <p>
                        Slowly pour hot water over the powder, immerse the
                        whisk, mix the contents of the bowl, and whisk the tea
                        gently until frothy.
                    </p>
                    <p>
                        Drink the entire beverage, including the finely ground
                        green tea leaves. Enjoy the invigorating and beneficial
                        effects!
                    </p>`,
            },
            {
                id: 2,
                date: "May 4,2023",
                title: "How to make tea on fire, lazy cooking",
                param: "how-to-make-tea-on-fire-lazy-cooking",
                mainImgSrc: "/Images/Journal/journal-2.jpeg",
                artiest: "Paul White",

                pageContent: `
                    <p>
                        We will be talking about brewing, specifically brewing
                        tea. Many people have doubts, questions, and even fears
                        about this process, wondering why it's necessary to brew
                        tea since it might ruin the beverage. But there's no
                        need to be afraid; after a detailed explanation,
                        everything will fall into place, and you'll be able to
                        easily brew a delicious cup of tea.
                    </p>
                    <img
                            className="rounded-[5vw] w-[80%]"
                            src="/Images/Journal/journal-2-1.jpeg"
                            alt=""
                        />
                    <p className="text-[#9494A2] mt-5 sm:mt-[2vw]">
                            How long does cooking take? From 6 to 10 minutes. On
                            this note, we talk about the fastest option.
                        </p>
                    <p className="font-bold">
                        Preparation
                    </p>
                    <p>
                        Place a glass or clay teapot on a glass-ceramic stovetop
                        surface. Alternatively, any convenient container, such
                        as a pot, ladle, bucket, or Turkish pot, will work.
                        There are no strict rules here, but using a glass teapot
                        adds visual pleasure to the magical transformation of
                        simple water and tea leaves into an extraordinary
                        beverage!
                    </p>
                    <p>
                        You will need the following items:
                    </p>
                    <p>Stove or burner.</p>
                    <p>
                        Teapot of any capacity.
                    </p>
                    <p>
                        Gaiwan for soaking the tea leaves.
                    </p>
                    <p>
                        Tool for unwinding the funnel. It is not necessary to
                        make dragon tails at the bottom of the teapot, as
                        prescribed by the Tea Canon. But a funnel is needed to
                        immerse all the tea leaves into the boiling water at
                        once, distribute them there, and start brewing. Wooden
                        tongs, a bamboo stick, or a branch - any item will do.
                    </p>
                    <p>
                        Good water and quality tea are the main components of
                        brewing tea.
                    </p>
                    <p>
                        Important questions: how much tea should you use in
                        weight or volume? How do you calculate the amount of
                        water for the right ratio of ingredients? The
                        calculation is that for 100 ml of water, you need 1 gram
                        of tea. But these are approximate guidelines, and each
                        type of tea requires its own approach. Red and green
                        shen teas require slightly less tea. More mellow aged
                        tea, tea buds, or Hei Cha require a little more. Shu
                        Pu-erh tea is taken at a ratio of about 9 grams per 0.6
                        liters, and tea buds - 15 grams per 1 liter. The taste
                        should be dense and mild, but it all depends on personal
                        preference. There are no universal recipes here.
                    </p>
                    <p>
                        What kind of tea is suitable for brewing? You can brew
                        any tea, it's all about being rational. Not all teas are
                        good for brewing, just as not all are suitable for
                        steeping. Based on observations, there are teas that
                        seem to be specially created for brewing and behave
                        perfectly during this thermal processing:
                    </p>
                    <p>Hei Cha</p>
                    <p>Pu-erh</p>
                    <p>Black tea</p>
                    <p>White and green teas</p>
                    <p>
                        Oolong tea for brewing is a product for enthusiasts. DAN
                        TSUNG oolong, with a moderate aroma, can be brewed and
                        will give an interesting result. Light oolongs, such as
                        Tie Guan Yin and Taiwanese teas, give an uninteresting
                        and average brew during brewing, and some of the
                        delicate aromas are lost. Such teas become faceless,
                        characterless. They are good for steeping, where there
                        is no active heating and rapid evaporation.
                    </p>
                    <p className="font-bold">
                        Brewing process
                    </p>
                    <p>
                        First, put the tea in a gaiwan and pour cold water over
                        it. Then put the kettle on the fire. The water begins to
                        boil, and threads of bubbles appear. Perform the
                        following actions:
                    </p>
                    <p>
                        Pour out the water for soaking the tea from the gaiwan.
                        All unnecessary debris settles on the bottom, and the
                        tea is rinsed and swollen.
                    </p>
                    <p>
                        Form a lump from the softened tea, so it will be easier
                        to toss it into the water. Tea heads behave better when
                        wet and hold their shape on their own. This advice is
                        relevant for loose tea, which is difficult to transfer
                        to boiling water until you give the mass a round
                        contour.
                    </p>
                    <p>
                        Insert tongs or a stick into the boiling water. If a
                        froth of small bubbles appears after intense stirring,
                        it's time to toss in the tea. This is an informative way
                        to determine the right moment.
                    </p>
                    <p>
                        Spin the funnel. For guests, this procedure usually
                        becomes an extraordinary spectacle. If you want to
                        surprise, show this truly mesmerizing trick. For daily
                        home brewing, you can get by with simple pouring.
                        Putting the tea into a spun funnel or simply pouring the
                        tea leaves into the boiling water does not affect the
                        taste of the drink.
                    </p>
                    <p>
                        Send the tea to the very center and admire the magical
                        dance of two elements. The heating does not stop during
                        this time. Now you need to watch the process of
                        re-boiling the water. When you notice the beginning of
                        boiling, stop heating, and turn off the stove or burner.
                        Dense teas in tea heads can be boiled a little to fully
                        reveal the aroma. It is permissible to turn off such tea
                        varieties as green or young sheng a little earlier than
                        the start of boiling.
                    </p>
                    <p className="font-bold">
                        Boiling stages
                    </p>
                    <p>
                        The first bubbles that separate from the walls are not
                        oxygen but nitrogen, which is contained in the water and
                        a precursor to boiling. The next stage is "crab eyes,"
                        followed by "fish eyes" with larger bubbles, "pearl
                        threads," and "the sound of wind in the pines." The
                        romantic names accurately reflect the metamorphosis of
                        boiling water.
                    </p>
                    <p>
                        You can observe this process carefully and immerse
                        yourself meditatively in the spectacle.
                    </p>
                    <img
                        className="rounded-[5vw] w-[80%]"
                        src="/Images/Journal/journal-2-2.jpeg"
                        alt=""
                    />
                    <p className="my-5 sm:my-[2vw] text-[#9494A2]">
                        Aesthetics of utensils, interesting history, quality of
                        water and tea... From all this, a vivid impression and a
                        pleasant memory of the tea party is formed.
                    </p>
                    <p className="font-bold">
                        When the tea is ready
                    </p>
                    <p>
                        The boiling process is complete, but not quite. You need
                        to wait for the tea to steep. If you're not drinking
                        alone, you can start sipping after a minute of brewing.
                        The tea will gradually start to unfold and, at some
                        point, you'll notice the full flavor. By the end of a
                        leisurely chat with friends, you'll have the most
                        intense taste.
                    </p>
                    <p className="font-bold">
                        Interesting combinations
                    </p>
                    <p>
                        Another important detail that conservative tea lovers
                        fear is the creation of tea blends. It is very exciting
                        to make them, interesting to brew them, and intriguing
                        to try them:
                    </p>
                    <p>
                        You can mix Shu Pu-erh and red tea in a ratio of 3:1. A
                        part of red tea will add a note of fire, a peculiar
                        melody, and a powerful prepared base for Shu Pu-erh.
                    </p>
                    <p>
                        An unusual combination is Shu Pu-erh with Gaba tea. In a
                        proportion of 3:1, you can achieve an intriguing effect
                        on the finished product. The resulting drink will have a
                        different taste. The feeling after drinking the tea is
                        dense, even, monolithic, and there is a sense of
                        composure.
                    </p>
                    <p>
                        Try to experiment and add some herbs, Sagan Dalya,
                        Ivan-tea, or herbs you have collected by yourself to Shu
                        Pu-erh or red tea. It should result in piquant blends
                        that deserve attention. Don't be afraid of experiments;
                        this is a vast field for new opportunities, unusual
                        flavors, unexpected discoveries, and curious states.
                    </p>
                    <p className="font-bold">
                        Advantages of brewing tea
                    </p>
                    <p>
                        Brewing tea is always convenient and quick. You can take
                        a portable stove, gas, and water with you on any outdoor
                        trip. It makes for a pleasant tea-time atmosphere by a
                        river or in the forest. A good cup of tea is an
                        excellent addition to the natural scenery, adding a
                        touch of warmth, coziness, and home. It harmoniously
                        fits into the situation, allowing you to immerse
                        yourself in your senses, meditate, and admire the
                        surrounding environment.
                    </p>
                    <p>
                        It is worth noting that this brewing method can help to
                        reveal the taste of teas that were exclusively used in
                        tea bags. Traditional Shu Pu-erh tea becomes a light
                        drink, but when brewed, it opens up, becoming
                        voluminous, oily, velvety, and wonderfully drinkable.
                        Conversely, the tea that you enjoy in a tea bag may not
                        reveal its full charm when brewed. However, it is still
                        worth trying and conducting experiments.
                    </p>
                    <p>
                        Lastly, let's return to the brewing method from the tea
                        classic of Lu Yu and delve into the philosophical
                        teachings. It states:
                    </p>
                    <p>
                        "Tea, by its nature, is modest, and it should not be
                        brewed in large quantities. If tea is brewed in large
                        quantities, its taste becomes weak and bland. Sometimes,
                        after filling a cup and drinking half of it, one feels
                        the poor taste. What can be said about a large quantity?
                        The tea color is pale yellow, and its aroma is stunning.
                        If the taste of the drink is sweet, then it is Jia. If
                        it is not sweet, but bitter - it is Chuan. If it is
                        bitter when swallowed, but sweet in the throat, then it
                        is true tea."
                    </p>
                    <p>Good luck brewing!</p>`,
            },
            {
                id: 3,
                date: "May 6,2023",
                title: "Chaban (Tea Tray), hucheng, chachuan, and other variants of tea trays",
                param: "chaban-tea-tray-hucheng-chachuan-and-other-variants-of-tea-trays",
                mainImgSrc: "/Images/Journal/journal-3.jpeg",
                artiest: "Paul White",

                pageContent: `
                    <p>
                        The word "chaban (Tea Tray)" is usually used to describe
                        a tray or a table on which all the necessary utensils
                        and tea tools are located. Chaban greatly simplifies tea
                        drinking. You can pour water on it thanks to a pallet or
                        a special tube for draining water. So spilled liquid
                        will not interfere with tea drinking.
                    </p>
                    <p>
                        Tea lovers have long been accustomed to this item of tea
                        utensils, although in fact 3 different items are often
                        hidden under the "chaban (Tea Tray)".
                    </p>
                    <p>
                        The most convenient option is a tea tray with a tray
                        Chapan (kit.茶盘, pinyin chápán). During the first
                        brewing or after warming the dishes, the water simply
                        flows down the chapan.
                    </p>
                    <p>
                        Why with a "p"? Because the chaban (kit. 茶板, pinyin
                        chábǎn) is more correct to call it a plank without a
                        pallet/drain.
                    </p>
                    <p>
                        A practical version of the chaban (Tea Tray) may look
                        like this. Thanks to the slots, the board will retain a
                        small amount of moisture and will not allow it to spread
                        on the table.
                    </p>
                    <p>
                        Another stylish option is Hucheng (壶承 húchéng). A
                        hollow stand with a small hole, usually small in size,
                        is suitable for an office or a small tea table. The most
                        common variants are made of ceramic or pressed stone.
                    </p>
                    <p className="my-10 sm:mb-[3.5vw]">
                        For simplicity, we (and many other tea enthusiasts)
                        always use the spelling "chaban (Tea Tray)".
                    </p>
                    <img
                            className="rounded-[5vw] w-[80%]"
                            src="/Images/Journal/journal-3-1.jpeg"
                            alt=""
                        /> 
                        <p className="text-[#9499A2]">
                            Chapan, chaban (Tea Tray), hucheng. Don't mix it up!
                        </p>
                    <p className="font-bold">
                        Learn more about materials and care
                    </p>
                    <p>
                        Chabans (Tea trays) are usually made of bamboo, wood, or
                        ceramic/stone. Let's look at each of them in more
                        detail.
                    </p>
                    <p className="font-bold">
                        The most common variants are made of bamboo. This
                        material has quite a lot of advantages:
                    </p>
                    <p>
                        Light in weight, the bamboo Chaban (Tea Tray) is easy to
                        take with you on trips;
                    </p>
                    <p className="font-bold">
                        How to brew matcha?
                    </p>
                    <p>
                        Easy to care for: after a tea party, it is enough to
                        pour water out of the tray, wash off the tea stains and
                        wipe dry;
                    </p>
                    <p>
                        There are a large number of colors due to various
                        varnishes;
                    </p>
                    <p>Inexpensive in price.</p>
                    <p>
                        The main disadvantage of bamboo is that it is almost
                        always made from prefabricated materials. Therefore,
                        with frequent use, the glue can leak, especially if the
                        pallet also consists of bamboo. When buying bamboo
                        Chabans (Tea Trays), be sure to check the evenness of
                        the joints and the quality of the assembly.
                    </p>
                    <p className="font-bold">
                        Options made of wood have a lot of advantages:
                    </p>
                    <p>
                        Durability especially models made of a single piece of
                        wood. With proper care, they will last for many years.{" "}
                    </p>
                    <p>
                        A variety of colors that will not wash off and will not
                        be erased, unlike the lacquer coating of bamboo;
                    </p>
                    <p>
                        Wooden Chaban (Tea Tray) is slightly heavier than bamboo
                        ones, but still quite light.
                    </p>
                    <p>
                        Yes, such Chabans (Tea Trays) are significantly more
                        expensive than bamboo ones, but they are much stronger
                        and more durable. Care is similar: after tea, pour water
                        out of the tray, wash off the tea stains, and wipe dry.
                        Chabans (Tea Trays) should drain well and completely,
                        along with the quality of the connections.
                    </p>
                    <p className="font-bold">
                        Sometimes there are Chaban (Tea Tray) made of porcelain
                        or clay:
                    </p>
                    <p>
                        A wide variety of colors and decoration options;
                    </p>
                    <p>
                        The ceramic version will not spoil if you accidentally
                        forget to put water in it or do not have time to wipe it
                        after tea;
                    </p>
                    <p>
                        There are very small models only for the kettle. They
                        are suitable for a small table;
                    </p>
                    <p>
                        With a wide range of prices, you can find an option for
                        any budget.
                    </p>
                    <p>
                        It is imperative to remember that such Chabans (Tea
                        Trays) are very fragile and easily split off. They are
                        more suitable for home tea parties.
                    </p>
                    <p>
                        There are also combined options, for example, bamboo top
                        + ceramic pallet.
                    </p>
                    <img
                            className="rounded-[5vw] w-[80%]"
                            src="/Images/Journal/journal-3-2.jpeg"
                            alt=""
                        />
                        <p className="text-[#9499A2]">
                            Chaban (Tea tray) with a ceramic pallet and a bamboo
                            top.
                        </p>
                    <p>
                        The most reliable option is stone. It is stylish,
                        reliable, and durable. Such a Chaban (Tea tray) will not
                        crack and will not chip. A Chaban (Tea tray) can be used
                        for decades, but its disadvantages include rarity,
                        weight, and price. If the stone Chaban (Tea tray) has
                        wooden / metal inserts, make sure they dry after tea.
                        Use soda if you can't wipe off the tea stain with a wet
                        cloth. Besides effectively removing the stain, it leaves
                        no foreign odor on the Chaban (tea tray).
                    </p>
                    <p>
                        We will also mention models made entirely of metal or
                        with a metal pallet. Yes, they are simple, inexpensive,
                        and reliable, but they have one significant
                        disadvantage: noise. Remember the sound of rain drumming
                        on the metallic tint of the window? If such a roar can
                        confuse you, then give up your metal Chaban (Tea tray).
                    </p>
                    <p className="font-bold">
                        Shapes and designs
                    </p>
                    <p>
                        The Chaban (Tea Tray) can be found in a variety of
                        shapes, including rectangular, square, and round. Choose
                        the one you like there. Even for the smallest office
                        desk, you can find a compact option.
                    </p>
                    <img
                            className="w-[80%] rounded-[5vw]"
                            src="/Images/Journal/journal-3-3.jpeg"
                            alt=""
                        />
                        <p className="text-[#9499A2]">
                            A miniature Chaban (Tea Tray) made of bamboo
                            measuring 33 x 12 cm. With a drain in the pallet.
                        </p>

                    <p className="font-bold">
                        Water from the Chaban (Tea Tray) can be drained in two
                        ways.
                    </p>
                    <p>
                        The first way is to drain it on a pallet. To do this,
                        the upper surface of the board is equipped with holes or
                        a grid through which water easily enters the pallet.
                        Sometimes it is a pull-out, most often a plastic pallet.
                        In some Chabans (Tea Trays), the base itself serves as a
                        pallet. The first option is easier to care for, since
                        the base made of wood/bamboo may crack if used
                        incorrectly.
                    </p>
                    <p>Positive:</p>
                    <p>
                        This board is quite autonomous and does not require
                        additional devices.
                    </p>
                    <p>
                        The tray is durable and airtight. You do not need to
                        worry about draining water during tea drinking.
                    </p>
                    <p>
                        The Chaban (Tea Tray) is clean and dry.
                    </p>
                    <p>Minuses:</p>
                    <p>
                        The downside is the need to periodically drain the water
                        from the tray if it is small in volume.
                    </p>
                    <img
                            className="w-[80%] rounded-[5vw]"
                            src="/Images/Journal/journal-3-4.jpeg"
                            alt=""
                        />
                        <p className="text-[#9499A2]">
                            Chaban (Tea Tray) with a small pallet and the
                            ability to connect a drain pipe.
                        </p>
                    <p className="font-bold">
                        The second option for draining is a tube.
                    </p>
                    <p>
                        A special hole has been made in the Chaban (Tea Tray),
                        into which a tube is inserted to drain the water. The
                        second end of the hole is lowered into the tank, into
                        which the water will flow during the tea party.
                    </p>
                    <p>Positive:</p>
                    <p>
                        The invisibility of draining water for tea ceremony
                        guests.
                    </p>
                    <p>
                        If you have chosen a large tank for draining or brought
                        it outside, then you will not need to worry about
                        whether the water tank has filled up.
                    </p>
                    <p>
                        There will not be water in the Chaban (Tea Tray) itself
                        for a long time, so it will last longer.
                    </p>
                    <p>Minuses:</p>
                    <p>
                        The tea pipe may become clogged with tea leaves, and
                        then the water will not leave.
                    </p>
                    <p>
                        Typical gurgling sounds may be produced during draining.
                    </p>
                    <p>
                        It is necessary to check whether the tube has jumped out
                        of the tank.
                    </p>
                    <p>
                        There are also options with pallets, into which, if
                        desired, you can insert a drain tube.
                    </p>
                    <p>
                        We figured out the different types of Chaban (Tea Tray)
                        and other tea trays. Choose what suits you the most, and
                        have an enjoyable tea party!
                    </p>`,
            },
            {
                id: 4,
                date: "Jan 16, 2023",
                title: "How to brew Shu (ripe) Pu-erh tea correctly",
                param: "how-to-brew-shu-ripe-pu-erh-tea-correctly",
                mainImgSrc: "/Images/Journal/journal-4.jpg",
                artiest: "Paul White",

                pageContent: `
                    <p>
                        Friends, in this article we will tell you how to make
                        shu pu-erh. How to brew pu-erh at home, what kind of
                        dishes are needed, and how to use them. How much should
                        I put in to get a guaranteed effect? Read, try our
                        advice, and be guided by the only true criterion — your
                        own taste.
                    </p>
                    <img
                            className="rounded-[5vw] w-[80%]"
                            src="/Images/Journal/journal-4-1.jpeg"
                            alt=""
                        />
                        <p className="text-[#9499A2]">
                            Pu-erh tea in the form of a pancake. Golden tea
                            buds. Black leaves.
                        </p>
                    <p className="font-bold">
                        Pu-erh and gongfu teapot
                    </p>
                    <p>
                        If you want to brew pu-erh in the office, we recommend
                        using a teapot. This item is also known as a button
                        teapot or a gongfu glass teapot. Kung Fu (kit. 功夫)
                        translates as the highest skill and indicates the
                        reputation of this type of teapot as an object for
                        brewing. It combines a teapot (a flask with a button), a
                        sieve, and a jug for filling (a flask is inserted
                        there). Three in one! Brew tea by spilling or infusing —
                        this is a universal tool and an affordable solution to
                        the task of brewing tea in the office.
                    </p>
                    <p>
                        In most models of these types, the spout bends slightly
                        at the end. Thanks to this bend, not a single extra drop
                        falls from the nose of the kettle. You can safely use
                        the teapot in the workplace, without fear of soiling or
                        dripping the table. Cool!
                    </p>
                    <p className="font-bold">
                        Recipe: how to brew shu pu-erh in a Kung Fu teapot.
                    </p>
                    <p>
                        Our recommendation would be to use the straight method.
                        So you will get three, five, or more flavors from one
                        brew. Use boiling water.
                    </p>
                    <p>
                        Take 8 grams of tea if you like a balanced strength.
                        Time of the first welding: 10 seconds. Further straits:
                        6+ seconds. Do you like strong shu pu-erh? Increase the
                        brewing time to 15-20 seconds, and use 10-15 grams
                        instead of 8.
                    </p>
                    <p className="my-10 sm:mb-[3.5vw]">
                        A 15-second technical welding is required before brewing
                        tightly pressed pu-erh. This will allow you to saturate
                        the sheet with water and soften a broken piece of
                        pancake or brick. After the technical spill, the tea
                        will be brewed stronger.
                    </p>
                    <img
                            className="rounded-[5vw] w-[80%]"
                            src="/Images/Journal/journal-4-2.jpeg"
                            alt=""
                        />
                        <p className="text-[#9499A2]">
                            Universal kung fu teapot.
                        </p>

                    <p className="font-bold">
                        Pu 'er and gaiwan
                    </p>
                    <p>
                        Gaiwan (more often porcelain or glass) is a special cup
                        with a lid for brewing tea. The walls of the gaiwan do
                        not absorb the aroma or taste of tea (unlike a clay
                        teapot). With a gaiwan, it is easy to control the drain
                        speed. This is critical because controlled draining plus
                        ease of use allows you to cope with even the most
                        "capricious" tea. When you brew tea in a gaiwan, the
                        reverse side of the lid collects a bright and clean
                        aroma. Pay attention to him. Gaiwan is suitable for
                        those who want to control the brewing process and
                        appreciate the aroma more than the taste.
                    </p>
                    <p>
                        If you use a gaiwan, it is better to brew tea in spills.
                        Spillage brewing is when you make fast (up to 1 second)
                        brews. Each individual brew is called a spill, because
                        the water does not linger in the dishes, but "spills"
                        through them into a bowl, turning into tea. The first
                        spill is soft and delicate. The second one is visible
                        and bright. There is a mature taste peak in the third
                        spill. The fourth is the beginning of a gradual fading.
                        Together, all brewing is called the "melody of taste".
                        Each tea has its own melody.
                    </p>
                    <p className="font-bold">
                        How to brew shu pu-erh in gaiwan using the spills
                        method.
                    </p>
                    <p>
                        Take 5 grams of tea per 100 ml of water. Use boiling
                        water. Warm up the gaiwan. Do not let the gaiwan cool
                        down and immediately put tea in it. When the tea is in a
                        heated bowl, wait 10 + seconds for the tea to soak up
                        the heat. Getting shu pu-erh to the first spill will
                        make the tea tastier.
                    </p>
                    <p>
                        Time for the first spill: 10 seconds. Further straights:
                        6+ seconds. If you like strong tea, increase the brewing
                        time to 15-20 seconds to taste.
                    </p>
                    <img
                            className="rounded-[5vw] w-[80%]"
                            src="/Images/Journal/journal-4-3.jpeg"
                            alt=""
                        />
                        <p className="text-[#9499A2]">
                            Brewing in spills with the help of a porcelain
                            gaiwan.
                        </p>
                    <p className="font-bold">
                        Pu-erh and Yixing clay teapot
                    </p>
                    <p>
                        The Yixing clay teapot is a reliable pu-erh brewing
                        machine. The clay is called Yixing in the city of Yixing
                        (Kit. 宜兴, "loyalty to duty and prosperity") in the
                        east of China.
                    </p>
                    <p>
                        In short, Shu Pu-erh pairs well with the Yixing teapot
                        as well as wine with cheese or tomatoes with cucumbers
                        for a salad. The power of Shu Pu-erh is more often
                        manifested in taste, and the teapot makes the taste of
                        tea more dense and rounded. Thus, if we are guided by
                        the idea of "strengthening the strong and discarding the
                        weak", then the clay teapot is ideal for shu pu-erh
                    </p>
                    <p className="font-bold">
                        Recipe: how to brew shu pu-erh in a Yixing teapot.
                    </p>
                    <p>
                        Take 5 grams of tea per 100 ml of water. Use boiling
                        water. Warm up the kettle well. First brewing time: 10
                        seconds. Further steps: 6+ seconds. If you like strong
                        shu pu-erh, increase the brewing time to 15-20 seconds
                        to taste or the amount of tea to 7-10 grams per 100 ml
                        of water.
                    </p>
                    <p>
                        Dishes for brewing pu-erh in a teapot made of Yixing
                        clay (listed according to the degree of need): teapot,
                        bowls, chai. Sieve, towel, tea cup, chahe. Finally, a
                        shepherd, a tea pond, and a tea figurine. Each piece of
                        tableware has a meaning and a purpose. Only the first
                        two are required: a teapot and tea cups. The rest is a
                        manifestation of the degree of interest in tea and the
                        culture associated with it. About the tools in detail.
                    </p>
                    <img
                            className="rounded-[5vw] w-[80%]"
                            src="/Images/Journal/journal-4-4.jpeg"
                            alt=""
                        />
                        <p className="text-[#9499A2]">
                            A teapot is like a Swiss bank account. Over time, it
                            brings you more and more taste and pleasure.
                        </p>
                    <p>
                        Everyone makes tea the way they feel comfortable.
                        Because tea is a homemade drink. Everyone has their own
                        way, their own approach. The choice of tea utensils,
                        water temperature, infusion time, and other details of
                        the tea party turn brewing into a gastronomic adventure.
                        Designed for everyone.
                    </p>`,
            },
            {
                id: 5,
                date: "Feb 6, 2023",
                title: "How to brew Sheng (raw) Pu-erh tea correctly",
                param: "how-to-brew-sheng-raw-pu-erh-tea-correctly",
                mainImgSrc: "/Images/Journal/journal-5.jpg",
                artiest: "Paul White",

                pageContent: `
                    <p className="font-bold">
                        How to brew Sheng (raw) Pu-erh tea correctly
                    </p>
                    <p>
                        The answer to the question "how to brew..." is more
                        difficult than it seems. Those who have been drinking
                        tea for a long time and thoughtfully give
                        recommendations, like experienced housewives in the
                        kitchen. The movements are so honed and familiar that
                        everything turns out delicious even "by eye". To help
                        those who are merely on the verge of higher mastery, we
                        write specific recommendations - how, how much, and in
                        what time frame.
                    </p>
                                            <img
                            className="rounded-[5vw] w-[80%]"
                            src="/Images/Journal/journal-5-1.jpeg"
                            alt=""
                        />
                    <p className= font-bold">
                        The main ingredient of delicious Sheng (raw) pu-erh is
                        time
                    </p>
                    <p>
                        Pu-erh can be different. If Shen's younger brother, Shu
                        (ripe) pu-erh, feels well after 10 seconds in the Yixing
                        kettle, and after an hour in a thermos, then it is
                        imperative to be careful with Shen. He does not tolerate
                        inattention and negligence and becomes bitter. It is
                        worth missing the moment once, and this bitterness will
                        remain with you until the end of the tea party.
                        Therefore, we share the subtleties and tricks for each
                        method of brewing this tea.
                    </p>
                    <p className="font-bold">
                        We brew tea in a teapot or gaiwan
                    </p>
                    <p>
                        If you are brewing a particular tea for the first time,
                        then we advise you to show some more care. This is both
                        for the tea itself and for its brewing. Start with 4
                        grams of tea per 100 ml of water.
                    </p>
                    <p>
                        Also, when drinking tea with pressed tea, we recommend
                        using a sieve to reduce the likelihood of excessive
                        bitterness.
                    </p>
                    <p>
                        Age matters. Young Sheng (raw) pu-erh differs both in
                        taste and in the subtleties of brewing. Choose a pair of
                        puer of different ages for comparison. The older Sheng
                        (raw) pu-erh is, the higher the boiling water
                        temperature is needed and the more tea leaves can be
                        taken. When brewing aged Sheng (raw) pu-erh, we advise
                        you not to allow the water to cool and to pour boiling
                        water over the kettle more often.
                    </p>
                    <p className="font-bold">
                        Brew Sheng (raw) pu-erh for one-two-three:
                    </p>
                    <p>
                        Be sure to warm up all the dishes, paying special
                        attention to the kettle / gaiwan;
                    </p>
                    <p>
                        We advise you to pour out the first tea leaves. You can
                        do this directly in the kettle as well as warm it up.
                    </p>
                    <p>
                        After infusing for 5-6 seconds and gradually increase
                        the exposure with each brewing for 5 seconds. Sheng
                        (raw) pu-erh are famous for their durability and usually
                        withstand at least 7-8 brews.
                    </p>
                    <img
                            className="rounded-[5vw] w-[80%]"
                            src="/Images/Journal/journal-5-2.jpeg"
                            alt=""
                        />
                        <p className="text-[#9499A2]">
                            We weigh, brew quickly, and enjoy!
                        </p>
                    <p className="font-bold">
                        and Office version of a tea party: teapot
                    </p>
                    <p>
                        If you want to brew Sheng (raw) pu-erh in the office, we
                        recommend using the type. It can be safely used in the
                        workplace without fear of soiling or dripping the table,
                        and the internal sieve will save you from additional
                        tools. A teapot, a glass Gong Dao Bei and a sieve in one
                        tool!
                    </p>
                    <p>
                        Basically, brewing this method does not differ from the
                        method above: we monitor the time and temperature, use
                        boiling water, and do not let the dishes and tea cool
                        down. Take 6-7 grams of tea if you prefer a balanced
                        strength.
                    </p>
                    <p className="font-bold">Thermos</p>
                    <p>
                        Unlike Shu puer or hei cha, sheng should be brewed in a
                        thermos with care. Estimate how much you take in your
                        thermos, and measure 1.5 times less. Usually, for Sheng
                        (raw) pu-erh, it is worth taking 5-6 grams per 500 ml of
                        volume.
                    </p>
                    <p>
                        Cooking sheng in a thermos:
                    </p>
                    <p>
                        Warm up the thermos – rinse it with boiling water so
                        that the cold walls do not sue the tea;{" "}
                    </p>
                    <p>
                        Before it cools down, throw tea into a thermos and pour
                        boiling water: the older the sheng, the hotter the
                        water.
                    </p>
                    <p>
                        30 minutes is enough for Shen to infuse in a thermos.
                        Try to choose a whole leaf and do not infuse the tea for
                        more than 3 hours. So you can avoid bitterness!
                    </p>
                    <p className="font-bold">A cup</p>
                    <p>
                        The easiest and most relaxing way to brew Chinese tea.
                        There are many Chinese people in Sichuan or Hunan who
                        drink tea directly from a cut glass mug or a large clay
                        mug.
                    </p>
                    <p>
                        We take a teaspoon of tea for a cup of 200 ml and pour
                        boiling water into it.
                    </p>
                    <p>Ready!</p>
                    <p>
                        When the infusion remains in the cup, you can add
                        boiling water again. Thus, the tea can be brewed 2-3
                        times. Or you can immediately make a large mug of
                        fragrant tea without brewing it.
                    </p>
                    <p>
                        How to measure tea without scales? There are about 2
                        grams of tea in a teaspoon without a slide and ~ 3 grams
                        in a teaspoon with a slide.
                    </p>
                    <p>
                        Tip: Do not use metal sieve balls, because pressed tea
                        will not be able to open and brew properly in them.
                    </p>
                    <img
                            className="rounded-[5vw] w-[80%]"
                            src="/Images/Journal/journal-5-3.jpeg"
                            alt=""
                        />
                        <p className="text-[#9499A2]">
                            And you can also use a gaiwan instead of a cup! This
                            is how they drink tea in Sichuan.
                        </p>
                    <p>
                        In short, attention and accuracy are the main things
                        when brewing sheng (raw) pu-erh.
                    </p>
                    <p className="">
                        Choose high-quality sheng (raw) pu-erh, brew it
                        correctly, and have a delicious tea party!
                    </p>`,
            },
            {
                id: 6,
                date: "Feb 14, 2023",
                title: "Types and varieties of Chinese tea",
                param: "types-and-varieties-of-chinese-tea",
                mainImgSrc: "/Images/Journal/journal-6.jpg",
                artiest: "Paul White",

                pageContent: `
                    <p className="font-bold">
                        Types and varieties of Chinese tea
                    </p>
                    <p>
                        At the very beginning of the journey, the variety of
                        Chinese tea can be confusing. Do not be afraid ahead of
                        time: there are more than a thousand varieties of
                        Chinese tea, and there are only six types! Let's figure
                        out how this variety fits into a concise classification.
                    </p>
                    <p className="font-bold">
                        Classification of Chinese tea
                    </p>
                    <p>
                        First of all, tea is determined by the variety of the
                        tea bush, its geographical location, and its processing.
                        In China, the classification of tea is based on the
                        degree of fermentation of raw materials, i.e. how much
                        tea raw materials undergo enzymatic oxidation after
                        drying. This process in the sheet is artificially
                        interrupted by the following processing process, for
                        example, frying. According to the Chinese
                        classification, all tea is divided into six large
                        groups: white, green, yellow, oolong, red, and black
                        (Pu-erh is included in this category).
                    </p>
                    <p className="font-bold">White tea</p>
                    <p>
                        The leaf is harvested and dried naturally. Oxidation
                        partially occurs during drying. Fermentation goes on in
                        a special way because the leaf has not crumpled. White
                        tea refers to the color of the most famous variety of
                        Bai Hao Yin Zhen, which is covered with delicate silver
                        fluff. The main volume is produced in Fujian Province.
                        The number of leaves taken together with the kidney will
                        determine the grade and price: tea made entirely from
                        the kidneys is most appreciated. The delicate nature of
                        white tea requires attention, which is a step in the
                        right direction. Its sweetness is similar to birch sap,
                        with a refined bouquet of berries and flowers. Leaf
                        varieties become denser with age, and kidney varieties
                        are better to drink fresh. They open up perfectly during
                        cooking on the fire. Try them!
                    </p>
                    <img
                            className="rounded-[5vw] w-[80%]"
                            src="/Images/Journal/journal-6-1.jpeg"
                            alt=""
                        />
                        <p className="text-[#9499A2]">
                            White tea (kit. 白;; pinyin bái chá)
                        </p>
                    <p className="font-bold">Green tea</p>
                    <p>
                        Minimally fermented: the leaf is harvested, dried,
                        twisted, warmed, and dried completely. In it, you will
                        find sweetness, light astringency, and the colors of
                        spring. The feeling of a taut bowstring, a juicy cut of
                        grass will remain on the lips. In green tea, freshness
                        is appreciated, since rare green tea retains its taste
                        for longer than one season. When brewing, it is
                        imperative to monitor the temperature of the water and
                        not overdo it. Gaiwan is ideal for brewing green tea.
                    </p>
                                            <img
                            className="rounded-[5vw] w-[80%]"
                            src="/Images/Journal/journal-6-2.png"
                            alt=""
                        />
                        <p className="text-[#9499A2]">
                            Green tea (kit. 绿茶; pinyin lǜ chá)
                        </p>
                    <p className="font-bold">Yellow tea</p>
                    <p>
                        The degree of fermentation is even higher, but its
                        quality is different — it takes place in a moist, warm
                        environment with limited oxygen access. This process is
                        called "languor". The taste of yellow is closer to
                        green, but the emphasis shifts to depth, softness, and
                        mystery. Notes of bitter almonds and smoky caramel
                        appear. Tea of this quality is impressive and elite.
                        Yellow tea is a rarity in the market. Buy this tea only
                        from trusted sellers, because there are many fakes on
                        the market.
                    </p>
                    <p className="font-bold">Oolong</p>
                    <p>
                        Oolong begins with a special kind of shrub with fleshy
                        leaves for making. Oolongs are divided into two large
                        groups: light and dark. The light ones come into contact
                        with the green and yellow ones according to their taste
                        profile, but they are often more fragrant and denser.
                        Dark teas are closer to red teas. Between these poles,
                        there is a gamut of flavors with countless nuances.
                        Cooking technology involves fermentation from partial to
                        almost complete, with or without baking in the end. The
                        most diverse group of teas. The aromatics of oolongs are
                        complex and bright, the taste is multilevel, unfolding
                        over time, and can resemble perfume and essential oils.
                        Oolongs are the heart and crown of the art of drinking
                        tea.
                    </p>
                                            <img
                            className="rounded-[5vw] w-[80%]"
                            src="/Images/Journal/journal-6-3.png"
                            alt=""
                        />
                        <p className="text-[#9499A2]">
                            Oolong tea (Chinese: 乌龙茶; pinyin wū lóng chá)
                        </p>
                    <p className="font-bold">Red tea</p>
                    <p>
                        These are highly fermented teas, produced from different
                        cultivars. Red teas tend to be warm, dense, and bright.
                        Also among them are weightless, fruity-spicy kidney teas
                        from Yunnan, and Taiwanese camphor-citrus Assamica
                        hybrids. Thick-smoked Xiao Zhong will surprise you with
                        its unique aroma of pine smoke, and exquisite wild
                        plants will delight with a slight sourness. The palette
                        of reds is wide. Be aware of this! When brewing, they
                        give themselves generously, and quickly. Therefore, part
                        with them, taking a few steps from the top of the taste,
                        then you will not know emptiness and tartness at
                        parting.
                    </p>
                                            <img
                            className="rounded-[5vw] w-[80%]"
                            src="/Images/Journal/journal-6-4.png"
                            alt=""
                        />
                        <p className="text-[#9499A2]">
                            Red tea (kit. 红;; pinyin hóng chá)
                        </p>
                    <p className="font-bold">Black tea</p>
                    <p>
                        This tea passes through the stage of wet stacking, so it
                        has notes of shu pu-erh in taste, but the similarities
                        end there. For Hay Cha, coarse raw materials like
                        cuttings and mature leaves are often used. Different
                        post-fermentation methods and the stages of aging in the
                        warehouse determine the differences between varieties of
                        black tea. It has a dense taste and a hidden sweetness
                        in the aftertaste, deep wine notes, hints of nuts, and
                        creaminess.
                    </p>
                        <img
                            className="rounded-[5vw] w-[80%]"
                            src="/Images/Journal/journal-6-5.png"
                            alt=""
                        />
                        <p className="text-[#9499A2]">
                            Black tea (kit. 黑茶; pinyin hēi chá)
                        </p>
                    <p className="font-bold">Puer</p>
                    <p>
                        They are divided into shu (ripe) pu-erh and sheng (raw)
                        pu-erh. Both are produced in Yunnan Province, but using
                        completely different technology.
                    </p>
                    <p>
                        Sheng (raw) pu-erh is similar in manufacturing
                        technology to green teas, but they are not thermally
                        fixed in the final product, so they develop and change
                        over time. Shen teas are similar to green teas in that
                        they are bright, springy, and herbaceous. As they age,
                        they lose their audacity, and bitterness, and sink into
                        the nectar depth, like dried fruits. It is noteworthy
                        that old trees over 300 years old can be used for sheng
                        (raw) pu-erh.
                    </p>
                    <p>
                        Shu (ripe) pu-erh passes through the process of wet
                        stacking: its peculiarity lies in the combined action of
                        tea leaf enzymes and the symbiosis of fungal microflora.
                        In the case of shu, the shutter speed of pancakes does
                        not matter. Raw materials, maturation processes, and the
                        technical level will have the biggest influence on
                        taste. Shu is appreciated for its nuts, chocolate, dried
                        fruits profile, and smooth, powerful body. He is
                        easy-going in brewing even for a beginner and loves
                        boiling water.
                    </p>
                        <img
                            className="rounded-[5vw] w-[80%]"
                            src="/Images/Journal/journal-6-6.png"
                            alt=""
                        />
                        <p className="text-[#9499A2]">
                            Pu-erh tea (kit. 普洱茶; pinyin pǔ'ěr chá)
                        </p>
                    <p>
                        Finally, we will share with you another "secret": when
                        choosing tea, the place where it is grown, the soil, the
                        height, and the professionalism of the technologist — in
                        a word, the quality of raw materials will be paramount.
                        But the type and variety of tea do not guarantee
                        gastronomic delight: any tea can be prepared at the
                        highest level.
                    </p>`,
            },
            {
                id: 7,
                date: "Feb 20, 2023",
                title: "Gaiwan: instructions for use",
                param: "gaiwan-instructions-for-use",
                mainImgSrc: "/Images/Journal/journal-7.jpg",
                artiest: "Paul White",

                pageContent: `
                    <p>
                        Gaiwan is a traditional dish for brewing Chinese tea. It
                        consists of a bowl, a lid, and sometimes a saucer. In
                        addition to being able to make extremely fast brewing,
                        the gaiwan allows you to control the temperature of the
                        water and effectively convey the aroma of the tea leaf.
                    </p>
                    <p>
                        The volume of the gaiwan varies from 80 to 300 ml.
                    </p>
                                            <img
                            className="rounded-[5vw] w-[80%]"
                            src="/Images/Journal/journal-7-1.jpeg"
                            alt=""
                        />
                        <p className="text-[#9499A2]">
                            A rare specimen of gaiwan without a saucer.
                        </p>
                    <p className="font-bold">History</p>
                    <p>
                        Gaiwan came into mass use in the XIV–XV centuries.
                        Initially, it consisted only of a cup without a handle
                        and lid. Over time, gaiwan began to be made with a
                        stand-saucer. Thus, I was able to drink tea directly
                        from the cup while keeping it on weight.
                    </p>
                    <p>
                        The reason for the mass use of gaywani was the spread of
                        leaf tea. Before that, the Chinese mostly drank either
                        pressed tea, which had to be brewed, or powdered tea,
                        which was dissolved. With the evolving form of tea,
                        there was also a need for an additional convenient
                        object for brewing.
                    </p>
                                            <img
                            className="rounded-[5vw] w-[80%]"
                            src="/Images/Journal/journal-7-2.jpeg"
                            alt=""
                        />
                    <p className="font-bold">
                        Types of gaiwan
                    </p>
                    <p>
                        Now you can find gaywan of different volumes, with and
                        without a saucer. In most cases, the option with a
                        saucer is more convenient: drops of water during brewing
                        will not stain the table, it is more convenient to drink
                        directly from the gaiwan, and you can also brew tea
                        without using a Chaban (Tea Tray).
                    </p>
                    <p>
                        A large gaiwan with a volume of 300 ml. Suitable for
                        large companies.
                    </p>
                    <p>
                        Gaiwan is handmade from Yixing clay. A stylish design
                        with a carved pommel and a universal volume of 200 ml.
                    </p>
                    <p>
                        For one, a{" "}
                        <a className="underline text-blue-700" href="#">
                            porcelain gaiwan is a baby
                        </a>
                        . A modest price for excellent quality.
                    </p>
                    <img
                            className="rounded-[5vw] w-[80%]"
                            src="/Images/Journal/journal-7-3.jpeg"
                            alt=""
                        />
                        <p className="text-[#9499A2]">
                            There is a difference in size, material, and design
                            between gaiwan.
                        </p>
                    <p>
                        According to the material, gaywani are made of
                        porcelain, glass, and clay. The fragrance remains on the
                        lid wall of porcelain gaiwans for a longer period of
                        time. Glass gaiwans keep the heat for less time and the
                        tea cools faster, but it allows you to admire the color
                        of the infusion. In gaiwan made of clay, tea cools down
                        more slowly, and the gaiwan itself eventually develops,
                        like the Yixing teapot.
                    </p>
                    <p className="font-bold">
                        Which is better: a gaiwan or a teapot?
                    </p>
                    <p>
                        For Chinese tea brewing, a gaiwan and a teapot are the
                        two main tools. Which one should I choose?
                    </p>
                    <p>
                        We chose both. For some teas, a gaiwan is better suited,
                        while for others, a teapot is better suited.
                    </p>
                    <p>
                        With a gaiwan, you can feel the aroma of tea more
                        vividly, and with a teapot, you can see a richer taste.
                        Therefore, super-fresh teas or teas with a powerful
                        aroma are traditionally brewed in a gaiwan, and teas
                        with a less pronounced aroma are brewed in a teapot.
                        However, it all depends on what you want to get from a
                        particular tea party.
                    </p>
                    <p>
                        At the same time, the harbor is considered a more
                        versatile item. This is because most of them are made of
                        porcelain or glass, which do not absorb the aroma of tea
                        when brewed. Therefore, if you choose the first item for
                        brewing, we advise you to start with it.
                    </p>
                        <img
                            className="rounded-[5vw] w-[80%]"
                            src="/Images/Journal/journal-7-4.jpeg"
                            alt=""
                        />
                    <p className="font-bold">
                        Brew tea in a gaiwan
                    </p>
                    <p>
                        There are 2 ways to use a gaiwan for tea drinking. You
                        can use it as a kettle, or brew it and drink it directly
                        from the gaiwan.
                    </p>
                    <p>
                        If we want to drink the Fujian method, repeatedly
                        brewing tea
                    </p>
                    <p>
                        Warm up the gaiwan with boiling water;
                    </p>
                    <p>
                        Pour a dry leaf. With the lid closed, shake the gaiwan
                        and open the lid slightly to inhale the aroma of a dry
                        leaf;{" "}
                    </p>
                    <p>
                        We pour water into the gaiwan and wait for 3-7 seconds;
                    </p>
                    <p>
                        Take the gaiwan by the upper rim of the bowl with your
                        thumb and middle finger, hold it with your index finger,
                        and slightly shift the lid;
                    </p>
                    <p>
                        Pour the infusion into a Cha Hai (Gong Dao Bei) or a
                        cup;
                    </p>
                    <p>
                        Repeat the brewing several times, gradually increasing
                        the infusion time.
                    </p>
                        <img
                            className="rounded-[5vw] w-[80%]"
                            src="/Images/Journal/journal-7-5.jpeg"
                            alt=""
                        />
                        <p className="text-[#9499A2]">
                            Such brewing in gaiwan is called Fujian.
                        </p>
                    <p className="font-bold">
                        If we want to drink Sichuan method straight from the cup
                    </p>
                    <p>
                        Warm up the gaiwan with boiling water;
                    </p>
                    <p>
                        We pour a dry leaf (2-3 times less than we pour with the
                        usual tea drinking). With the lid closed, shake the
                        gaiwan and open the lid to smell the aroma of dry
                        leaves.{" "}
                    </p>
                    <p>
                        Pour boiling water into the gaiwan and wait for 2-3
                        minutes;
                    </p>
                    <p>
                        We take the gaiwan by the saucer with one hand, and with
                        the other we slightly shift the lid, holding the tea
                        leaves. You can drink directly from the formed slit;
                    </p>
                    <p>
                        And you can completely remove the lid if you are not
                        confused by the leaves that are trying to swim away from
                        the bottom.
                    </p>
                                            <img
                            className="rounded-[5vw] w-[80%]"
                            src="/Images/Journal/journal-7-6.jpeg"
                            alt=""
                        />
                        <p className="text-[#9499A2]">
                            Sichuan province often drinks straight from gaiwan.
                        </p>
                    <p>
                        Gaiwan is convenient, practical, and versatile.
                    </p>
                    <p>
                        Choose the gaiwan that suits you best, drink delicious
                        tea, and stay good people!
                    </p>`,
            },
            {
                id: 8,
                date: "Feb 27, 2023",
                title: "Cha Hai (Gong Dao Bei): instructions for use",
                param: "cha-hai-gong-dao-bei-instructions-for-use",
                mainImgSrc: "/Images/Journal/journal-8.jpeg",
                artiest: "Paul White",

                pageContent: `
                    <p className="font-bold">
                        Types and varieties of Chinese tea
                    </p>
                    <p>
                        At the tea ceremony, you will see the link between the
                        teapot and the cup: Cha Hai (Gong Dao Bei). This is a
                        small vessel that resembles a milkman to many. It is
                        believed that it is absolutely necessary at tea parties
                        where more than one person is present.
                    </p>
                    <img
                            className="rounded-[5vw] w-[80%]"
                            src="/Images/Journal/journal-8-1.jpeg"
                            alt=""
                        />
                        <p className="text-[#9499A2]">
                            At a tea party for two, you cannot do without Cha
                            Hai (Gong Dao Bei).{" "}
                        </p>
                    <p className="font-bold">
                        How does the name translate?
                    </p>
                    <p>
                        Its main name 茶海 (cháhǎi) poetically translates as
                        "sea of tea". It is mainly used in mainland China. Also
                        often found is the Taiwanese name "gundaobei" (公道道,
                        gōngdàobēi) — the cup of justice.
                    </p>
                                            <img
                            className="rounded-[5vw] w-[80%]"
                            src="/Images/Journal/journal-8-2.jpeg"
                            alt=""
                        />
                        <p className="text-[#9499A2]">
                            The name "cup of justice" is as descriptive as
                            possible.
                        </p>
                    <p className="font-bold">
                        ‍Why is Cha Hai (Gong Dao Bei) needed?
                    </p>
                    <p>
                        After brewing in a teapot or gaiwan, the drink is filled
                        into Cha Hai (Gong Dao Bei) and then poured into cups
                        from it. If you drink tea alone, then it is not
                        necessary to use it.
                    </p>
                    <p className="font-bold">
                        Why is Cha Hai (Gong Dao Bei) convenient?
                    </p>
                    <p>
                        Allows you to control the fortress. If you pour tea from
                        a teapot / gaiwan immediately into cups, each subsequent
                        cup will get stronger. If you pour the whole infusion
                        into Cha Hai (Gong Dao Bei) at once, then you get the
                        same strength for all participants of the tea party.
                        That is why it is called the cup of justice.
                    </p>
                    <p>
                        It is convenient to divide tea equally among all
                        participants. For example, it is much more difficult to
                        pour evenly straight from the gaiwan (this requires a
                        certain gunfu). That's because the gaiwan is covered
                        with a lid, and you don't see how much infusion is left
                        inside. Therefore, use Cha Hai (Gong Dao Bei) so as not
                        to offend anyone.
                    </p>
                    <p>
                        Makes it possible to freeze the infusion. In Cha Hai
                        (Gong Dao Bei), you can hold tea that is too hot for a
                        while so that it cools down to a comfortable
                        temperature. At the same time, it will not be over
                        brewed.
                    </p>
                    <p>
                        It's easier to give up the sieve. During a tea party
                        without a tea sieve, you can wait for a while until the
                        small tea leaves settle to the bottom. So they won't get
                        into the cups.
                    </p>
                    <p>
                        Aesthetics. Cha Hai (Gong Dao Bei) made of glass or
                        white porcelain will allow you to admire the color of
                        the infusion, while Cha Hai (Gong Dao Bei) with complex
                        designs will decorate any tea scene.
                    </p>
                    <p className="font-bold">
                        How to choose a Cha Hai (Gong Dao Bei)?
                    </p>
                    <p>
                        It's easy to buy a Cha Hai (Gong Dao Bei). You should
                        only consider three factors when choosing: its volume,
                        its design, and its appearance.
                    </p>
                    <img
                            className="rounded-[5vw] w-[80%]"
                            src="/Images/Journal/journal-8-3.jpeg"
                            alt=""
                        />
                        <p className="text-[#9499A2]">
                            Universal option: a glass Cha Hai (Gong Dao Bei)
                            with a convenient handle with a volume of 300 ml.
                        </p>
                    <p>
                        The volume is selected for the volume of the kettle /
                        gaiwan. Usually, the nominal volume of utensils is
                        indicated in stores, so the volume of Cha Hai (Gong Dao
                        Bei) should be slightly larger. When tea is not filled
                        to the brim, it is more convenient to use it. For
                        example, for a 200 ml gaiwan, you need at least 250 ml
                        of Cha Hai (Gong Dao Bei).
                    </p>
                    <p>
                        It is best to take a model with a handle if this is your
                        first Cha Hai (Gong Dao Bei): it will prevent you from
                        getting burned. If you are already an experienced tea
                        enthusiast, then pay attention to the Cha Hai (Gong Dao
                        Bei), similar to a bowl with a spout. For example, such
                        as:
                    </p><img
                            className="rounded-[5vw] w-[80%]"
                            src="/Images/Journal/journal-8-4.jpeg"
                            alt=""
                        />
                        <p className="text-[#9499A2]">
                            A stylish option for advanced users.
                        </p>

                    <p>
                        Everything is simple regarding appearance: just take
                        what you like. If this is your first tea set, we still
                        recommend buying a glass Cha Hai (Gong Dao Bei). It will
                        fit any kettle, and through the glass, you can see the
                        color of the infusion.
                    </p>
                    <p>
                        Stay healthy, drink plenty of tea, and use Cha Hai (Gong
                        Dao Bei)!
                    </p>`,
            },
        ],
    });
    // const [productsApiData, setproductsApiData] = useState([]);
    // //
    // const callProducts = () => {
    //     const api =
    //         "https://teaflows-eed2e-default-rtdb.firebaseio.com/allDatas.json";
    //     axios
    //         .get(api)
    //         .then((res) => {
    //             const formatedValue = Object.values(res.data);
    //             setproductsApiData(formatedValue[0]);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };
    // useEffect(() => {
    //     callProducts();
    // }, []);
    //
    return (
        <productContext.Provider value={[productsApiData, setproductsApiData]}>
            {props.children}
        </productContext.Provider>
    );
};

export default Context;
