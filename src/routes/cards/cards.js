export var cards = [
    {
        name: "Cloud Sword - Touch Sky",
        iname: "cloud-sword-touch-sky-",
        phase: "Meditation Phase",
        faction: "Cloud Spirit Sword Sect",
        type: "Faction",
        tier1: {
            atk: 6,
        },
        tier2: {
            atk: 9
        },
        tier3: {
            atk: 12
        },
    },
    {
        name: "Cloud Sword - Fleche",
        iname: "cloud-sword-fleche-",
        phase: "Meditation Phase",
        faction: "Cloud Spirit Sword Sect",
        type: "Faction",
        tier1: {
            atk: 5,
            cloudHit: {
                atk: 3,
            },
        },
        tier2: {
            atk: 6,
            cloudHit: {
                atk: 5,
            },
        },
        tier3: {
            atk: 7,
            cloudHit: {
                atk: 7,
            },
        },
    },
    {
        name: "Cloud Sword - Touch Earth",
        iname: "cloud-sword-touch-earth-",
        phase: "Meditation Phase",
        faction: "Cloud Spirit Sword Sect",
        type: "Faction",
        tier1: {
            atk: 4,
            cloudHit: {
                def: 4,
            },
        },
        tier2: {
            atk: 6,
            cloudHit: {
                def: 6,
            },
        },
        tier3: {
            atk: 8,
            cloudHit: {
                def: 8,
            },
        },
    },
    {
        name: "Light Sword",
        iname: "light-sword-",
        phase: "Meditation Phase",
        faction: "Cloud Spirit Sword Sect",
        type: "Faction",
        tier1: {
            atk: 4,
            qi: 1,
        },
        tier2: {
            atk: 4,
            qi: 2,
        },
        tier3: {
            atk: 4,
            qi: 3,
        },
    },
    {
        name: "Guard Qi",
        iname: "guard-qi-",
        phase: "Meditation Phase",
        faction: "Cloud Spirit Sword Sect",
        type: "Faction",
        tier1: {
            qi: 1,
            def: 5,
        },
        tier2: {
            qi: 2,
            def: 5,
        },
        tier3: {
            qi: 3,
            def: 5,
        },
    },
    {
        name: "Qi Perfusion",
        iname: "qi-perfusion-",
        phase: "Meditation Phase",
        faction: "Cloud Spirit Sword Sect",
        type: "Faction",
        tier1: {
            qi: 2,
            ignoreDef: 1,
        },
        tier2: {
            qi: 3,
            ignoreDef: 1,
        },
        tier3: {
            qi: 4,
            ignoreDef: 1,
        },
    },
    {
        name: "Giant Tiger Spirit Sword",
        iname: "giant-tiger-spirit-sword-",
        phase: "Meditation Phase",
        faction: "Cloud Spirit Sword Sect",
        type: "Faction",
        tier1: {
            cost: 1,
            atk: 10,
        },
        tier2: {
            cost: 1,
            atk: 13,
        },
        tier3: {
            cost: 1,
            atk: 16,
        },
    },
    {
        name: "Thunder Sword",
        iname: "thunder-sword-",
        phase: "Meditation Phase",
        faction: "Cloud Spirit Sword Sect",
        type: "Faction",
        tier1: {
            cost: 1,
            atk: 5,
            injured: {
                atk: 6,
            }
        },
        tier2: {
            cost: 1,
            atk: 6,
            injured: {
                atk: 8,
            },
        },
        tier3: {
            cost: 1,
            atk: 7,
            injured: {
                atk: 10,
            },
        },
    },
    {
        name: "Sword Slash",
        iname: "sword-slash-",
        phase: "Meditation Phase",
        faction: "Cloud Spirit Sword Sect",
        type: "Faction",
        tier1: {
            atk: 4,
            swordIntent: 2,
        },
        tier2: {
            atk: 5,
            swordIntent: 3,
        },
        tier3: {
            atk: 6,
            swordIntent: 4,
        },
    },
    {
        name: "Sword Defence",
        iname: "sword-defence-",
        phase: "Meditation Phase",
        faction: "Cloud Spirit Sword Sect",
        type: "Faction",
        tier1: {
            def: 4,
            swordIntent: 2,
        },
        tier2: {
            def: 5,
            swordIntent: 3,
        },
        tier3: {
            def: 6,
            swordIntent: 4,
        },
    },
    {
        name: "Flying Fang Sword",
        iname: "flying-fang-sword-",
        phase: "Meditation Phase",
        faction: "Cloud Spirit Sword Sect",
        type: "Faction",
        tier1: {
            cost: 1,
            atk: 8,
            injured: {
                returnSwordIntent: true,
            },
        },
        tier2: {
            cost: 1,
            atk: 11,
            injured: {
                returnSwordIntent: true,
            },
        },
        tier3: {
            cost: 1,
            atk: 14,
            injured: {
                returnSwordIntent: true,
            },
        },
    },
    {
        name: "Wind Sword",
        iname: "wind-sword-",
        phase: "Meditation Phase",
        faction: "Cloud Spirit Sword Sect",
        type: "Faction",
        tier1: {
            atk: 3,
            nAtks: 2,
        },
        tier2: {
            atk: 4,
            nAtks: 2,
        },
        tier3: {
            atk: 6,
            nAtks: 2,
        },
    },
    {
        name: "Cloud Sword - Reguard",
        iname: "cloud-sword-reguard-",
        phase: "Foundation Phase",
        type: "Faction",
        faction: "Cloud Spirit Sword Sect",
        tier1: {
            def: 8,
            cloudHit: {
                hp: 3,
            },
        },
        tier2: {
            def: 11,
            cloudHit: {
                hp: 5,
            },
        },
        tier3: {
            def: 14,
            cloudHit: {
                hp: 7,
            },
        },
    },
    {
        name: "Cloud Sword - Riddle",
        iname: "cloud-sword-riddle-",
        phase: "Foundation Phase",
        type: "Faction",
        faction: "Cloud Spirit Sword Sect",
        tier1: {
            atk: 6,
            cloudHit: {
                swordIntent: 2,
            },
        },
        tier2: {
            atk: 8,
            cloudHit: {
                swordIntent: 3,
            },
        },
        tier3: {
            atk: 10,
            cloudHit: {
                swordIntent: 4,
            },
        },
    },
    {
        name: "Cloud Sword - Conceal",
        iname: "cloud-sword-conceal-",
        phase: "Foundation Phase",
        type: "Faction",
        faction: "Cloud Spirit Sword Sect",
        tier1: {
            cloudHit: {
                atk: 9,
            },
        },
        tier2: {
            cloudHit: {
                atk: 12,
            },
        },
        tier3: {
            cloudHit: {
                atk: 17,
            },
        },
    },
    {
        name: "Transforming Spirits Rhythm",
        iname: "transforming-spirits-rhythm-",
        phase: "Foundation Phase",
        type: "Faction",
        faction: "Cloud Spirit Sword Sect",
        tier1: {
            qi: 3,
        },
        tier2: {
            qi: 4,
        },
        tier3: {
            qi: 5,
        },
    },
    {
        name: "Spiritage Sword",
        iname: "spiritage-sword-",
        phase: "Foundation Phase",
        type: "Faction",
        faction: "Cloud Spirit Sword Sect",
        tier1: {
            qi: 2,
            qiOver: {
                req: 2,
                atk: 2,
                nAtks: 2,
            },
        },
        tier2: {
            qi: 3,
            qiOver: {
                req: 3,
                atk: 2,
                nAtks: 2,
            },
        },
        tier3: {
            qi: 4,
            qiOver: {
                req: 4,
                atk: 2,
                nAtks: 2,
            },
        },
    },
    {
        name: "Giant whale Spirit Sword",
        iname: "giant-whale-spirit-sword-",
        phase: "Foundation Phase",
        type: "Faction",
        faction: "Cloud Spirit Sword Sect",
        tier1: {
            cost: 2,
            atk: 16,
        },
        tier2: {
            cost: 2,
            atk: 20,
        },
        tier3: {
            cost: 2,
            atk: 24,
        },
    },
    {
        name: "Contemplate Spirits Rhythm",
        iname: "contemplate-spirits-rhythm-",
        phase: "Foundation Phase",
        type: "Faction",
        faction: "Cloud Spirit Sword Sect",
        tier1: {
            qi: 1,
            swordIntent: 3
        },
        tier2: {
            qi: 1,
            swordIntent: 4
        },
        tier3: {
            qi: 1,
            swordIntent: 5
        },
    },
    {
        name: "Consonance Sword Formation",
        iname: "consonance-sword-formation-",
        phase: "Foundation Phase",
        type: "Faction",
        faction: "Cloud Spirit Sword Sect",
        tier1: {
            def: 9,
            intentToQi: true,
        },
        tier2: {
            def: 14,
            intentToQi: true,
        },
        tier3: {
            def: 19,
            intentToQi: true,
        },
    },
    {
        name: "Earth Evil Sword",
        iname: "earth-evil-sword-",
        phase: "Foundation Phase",
        type: "Faction",
        faction: "Cloud Spirit Sword Sect",
        tier1: {
            atk: 8,
            injured: {
                text: "Add DEF for each damage dealt to HP",
            },
        },
        tier2: {
            atk: 11,
            injured: {
                text: "Add DEF for each damage dealt to HP",
            },
        },
        tier3: {
            atk: 14,
            injured: {
                text: "Add DEF for each damage dealt to HP",
            },
        },
    },
    {
        name: "Form-Intention Sword",
        iname: "form-intention-sword-",
        phase: "Foundation Phase",
        type: "Faction",
        faction: "Cloud Spirit Sword Sect",
        tier1: {
            atk: 8,
            injured: {
                swordIntent: 3,
            },
        },
        tier2: {
            atk: 11,
            injured: {
                swordIntent: 4,
            },
        },
        tier3: {
            atk: 14,
            injured: {
                swordIntent: 5,
            },
        },
    },
    {
        name: "Unrestrained Sword - One",
        iname: "unrestrained-sword-one-",
        phase: "Foundation Phase",
        type: "Faction",
        faction: "Cloud Spirit Sword Sect",
        tier1: {
            atk: 5,
            text: "For each \"Unrestrained Sword\" you played in this battle, this card adds 2 more ATK",
        },
        tier2: {
            atk: 8,
            text: "For each \"Unrestrained Sword\" you played in this battle, this card adds 3 more ATK",
        },
        tier3: {
            atk: 10,
            text: "For each \"Unrestrained Sword\" you played in this battle, this card adds 4 more ATK",
        },
    },
]