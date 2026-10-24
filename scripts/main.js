Events.on(ClientLoadEvent, cons(e => {
    // 1. Изменяем стартовый сектор Эркира
    Planets.erekir.startSector = 90;

    // 2. Замена карты для сектора "Озеро" (lake)
    try {
        let targetSector = SectorPresets.lake; 

        if (targetSector != null) {
            let modFiles = Vars.mods.locateMod("eec");
            
            if (modFiles != null) {
                let mapFile = modFiles.root.child("maps").child("betterlake.msav");
                
                if (mapFile.exists()) {
                    // Создаем объект карты напрямую из файла через конструктор Map
                    let map = new Map(mapFile);
                    
                    // Привязываем карту к генератору сектора
                    targetSector.generator = new SectorGen(targetSector, map);
                    Log.info("Успешно заменена карта для сектора lake на betterlake.msav");
                } else {
                    Log.err("Файл betterlake.msav не найден в папке maps вашего мода!");
                }
            }
        } else {
            Log.err("Сектор lake не найден!");
        }
    } catch (err) {
        Log.err("Ошибка при замене карты сектора: " + err);
    }
}));
