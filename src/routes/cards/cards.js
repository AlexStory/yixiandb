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
    {
        name: "Cloud Citta-Dharma",
        iname: "cloud-citta-dharma-",
        phase: "Virtuoso Phase",
        type: "Faction",
        faction: "Cloud Spirit Sword Sect",
        tier1: {
            continuous: {
                cloudSwordHeal: 2,
            }
        },
        tier2: {
            continuous: true,
            cloudSwordHeal: 3,
        },
        tier3: {
            continuous: true,
            cloudSwordHeal: 4,
        },
    },
    {
        name: "Cloud Sword - Necessity",
        iname: "cloud-sword-necessity-",
        phase: "Virtuoso Phase",
        type: "Faction",
        faction: "Cloud Spirit Sword Sect",
        tier1: {
            atk: 4,
            nAtks: 2,
            cloudHit: {
                ignoreDef: 1,
            },
        },
        tier2: {
            atk: 6,
            nAtks: 2,
            cloudHit: {
                ignoreDef: 1,
            },
        },
        tier3: {
            atk: 8,
            nAtks: 2,
            cloudHit: {
                ignoreDef: 2,
            },
        },
    },
    {
        name: "Cloud Sword - Pierce the Star",
        iname: "cloud-sword-pierce-the-star-",
        phase: "Virtuoso Phase",
        type: "Faction",
        faction: "Cloud Spirit Sword Sect",
        tier1: {
            qi: 2,
            atk: 0,
            qiAtkBonus: 1,
        },
        tier2: {
            qi: 3,
            atk: 0,
            qiAtkBonus: 1,
        },
        tier3: {
            qi: 4,
            atk: 0,
            qiAtkBonus: 1,
        },
    },
    {
        name: "Cloud Sword - Spirit Coercion",
        iname: "cloud-sword-spirit-coercion-",
        phase: "Virtuoso Phase",
        type: "Faction",
        faction: "Cloud Spirit Sword Sect",
        tier1: {
            atk: 7,
            cloudHit: {
                successiveCloudChi: 1,
            },
        },
        tier2: {
            atk: 11,
            cloudHit: {
                successiveCloudChi: 1,
            },
        },
        tier3: {
            atk: 15,
            cloudHit: {
                successiveCloudChi: 1,
            },
        },
    },
    {
        name: "Cloud Dance Rhythm",
        iname: "cloud-dance-rhythm-",
        phase: "Virtuoso Phase",
        type: "Faction",
        faction: "Cloud Spirit Sword Sect",
        tier1: {
            qi: 2,
            def: 2,
            swordIntent: 2,
        },
        tier2: {
            qi: 3,
            def: 3,
            swordIntent: 3,
        },
        tier3: {
            qi: 4,
            def: 4,
            swordIntent: 4,
        },
    },
    {
        name: "Raven Spirit Sword",
        iname: "raven-spirit-sword-",
        phase: "Virtuoso Phase",
        type: "Faction",
        faction: "Cloud Spirit Sword Sect",
        tier1: {
            atk: 5,
            qiToDef: 2,
        },
        tier2: {
            atk: 5,
            qiToDef: 3,
        },
        tier3: {
            atk: 5,
            qiToDef: 4,
        },
    },
    {
        name: "Burst Sword",
        iname: "burst-sword-",
        phase: "Virtuoso Phase",
        type: "Faction",
        faction: "Cloud Spirit Sword Sect",
        tier1: {
            cost: 1,
            atk: 11,
            injured: {
                loseQi: 1,
            },
        },
        tier2: {
            cost: 1,
            atk: 15,
            injured: {
                loseQi: 1,
            },
        },
        tier3: {
            cost: 1,
            atk: 17,
            injured: {
                loseQi: 2,
            },
        },
    },
    {
        name: "Giant Roc Spirit Sword",
        iname: "giant-roc-spirit-sword-",
        phase: "Virtuoso Phase",
        type: "Faction",
        faction: "Cloud Spirit Sword Sect",
        tier1: {
            cost: 2,
            atk: 9,
            qiOver: {
                req: 0,
                chase: true,
            },
        },
        tier2: {
            cost: 2,
            atk: 12,
            qiOver: {
                req: 0,
                chase: true,
            },
        },
        tier3: {
            cost: 2,
            atk: 15,
            qiOver: {
                req: 0,
                chase: true,
            },
        },
    },
    {
        name: "Reflexive Sword",
        iname: "reflexive-sword-",
        phase: "Virtuoso Phase",
        type: "Faction",
        faction: "Cloud Spirit Sword Sect",
        tier1: {
            cost: 1,
            atk: 10,
            injured: {
                nextDef: 6,
            },
        },
        tier2: {
            cost: 1,
            atk: 13,
            injured: {
                nextDef: 9,
            },
        },
        tier3: {
            cost: 1,
            atk: 16,
            injured: {
                nextDef: 12,
            },
        },
    },
    {
        name: "Mirror Flower Sword Formation",
        iname: "mirror-flower-sword-formation-",
        phase: "Virtuoso Phase",
        type: "Faction",
        faction: "Cloud Spirit Sword Sect",
        tier1: {
            def: 3,
            atk: 0,
            defAtkBonus: 1,
        },
        tier2: {
            def: 5,
            atk: 0,
            defAtkBonus: 1,
        },
        tier3: {
            def: 8,
            atk: 0,
            defAtkBonus: 1,
        },
    },
    {
        name: "Tri-Peak Sword",
        iname: "tri-peak-sword-",
        phase: "Virtuoso Phase",
        type: "Faction",
        faction: "Cloud Spirit Sword Sect",
        tier1: {
            atk: 3,
            nAtks: 3,
        },
        tier2: {
            atk: 4,
            nAtks: 3,
        },
        tier3: {
            atk: 5,
            nAtks: 3,
        },
    },
    {
        name: "Cloud Sword - Flash wind",
        iname: "cloud-sword-flash-wind-",
        phase: "Immortal Phase",
        type: "Faction",
        faction: "Cloud Spirit Sword Sect",
        tier1: {
            atk: 4,
            cloudHit: {
                chase: true,
            },
        },
        tier2: {
            atk: 8,
            cloudHit: {
                chase: true,
            },
        },
        tier3: {
            atk: 12,
            cloudHit: {
                chase: true,
            },
        },
    },
    {
        name: "Cloud Sword - Moon Shade",
        iname: "cloud-sword-moon-shade-",
        phase: "Immortal Phase",
        type: "Faction",
        faction: "Cloud Spirit Sword Sect",
        tier1: {
            def: 1,
            cloudHit: {
                increaseAtk: 2,
            },
        },
        tier2: {
            def: 2,
            cloudHit: {
                increaseAtk: 3,
            },
        },
        tier3: {
            def: 3,
            cloudHit: {
                increaseAtk: 4,
            },
        },
    },
    {
        name: "Spirit Gather Citta-Dharma",
        iname: "spirit-gather-citta-dharma-",
        phase: "Immortal Phase",
        type: "Faction",
        faction: "Cloud Spirit Sword Sect",
        tier1: {
            qi: 1,
            continuous: {
                qiPer2: true,
            },
        },
        tier2: {
            qi: 1,
            continuous: {
                qiPerTurn: true,
            },
        },
        tier3: {
            qi: 3,
            continuous: {
                qiPerTurn: true,
            },
        },
    },
    {
        name: "CentiBird Spirit Sword Rhythm",
        iname: "centibird-spirit-sword-rhythm-",
        phase: "Immortal Phase",
        type: "Faction",
        faction: "Cloud Spirit Sword Sect",
        tier1: {
            qi: 1,
            continuous: {
                decreaseSpiritCost: 1,
            },
        },
        tier2: {
            qi: 3,
            continuous: {
                decreaseSpiritCost: 1,
            },
        },
        tier3: {
            qi: 3,
            continuous: {
                decreaseSpiritCost: 2,
            },
        },
    },
    {
        name: "Egret Spirit Sword",
        iname: "egret-spirit-sword-",
        phase: "Immortal Phase",
        type: "Faction",
        faction: "Cloud Spirit Sword Sect",
        tier1: {
            cost: 1,
            atk: 5,
            qiToAtk: 2,
        },
        tier2: {
            cost: 1,
            atk: 5,
            qiToAtk: 3,
        },
        tier3: {
            cost: 1,
            atk: 5,
            qiToAtk: 4,
        },
    },
    {
        name: "Giant Kun Spirit Sword",
        iname: "giant-kun-spirit-sword-",
        phase: "Immortal Phase",
        type: "Faction",
        faction: "Cloud Spirit Sword Sect",
        tier1: {
            cost: 3,
            atk: 10,
            def: 10,
            chase: true,
        },
        tier2: {
            cost: 3,
            atk: 13,
            def: 13,
            chase: true,
        },
        tier3: {
            cost: 3,
            atk: 16,
            def: 16,
            chase: true,
        },
    },
    {
        name: "Inspiration Sword",
        iname: "inspiration-sword-",
        phase: "Immortal Phase",
        type: "Faction",
        faction: "Cloud Spirit Sword Sect",
        tier1: {
            atk: 8,
            injured: {
                qiToSwordIntent: 8,
            },
        },
        tier2: {
            atk: 12,
            injured: {
                qiToSwordIntent: 12,
            },
        },
        tier3: {
            atk: 16,
            injured: {
                qiToSwordIntent: 16,
            },
        },
    },
    {
        name: "Flow Cloud Chaos Sword",
        iname: "flow-cloud-chaos-sword-",
        phase: "Immortal Phase",
        type: "Faction",
        faction: "Cloud Spirit Sword Sect",
        tier1: {
            atk: 2,
            nAtks: 4,
        },
        tier2: {
            atk: 2,
            nAtks: 5,
        },
        tier3: {
            atk: 2,
            nAtks: 6,
        },
    },
    {
        name: "Moon Water Sword Formation",
        iname: "moon-water-sword-formation-",
        phase: "Immortal Phase",
        type: "Faction",
        faction: "Cloud Spirit Sword Sect",
        tier1: {
            def: 10,
            defNoHalve: 3,
        },
        tier2: {
            def: 14,
            defNoHalve: 4,
        },
        tier3: {
            def: 18,
            defNoHalve: 5,
        },
    },
    {
        name: "Unrestrained Sword - Two",
        iname: "unrestrained-sword-two-",
        phase: "Immortal Phase",
        type: "Faction",
        faction: "Cloud Spirit Sword Sect",
        tier1: {
            atk: 4,
            text: "For each \"Unrestrained Sword\" card you played in this battle, make an additional attack",
        },
        tier2: {
            atk: 6,
            text: "For each \"Unrestrained Sword\" card you played in this battle, make an additional attack",
        },
        tier3: {
            atk: 9,
            text: "For each \"Unrestrained Sword\" card you played in this battle, make an additional attack",
        },
    },
    {
        name: "Cloud Sword - Dragon Roam",
        iname: "cloud-sword-dragon-roam-",
        phase: "Incarnation Phase",
        type: "Faction",
        faction: "Cloud Spirit Sword Sect",
        tier1: {
            atk: 2,
            nAtks: 2,
            cloudHit: {
                def: 3,
            },
            injured: {
                chase: true
            },
        },
        tier2: {
            atk: 2,
            nAtks: 3,
            cloudHit: {
                def: 5,
            },
            injured: {
                chase: true
            },
        },
        tier3: {
            atk: 2,
            nAtks: 4,
            cloudHit: {
                def: 7,
            },
            injured: {
                chase: true
            },
        },
    },
    {
        name: "Cloud Sword - Step Lightly",
        iname: "cloud-sword-step-lightly-",
        phase: "Incarnation Phase",
        type: "Faction",
        faction: "Cloud Spirit Sword Sect",
        tier1: {
            atk: 2,
            nAtks: 2,
            cloudHit: {
                successiveCloudDef: 3,
            },
        },
        tier2: {
            atk: 2,
            nAtks: 3,
            cloudHit: {
                successiveCloudDef: 4,
            },
        },
        tier3: {
            atk: 2,
            nAtks: 4,
            cloudHit: {
                successiveCloudDef: 5,
            },
        },
    },
    {
        name: "Flying Spirit Shade Sword",
        iname: "flying-spirit-shade-sword-",
        phase: "Incarnation Phase",
        type: "Faction",
        faction: "Cloud Spirit Sword Sect",
        tier1: {
            atk: 1,
            nAtks: 4,
            qiPerAttack: 1,
        },
        tier2: {
            atk: 1,
            nAtks: 5,
            qiPerAttack: 1,
        },
        tier3: {
            atk: 1,
            nAtks: 6,
            qiPerAttack: 1,
        },
    },
    {
        name: "Dharma Spirit Sword",
        iname: "dharma-spirit-sword-",
        phase: "Incarnation Phase",
        type: "Faction",
        faction: "Cloud Spirit Sword Sect",
        tier1: {
            atk: 5,
            exhaustQiToAtk: 5,
        },
        tier2: {
            atk: 5,
            exhaustQiToAtk: 6,
        },
        tier3: {
            atk: 5,
            exhaustQiToAtk: 7,
        },
    },
    {
        name: "Sword Intent Surge",
        iname: "sword-intent-surge-",
        phase: "Incarnation Phase",
        type: "Faction",
        faction: "Cloud Spirit Sword Sect",
        tier1: {
            cost: 1,
            increaseIntent: 80,
        },
        tier2: {
            cost: 1,
            increaseIntent: 100,
        },
        tier3: {
            cost: 1,
            increaseIntent: 120,
        },
    },
    {
        name: "Rule Sky Sword Formation",
        iname: "rule-sky-sword-formation-",
        phase: "Incarnation Phase",
        type: "Faction",
        faction: "Cloud Spirit Sword Sect",
        tier1: {
            freeDefOver: 0,
            def: 6,
            chase: true,
        },
        tier2: {
            freeDefOver: 0,
            def: 12,
            chase: true,
        },
        tier3: {
            freeDefOver: 0,
            def: 18,
            chase: true,
        },
    },
    {
        name: "Chain Sword Formation",
        iname: "chain-sword-formation-",
        phase: "Incarnation Phase",
        type: "Faction",
        faction: "Cloud Spirit Sword Sect",
        tier1: {
            def: 1,
            text: "Retrigger the previous \"Sword Formation\" card in the deck",
        },
        tier2: {
            def: 5,
            text: "Retrigger the previous \"Sword Formation\" card in the deck",
        },
        tier3: {
            def: 10,
            text: "Retrigger the previous \"Sword Formation\" card in the deck",
        },
    },
    {
        name: "Unrestrained Sword - Zero",
        iname: "unrestrained-sword-zero-",
        phase: "Incarnation Phase",
        type: "Faction",
        faction: "Cloud Spirit Sword Sect",
        tier1: {
            continuous: {
                unrestrainedInjured: 30,
            },
        },
        tier2: {
            continuous: {
                unrestrainedInjured: 45,
            },
        },
        tier3: {
            continuous: {
                unrestrainedInjured: 60,
            },
        },
    }
]