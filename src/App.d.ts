export interface IPreloadBridge {
    node: () => string
}

declare global {
    interface window {
        versions: IPreloadBridge
    }
}