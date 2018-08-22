declare var module: {
    hot: {
        accept (paths: string, callback: () => void | Promise<void>): void;
    }
}
