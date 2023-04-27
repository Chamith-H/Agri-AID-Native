const Chili = {
    id: 2,
        name : 'Chili (MI-CH-HY 01)',
        image : 'https://drive.google.com/uc?id=1R2YQMTvHXkX_RkQ8YL9apJAuHrLyWk3b',
        period : 126,
        yield : 864,
        requirements: {
            Irrigation: 'Weekly',
            Fertilizer: 'Urea, MOP, TSP',
            Pest_Threats: 'Aphids, Thrips Flies and Mites',
            Diseases: 'Pseudomonas Solanacearum, Mosaic Virus, Narrow Leaf Disorder',
            Ideal_Cultivation_Locations: 'Anuradhapura, Hambanthota, Jaffna, Vavuniya and Puttalam',
            Ideal_Cultivation_Time: 'April to May / November to December',
            Maturity_Period: '126 Days',
            Average_Yield: '864g per Plant'
        },

        actions: {
            weeding: {
                        start : 0,
                        gap : 7,
                        end : 126,
                        description:'Weeding for Capsicum involves removing unwanted plants (weeds) from the area around the Capsicum plants. Weeds can compete with Capsicum plants for nutrients, water, and sunlight, leading to reduced growth and yield. Therefore, weeding is an important practice to ensure the healthy growth and optimal yield of Capsicum plants.'
                     },

            soiling: {
                        start : 0,
                        gap : 7,
                        end : 126,
                        description:'Soil preparation for Capsicum plants refers to the process of preparing the soil to create an ideal growing environment for the crop. It involves a range of activities such as removing any debris/rocks from the soil surface, loosening the soil and adding organic matter such as compost and manure. Soil preparation for Capsicum plants is critical to establish a strong root system, access essential nutrients, and resist diseases and pests in an effort to optimize the plant growth, health, and yield.'
                     },

            pruning: {
                        start : 56,
                        gap : 7,
                        end : 126,
                        description:'Capsicum pruning is the process of selectively removing certain parts of the Capsicum plant in order to improve its growth, yield, and overall health. This can involve removing diseased or damaged leaves and fruit, as well as thinning out branches to promote better air circulation and light penetration. Pruning can also help to encourage bushier growth and prevent the plant from becoming too tall.'
                     },

            irrigation: {
                        start : 0,
                        gap : 4,
                        end : 126,
                        description:'Irrigation for Capsicum plants refers to the process of watering plants to maintain optimal soil moisture levels as it is crucial for the healthy growth and development of the crops, as they require consistent and adequate moisture levels throughout their different growth stages.'
                     },

            fertilization: {
                        start : 0,
                        gap : 14,
                        end : 126,
                        description:"Fertilization for Capsicum plants involves providing the necessary nutrients to support healthy growth and development using TSP, Urea, and MOP, which provide different macronutrients. It's important to apply fertilizers at the right time and in the right amounts, as both over and under fertilization can lead to poor growth and low yields of Capsicum plants."
                     },

            harvesting: {
                        start : 98,
                        gap : 7,
                        end : 126,
                        description:'Harvesting Capsicum peppers refers to the process of removing the mature fruit from the plant for sale or consumption. The peppers are typically harvested when they reach the desired maturity and size by carefully plucking the matured produce and following proper packaging and storage practices to prevent spoilage.'
                     },
        },

        stages : {
            one: {
                start:0,
                end:28,
                duration:4,
                image:'https://drive.google.com/uc?id=11y5eBP6p1ge9GMgxGJ0In-l-9Rbf0d2v',
                description:'The crop starts from seeds that are sown in small pots. During this stage, the seeds germinate and grow into small seedlings. At this stage, the seedlings have small, green leaves and a thin stem.'
            },

            two: {
                start:28,
                end:56,
                duration:4,
                image:'https://drive.google.com/uc?id=192UPtepcrnUFgT4wcIyuTsU6rBM5wJrf',
                description:'During this stage, the plant grows rapidly and develops its leaves, stems, and roots. At this stage, the plant has several pairs of leaves, and the stem becomes thicker and stronger.'
            },

            three: {
                start:56,
                end:70,
                duration:2,
                image:'https://drive.google.com/uc?id=1VUf1Bk8cU9Gx-JP684IxkToLoNDYXlIp',
                description:'The plant starts to produce flowers at the end of the vegetative stage or the beginning of the flowering stage. During this stage, the flowers bloom, and pollination occurs. At this stage, the plant has small, white or yellow flowers.'
            },

            four: {
                start:70,
                end:98,
                duration:4,
                image:'https://drive.google.com/uc?id=1_Dl1EwUE4UbavRpp-8MLI8I4ou9B5KJU',
                description:'After the flowers are pollinated, they start to develop, grow and mature into fruits. At this stage, the plant initially has small, green fruits that will eventually mature into fruits ready for harvest.'
            },

            five: {
                start:98,
                end:126,
                duration:4,
                image:'https://drive.google.com/uc?id=1Ixu_oRdZh-Jz5onH8hd_zrd43Ufz_IEG',
                description:'This is the final stage of the capsicum crop, where the mature fruits are harvested from the plant. During this stage, the fruits are shiny and firm and are greenish yellow in colour.'
            },
        },

        cultivation: [
            {
                stage:'Seeding',
                weeding: 'During the seeding stage, it is important to keep the soil in the pots free from weeds. Weeds can compete with the young seedlings for nutrients and moisture, which can stunt their growth. Weeding should be done manually or using a shallow hoe to avoid damaging the seedlings.',
                soil: 'During the seeding stage, the soil should be well-drained and fertile. Prepare the soil by adding organic matter such as compost and manure for optimal results.',
                pruning: ''
            },

            {
                stage:'Vegetative',
                weeding: 'During the vegetative stage, Chilli plants grow rapidly, and it is important to keep the weeds under control. Weeds can still compete with the plants for nutrients and moisture. Weeding should be done manually or using a shallow hoe to avoid damaging the plant.',
                soil: 'During the vegetative stage, the soil should be kept moist but not waterlogged. Adding a layer of mulch on the soil surface can help retain moisture and suppress weed growth. ',
                pruning: ''
            },

            {
                stage:'Flowering',
                weeding: 'During the flowering stage, it is important to maintain a weed-free environment to ensure healthy plant growth as weeds can still compete with the plants for nutrients and moisture. Weeding should be done manually or using a shallow hoe to avoid damaging the plant.',
                soil: 'During the flowering stage, the soil should be kept moist but not waterlogged. Adding a layer of mulch on the soil surface can help retain moisture and suppress weed growth. ',
                pruning: 'During the flowering stage, it is important to remove any damaged or diseased leaves.'
            },

            {
                stage:'Fruit Development',
                weeding: 'During the fruit development stage, it is important to maintain a weed-free environment to ensure healthy plant growth and optimal yield as weeds can still compete with the plants for nutrients and moisture. Weeding should be done manually or using a shallow hoe to avoid damaging the plant.',
                soil: 'During the fruit development stage, the soil should be kept moist but not waterlogged. Adding a layer of mulch on the soil surface can help retain moisture and suppress weed growth. ',
                pruning: "During the fruit development stage, it is important to remove any damaged or diseased leaves, as well as any fruit that is misshapen or small to help direct the plant's energy towards the remaining healthy fruit. Any lower branches that are not producing fruit could be pinched off as well."
            },

            {
                stage:'Harvesting',
                weeding: 'During the harvesting stage, it is important to continue weeding to maintain a clean growing environment for the remaining plants. Weeds can still compete with the plants for nutrients and moisture, which can affect the quality of the produce. Weeding should be done manually or using a shallow hoe to avoid damaging the plant.',
                soil: 'During the harvesting stage, the soil should be kept moist but not waterlogged. Adding a layer of mulch on the soil surface can help retain moisture and suppress weed growth.',
                pruning: "During the harvesting stage, it is important to remove any damaged or diseased leaves, any fruit that is misshapen or any overripe fruit starting to decay to help direct the plant's energy towards the remaining healthy fruit and to also eliminate the attraction of pests and diseases."
            },
            
        ],

        growth : [
            {
                stage:'Seeding',
                irrigation: 'During the seeding stage, it is important to keep the soil moist but not waterlogged. Water the seeds with a gentle mist or a fine spray using a watering can or a misting system to avoid overwatering.',
                fertiliation: 'During the seeding stage, a light application of urea fertilizer can be applied to the soil to provide nitrogen for healthy growth. The recommended rate is 1g per plant, once every two weeks.',
                nutrient: 'During the seeding stage, a light application of nitrogen (N), phosphorus (P), and potassium (K). The recommended application rate is 1g per plant (20:20:20 NPK), once every two weeks.',
                ambient: ['Temperature Range: 25-30°C', 'RH Range: 60-70%', 'pH Range: 5.5-6.5', 'EC Range: 0.8-1.2 mS/cm']
            },

            {
                stage:'Vegetative',
                irrigation: 'During the vegetative stage, Capsicum plants should be watered regularly and thoroughly, so that the soil is moist but not saturated.',
                fertiliation: 'During the vegetative stage, a balanced fertilizer such as TSP (Triple Super Phosphate) can be applied to the soil to promote leaf growth and stem development. The recommended fertilizer rate is 3g per plant, once every two weeks.',
                nutrient: 'During the vegetative stage, Capsicum plants require more nitrogen (N) to support their growth. The recommended application rate is 3g per plant (20:20:20 NPK), once every two weeks.',
                ambient: ['Temperature Range: 25-30°C', 'RH Range: 70-80%', 'pH Range: 6.0-6.5', 'EC Range: 1.2-1.8 mS/cm']
            },

            {
                stage:'Flowering',
                irrigation: 'During the flowering stage, it is important to maintain a consistent level of soil moisture. Water the Capsicum plants regularly and thoroughly to ensure that the water reaches the roots. However, avoid watering the foliage and overwatering.',
                fertiliation: 'During the flowering stage, a balanced fertilizer such as TSP (Triple Super Phosphate) can be applied for healthy flower development. The recommended fertilizer rate is 4g per plant, once every two weeks.',
                nutrient: 'During the flowering stage, Capsicum plants require more phosphorus (P) and potassium (K) to support flower and fruit development. The recommended application rate is 4g per plant (10:30:20 NPK), once every two weeks.',
                ambient: ['Temperature Range: 20-25°C', 'RH Range: 70-80%', 'pH Range: 6.0-6.5', 'EC Range: 1.5-2.0 mS/cm']
            },

            {
                stage:'Fruit Development',
                irrigation: 'During the fruit development stage, it is important to maintain a consistent level of soil moisture. However, prevent overwatering and saturation. ',
                fertiliation: 'During the fruit development stage, a balanced fertilizer such as MOP (Muriate of Potash) can be applied to the soil to promote healthy fruit development. The recommended fertilizer rate is 4g per plant, once every two weeks.',
                nutrient: 'During the fruit development stage, Capsicum plants require more potassium (K) to support fruit growth and quality. The recommended application rate is 5g per plant (12:12:36), once every two weeks.',
                ambient: ['Temperature Range: 20-25°C', 'RH Range: 60-70%', 'pH Range: 6.0-6.5', 'EC Range: 2.0-2.5 mS/cm']
            },

            {
                stage:'Harvesting',
                irrigation: 'During the harvesting stage, it is important to reduce the amount of water to prevent the fruit from splitting. ',
                fertiliation: 'During the harvesting stage, a lower dose of a balanced fertilizer such as TSP (Triple Super Phosphate) can be applied to support the continued growth and development of new flowers and fruits. The recommended fertilizer rate is 3g per plant, once every two weeks.',
                nutrient: 'During the harvesting stage, Capsicum plants only require lower amounts nitrogen (N), phosphorus (P), and potassium (K). The recommended application rate is 2g per plant (20:20:20 NPK), once every two weeks.',
                ambient: ['Temperature Range: 20-25°C', 'RH Range: 60-70%', 'pH Range: 6.0-6.5', 'EC Range: 2.0-2.5 mS/cm']
            },
        ],

        disease : {
           pest : [
                    {
                        name: 'Aphids',
                        image:'https://drive.google.com/uc?id=12mUTq_oheTaxpybeBqSy6XoTA76iIGuS',
                        symptoms: ['Stunted growth and yellowing of leaves.', 'Curling or distortion of leaves.', 'Sticky residue on leaves and stems.', 'Presence of small, pear-shaped insects on the plant.'],
                        remedies: ['Prune affected leaves and dispose of them.', 'Use sticky traps such as yellow sticky cards.']
                    },

                    {
                        name: 'Thrips',
                        image:'https://drive.google.com/uc?id=1y7wUcv4B_7ja_oTIl4fDekGYd5ar5vMr',
                        symptoms: ['Silver or bronze streaks on leaves.', 'Deformed or distorted leaves and flowers.', 'Black feces on leaves.', 'Presence of small, slender insects on the plant.'],
                        remedies: ['Speckling or yellowing of leaves.', 'Use sticky traps such as yellow sticky cards.']
                    },

                    {
                        name: 'Mites',
                        image:'https://drive.google.com/uc?id=1kfk3h4rRKQBJKtetVW-nxaiJWu-k9lgP',
                        symptoms: ['Speckling or yellowing of leaves.', 'Small webs on the plant.', 'Stunted plant growth.', 'Wilting and leaf drop.'],
                        remedies: ['Prune affected leaves and dispose of them.', 'Use sticky traps such as yellow sticky cards.']
                    },
                  ],

           threats : [
                        {
                            name: 'Pseudomonas Solanacearum',
                            image:'https://drive.google.com/uc?id=17hVAvJaloMKHzcovQtZPtsAWi2pnFBBB',
                            symptoms: ['Rotting roots and stems.', 'Discolouration of the plant turn cross-section.', 'Wilting and yellowing of lower leaves.', 'Stunted growth.', 'Reduced fruit production.'],
                            remedies: ['The diseased plants should be removed and destroyed.', 'Regularize irrigation patterns.']
                        },

                        {
                            name: 'Mosaic Virus',
                            image:'https://drive.google.com/uc?id=1Sx6Wqg4oAWnnpJOUjXRdHWKy94j0_Ao1',
                            symptoms: ['Mottled, yellowish-green leaves.', 'Stunted growth.', 'Reduced growth.', 'Reduced yield.'],
                            remedies: ['Remove infected plants.', 'Improve weed control.']
                        },

                        {
                            name: 'Narrow Leaf  Disorder',
                            image:'https://drive.google.com/uc?id=10Jjk-nDAHGLSXGL6ewDSu4AvqvUXPINj',
                            symptoms: ['Narrow, elongated leaves.', 'Leaf curling.', 'Infected leaves will fall after become wilted and rolled.', 'The lower mature leaves are usually the first to become infected.', 'When the damage is severe, upper leaves are also become infected.'],
                            remedies: ['Increasing the irrigation frequency. ', 'Improving soil preparation and care.']
                        },
                     ]
        },

        harvest : {
            time : 'The first harvest can be done approximately 98 days after planting. Practice harvesting in dry weather conditions.',
            storage : "To store chilli pepper after harvest, it's important to keep them in a cool, dry place away from direct sunlight, ideally between 10-12°C. As chilli peppers are sensitive to moisture, it's crucial to ensure they stay dry during storage. If using containers, choose breathable options such as mesh bags or perforated plastic bags to allow for air circulation and prevent moisture build-up.",
            packing : "To package chilli peppers begin by cleaning the harvest and removing any dirt or debris. Dry the chili peppers thoroughly, either by air drying them or using a clean towel to remove any excess moisture. Next, use food-grade plastic bags or breathable containers made for storing vegetables, ensuring they're clean, dry, and free of any contaminants. Carefully place the chilli peppers in the packaging, taking care not to bruise or damage them. If using plastic bags, make sure to remove as much air as possible before sealing. Label the packaging with relevant information such as the date of harvest, chilli pepper variety, and grade. ",
            grading : [
                            {
                                grade: 'A',
                                status: 'The products under this grade are typically uniform in size (Pod length 13-15 cm Pod weight 15-20g), shape, colour, and texture and are free from any defects or blemishes. '
                            },

                            {
                                grade: 'B',
                                status:  'The products under this grade do not meet the strict requirements of Grade A as they may have some minor defects, such as small blemishes or slight variations in size or colour.', 
                            },

                            {
                                grade: 'C',
                                status: 'The products under this grade have more defects than Grade B as they may have significant blemishes, deformities, or discolorations.', 
                            },

                            {
                                grade: 'D',
                                status:  'The products under this grade are damaged, spoiled or contaminated and are therefore not fit for human consumption or use.'
                            },
                  
                      ]
        }
}

module.exports = Chili;