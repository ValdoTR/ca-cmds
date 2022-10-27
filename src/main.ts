/// <reference types="@workadventure/iframe-api-typings" />

import { CreateUIWebsiteEvent } from "@workadventure/iframe-api-typings/Api/Events/Ui/UIWebsite";
import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    if (WA.player.tags.includes('ca')) {
        WA.player.setOutlineColor(20, 119, 91)
    }

    currentPopup = WA.ui.openPopup("InstructionPopup", "Bienvenue, vous pouvez consulter le plan de la map ainsi que l'agenda grâce aux boutons situés en haut à gauche de votre écran (veillez ensuite fermer ces pages à l'aide de la croix rouge)", [])
    WA.room.area.onLeave("Instruction").subscribe(closePopup)
    
    WA.room.area.onEnter("Cookie").subscribe(() => {
        currentPopup = WA.ui.openPopup("CookiePopup", "Savais-tu qu’en plus d’être de délicieux gâteaux, les cookies sont, dans le marketing digital, des petits fichiers servant au bon fonctionnement d’un site. Mais il existe également d’autres usages comme le ciblage publicitaire et l’analyse des usages web.", [])
    })
    WA.room.area.onLeave("Cookie").subscribe(closePopup)

    WA.room.area.onEnter("ThumbUp").subscribe(() => {
        currentPopup = WA.ui.openPopup("ThumbUpPopup", "Savais-tu que nous étions présents sur les réseaux sociaux ? Facebook, Twitter, ou encore LinkedIn. Avec plus de 15 000 abonnés, notre page Facebook rassemble notre plus forte communauté. N’hésite pas à découvrir notre activité sur ces plateformes !", [])
    })
    WA.room.area.onLeave("ThumbUp").subscribe(closePopup)

    WA.room.area.onEnter("Smartphone").subscribe(() => {
        currentPopup = WA.ui.openPopup("SmartphonePopup", "Savais-tu que ce support était de plus en plus utilisé par nos clients ? Aujourd’hui, presque la moitié de nos visites sur le site Internet se font sur Smartphone. De plus, notre nouvelle application Ma Banque est aujourd’hui utilisée par plus de 165 000 clients !", [])
    })
    WA.room.area.onLeave("Smartphone").subscribe(closePopup)

    WA.room.area.onEnter("Cart").subscribe(() => {
        currentPopup = WA.ui.openPopup("CartPopup", "Savais tu qu’aujourd’hui, notre site internet propose plus de 30 parcours en selfcare, permettant à nos clients d’être autonome et de souscrire un produit ou un service en ligne ? Ils sont principalement regroupés sur notre boutique en ligne. Aujourd’hui, plus de 10% des souscriptions en ligne proviennent de cette page.", [])
    })
    WA.room.area.onLeave("Cart").subscribe(closePopup)

    const mapUrl = WA.room.mapURL
    const root = mapUrl.substring(0, mapUrl.lastIndexOf("/"))

    const floormapBtn: CreateUIWebsiteEvent = {
        url:  root + "/floormapBtn.html",
        visible: true,
        allowApi: true,
        allowPolicy: "",   // The list of feature policies allowed
        position: {
            vertical: "top",
            horizontal: "left",
        },
        size: {            // Size on the UI (available units: px|em|%|cm|in|pc|pt|mm|ex|vw|vh|rem and others values auto|inherit)
            width: "65px",
            height: "65px",
        },
    }
    WA.ui.website.open(floormapBtn)

    const scheduleBtn: CreateUIWebsiteEvent = {
        url:  root + "/scheduleBtn.html",
        visible: true,
        allowApi: true,
        allowPolicy: "",   // The list of feature policies allowed
        position: {
            vertical: "top",
            horizontal: "left",
        },
        size: {            // Size on the UI (available units: px|em|%|cm|in|pc|pt|mm|ex|vw|vh|rem and others values auto|inherit)
            width: "65px",
            height: "130px",
        },
    }
    WA.ui.website.open(scheduleBtn)

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

export {};
