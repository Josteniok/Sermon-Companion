export interface IPreloadBridge {
    node: () => string
}

declare global {
    interface Window {
        versions: IPreloadBridge
    }
}