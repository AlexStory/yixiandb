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
        phase: "Immortality Phase",
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
        phase: "Immortality Phase",
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
        phase: "Immortality Phase",
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
        phase: "Immortality Phase",
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
        phase: "Immortality Phase",
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
        phase: "Immortality Phase",
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
        phase: "Immortality Phase",
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
        phase: "Immortality Phase",
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
        phase: "Immortality Phase",
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
        phase: "Immortality Phase",
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
    },
    {
        name: "Cloud Sword - Avalanche",
        iname: "cloud-sword-avalanche-",
        phase: "Immortality Phase",
        type: "Character",
        character: "Yan Xue",
        tier1: {
            atk: 2,
            cloudHit: {
                successiveCloudAttack: 4,
            },
        },
        tier2: {
            atk: 2,
            cloudHit: {
                successiveCloudAttack: 5,
            },
        },
        tier3: {
            atk: 2,
            cloudHit: {
                successiveCloudAttack: 6,
            },
        },
    },
    {
        name: "Unrestrained Sword - Flame Dance",
        iname: "unrestrained-sword-flame-dance-",
        phase: "Incarnation Phase",
        type: "Character",
        character: "Yan Xue",
        tier1: {
            atk: 6,
            text: "If you have played \"Unrestrained Sword\" card in this battle",
            chase: true
        },
        tier2: {
            atk: 12,
            text: "If you have played \"Unrestrained Sword\" card in this battle",
            chase: true
        },
        tier3: {
            atk: 18,
            text: "If you have played \"Unrestrained Sword\" card in this battle",
            chase: true
        },
    },
    {
        name: "Cloud Sword - Pray Rain",
        iname: "cloud-sword-pray-rain-",
        phase: "Immortality Phase",
        type: "Character",
        character: "Long Yao",
        tier1: {
            atk: 3,
            nAtks: 3,
            cloudHit: {
                regen: 2,
            },
        },
        tier2: {
            atk: 4,
            nAtks: 3,
            cloudHit: {
                regen: 3,
            },
        },
        tier3: {
            atk: 5,
            nAtks: 3,
            cloudHit: {
                regen: 4,
            },
        },
    },
    {
        name: "Sky Delicate Bracelet",
        iname: "sky-delicate-bracelet-",
        phase: "Incarnation Phase",
        type: "Character",
        character: "Long Yao",
        tier1: {
            guardUp: 1,
            chase: true,
        },
        tier2: {
            guardUp: 2,
            chase: true,
        },
        tier3: {
            guardUp: 3,
            chase: true,
        },
    },
    {
        name: "Cloud Sword - Cat Paw",
        iname: "cloud-sword-cat-paw-",
        phase: "Foundation Phase",
        type: "Character",
        character: "Lin Xiaoyue",
        tier1: {
            atk: 5,
            nAtks: 2,
            text: "This card's attacks Ignore DEF",
        },
        tier2: {
            atk: 7,
            nAtks: 2,
            text: "This card's attacks Ignore DEF",
        },
        tier3: {
            atk: 9,
            nAtks: 2,
            text: "This card's attacks Ignore DEF",
        },
    },
    {
        name: "Spirt Cat Chaos Sword",
        iname: "spirit-cat-chaos-",
        phase: "Immortality Phase",
        type: "Character",
        character: "Lin Xiaoyue",
        tier1: {
            atk: 2,
            text: "Attack time equals to your remaining hand cards (Up to 5 times)",
        },
        tier2: {
            atk: 2,
            text: "Attack time equals to your remaining hand cards (Up to 6 times)",
        },
        tier3: {
            atk: 2,
            text: "Attack time equals to your remaining hand cards (Up to 7 times)",
        },
    },
    {
        name: "Only Traces",
        iname: "only-traces-",
        phase: "Foundation Phase",
        type: "Character",
        character: "Tan Shuyan",
        tier1: {
            qi: 3,
            postAction: {

                chase: true,
            },
        },
        tier2: {
            qi: 3,
            chase: true,
        },
        tier3: {
            qi: 4,
            chase: true,
        },
    },
    {
        name: "Ultimate Hexagram Base",
        iname: "ultimate-hexagram-base-",
        phase: "Virtuoso Phase",
        type: "Character",
        character: "Yan Chen",
        tier1: {
            continuous: {
                hexPerTurn: 1,
            }
        },
        tier2: {
            hexagram: 2,
            continuous: {
                hexPerTurn: 1,
            }
        },
        tier3: {
            hexagram: 4,
            continuous: {
                hexPerTurn: 1,
            },
        },
    },
    {
        name: "Within Reach",
        iname: "within-reach-",
        phase: "Immortality Phase",
        type: "Character",
        character: "Yan Chen",
        tier1: {
            atk: 9,
            atkPerDebuff: 2,
        },
        tier2: {
            atk: 9,
            atkPerDebuff: 3,
        },
        tier3: {
            atk: 9,
            atkPerDebuff: 4,
        },
    },
    {
        name: "Shifting Stars",
        iname: "shifting-stars-",
        phase: "Meditation Phase",
        type: "Faction",
        faction: "Heptastar Pavilion",
        tier1: {
            atk: 5,
            starNext: 1,
        },
        tier2: {
            atk: 8,
            starNext: 1,
        },
        tier3: {
            atk: 8,
            starNext: 2,
        },
    },
    {
        name: "Dotted Around",
        iname: "dotted-around-",
        phase: "Meditation Phase",
        type: "Faction",
        faction: "Heptastar Pavilion",
        tier1: {
            qi: 1,
            def: 2,
            starPower: 1,
        },
        tier2: {
            qi: 2,
            def: 3,
            starPower: 1,
        },
        tier3: {
            qi: 2,
            def: 4,
            starPower: 2,
        },
    },
    {
        name: "Astral Move - Block",
        iname: "astral-move-block-",
        phase: "Meditation Phase",
        type: "Faction",
        faction: "Heptastar Pavilion",
        tier1: {
            atk: 6,
            starPoint: {
                def: 2,
            }
        },
        tier2: {
            atk: 8,
            starPoint: {
                def: 4,
            },
        },
        tier3: {
            atk: 10,
            starPoint: {
                def: 6,
            },
        },
    },
    {
        name: "Astral Move - Flank",
        iname: "astral-move-flank-",
        phase: "Meditation Phase",
        type: "Faction",
        faction: "Heptastar Pavilion",
        tier1: {
            atk: 6,
            starPoint: {
                atk: 5,
            },
        },
        tier2: {
            atk: 7,
            starPoint: {
                atk: 7,
            },
        },
        tier3: {
            atk: 8,
            starPoint: {
                atk: 9,
            },
        },
    },
    {
        name: "Zhen Hexagram",
        iname: "zhen-hexagram-",
        phase: "Meditation Phase",
        type: "Faction",
        faction: "Heptastar Pavilion",
        tier1: {
            atk: 4,
            hexagram: 1,
        },
        tier2: {
            atk: 7,
            hexagram: 1,
        },
        tier3: {
            atk: 10,
            hexagram: 1,
        },
    },
    {
        name: "Earth Hexagram",
        iname: "earth-hexagram-",
        phase: "Meditation Phase",
        type: "Faction",
        faction: "Heptastar Pavilion",
        tier1: {
            def: 2,
            hexagram: 2,
        },
        tier2: {
            def: 2,
            hexagram: 3,
        },
        tier3: {
            def: 2,
            hexagram: 4,
        },
    },
    {
        name: "Wind Hexagram",
        iname: "wind-hexagram-",
        phase: "Meditation Phase",
        type: "Faction",
        faction: "Heptastar Pavilion",
        tier1: {
            qi: 1,
            hexagram: 1,
        },
        tier2: {
            qi: 2,
            hexagram: 1,
        },
        tier3: {
            qi: 2,
            hexagram: 2,
        },
    },
    {
        name: "Palm Thunder",
        iname: "palm-thunder-",
        phase: "Meditation Phase",
        type: "Faction",
        faction: "Heptastar Pavilion",
        tier1: {
            atkRng: [2, 10],
        },
        tier2: {
            atkRng: [5, 13],
        },
        tier3: {
            atkRng: [8, 16],
        },
    },
    {
        name: "White Crane Bright Wings",
        iname: "white-crane-bright-wings-",
        phase: "Meditation Phase",
        type: "Faction",
        faction: "Heptastar Pavilion",
        tier1: {
            atkRng: [1, 8],
            qi: 1,
        },
        tier2: {
            atkRng: [1, 8],
            qi: 2,
        },
        tier3: {
            atkRng: [1, 8],
            qi: 3,
        },
    },
    {
        name: "Sparrow's Tail",
        iname: "sparrows-tail-",
        phase: "Meditation Phase",
        type: "Faction",
        faction: "Heptastar Pavilion",
        tier1: {
            atk: 9,
            pctChanceAtk: {
                pct: 10,
                atk: 5,
            },
        },
        tier2: {
            atk: 10,
            pctChanceAtk: {
                pct: 10,
                atk: 7,
            },
        },
        tier3: {
            atk: 11,
            pctChanceAtk: {
                pct: 10,
                atk: 9,
            },
        },
    },
    {
        name: "Striding Into the Wind",
        iname: "striding-into-the-wind-",
        phase: "Meditation Phase",
        type: "Faction",
        faction: "Heptastar Pavilion",
        tier1: {
            atk: 3,
            nAtks: 2,
            defRng: [1, 10],
        },
        tier2: {
            atk: 4,
            nAtks: 2,
            defRng: [1, 12],
        },
        tier3: {
            atk: 5,
            nAtks: 2,
            defRng: [1, 14],
        },
    },
    {
        name: "Incessant",
        iname: "incessant-",
        phase: "Meditation Phase",
        type: "Faction",
        faction: "Heptastar Pavilion",
        tier1: {
            atk: 6,
            postAction: {
                hp: 2,
            },
        },
        tier2: {
            atk: 9,
            postAction: {
                hp: 4,
            },
        },
        tier3: {
            atk: 12,
            postAction: {
                hp: 6,
            },
        },
    }
]