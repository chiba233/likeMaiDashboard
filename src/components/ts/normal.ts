import {menuSelect} from "@/components/ts/useStorage";

export function openURL(url: string) {
    window.open(url)
}

export function menuSelectFun(Select: number) {
    if (Select == 0) {
        menuSelect.value=0
        openURL('www.google.com')
    }
    if (Select == 1) {
        menuSelect.value=1
        openURL('www.google.com')
    }
    if (Select == 2) {
        menuSelect.value=2
        openURL('www.google.com')
    }
    if (Select == 3) {
        menuSelect.value=3
        openURL('www.google.com')
    }
    if (Select == 4) {
        menuSelect.value=4
        openURL('www.google.com')
    }
    if (Select == 5) {
        menuSelect.value=5
        openURL('www.google.com')
    }
    if (Select == 6) {
        menuSelect.value=6
        openURL('www.google.com')
    }
    if (Select == 7) {
        menuSelect.value=7
        openURL('www.google.com')
    }
}