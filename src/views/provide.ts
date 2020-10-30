import { provide, reactive, readonly } from "vue";

const info = Symbol('info')
const updateName = Symbol('changeName')
const updateAge = Symbol('changeAge')

interface Info {
    name: string;
    age: number;
}


export function useProvide() {
    const infoState = reactive<Info>({
        name: 'abc',
        age: 11
    })

    const changeName = (val:string) => {
        infoState.name = val
    }

    const changeAge = (val:number) => {
        infoState.age = val
    }
    provide(info,readonly(infoState))
    provide(updateName,changeName)
    provide(updateAge,changeAge)
}
