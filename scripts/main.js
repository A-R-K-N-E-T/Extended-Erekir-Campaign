Events.on(ClientLoadEvent, cons(e => {
    Planets.erekir.startSector = 90;
    const lake = SectorPresets.lake;
    lake.generator = new FileMapGenerator("betterlake", lake);
    const atlas = SectorPresets.atlas;
    atlas.generator = new FileMapGenerator("betteratlas", atlas);
    const intersect = SectorPresets.intersect;
    intersect.generator = new FileMapGenerator("betterintersect", intersect);
}));
