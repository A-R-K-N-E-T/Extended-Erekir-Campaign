Events.on(ClientLoadEvent, cons(e => {
    Planets.erekir.startSector = 90;
    const lake = SectorPresets.lake;
    lake.generator = new FileMapGenerator("betterlake", lake);
}));
