import {menuSelect} from "@/components/ts/useStorage";

export function openURL(url: string) {
    window.open(url)
}

export function menuSelectFun(Select: number) {
    if (Select == 0) {
        menuSelect.value=0
    }
    if (Select == 1) {
        menuSelect.value=1
    }
    if (Select == 2) {
        menuSelect.value=2
    }
    if (Select == 3) {
        menuSelect.value=3
    }
    if (Select == 4) {
        menuSelect.value=4
    }
    if (Select == 5) {
        menuSelect.value=5
    }
    if (Select == 6) {
        menuSelect.value=6
    }
    if (Select == 7) {
        menuSelect.value=7
    }
}