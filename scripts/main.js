Events.on(ClientLoadEvent, cons(e => {
    // 1. Изменяем стартовый сектор Эркира
    Planets.erekir.startSector = 90;

    // 2. Замена карты для сектора "Озеро" (lake) из файлов мода
    try {
        let targetSector = SectorPresets.lake; 

        if (targetSector != null) {
            // Находим наш мод по его ID ("eec")
            let mod = Vars.mods.locateMod("eec");
            
            if (mod != null) {
                // Получаем файл строго из папки мода: моды/eec/maps/betterlake.msav
                let mapFile = mod.root.child("maps").child("betterlake.msav");
                
                if (mapFile.exists()) {
                    // Используем полное имя Java-класса mindustry.maps.Map, 
                    // чтобы JS не спутал его со своим встроенным объектом Map
                    let map = new mindustry.maps.Map(mapFile);
                    
                    // Привязываем карту к генератору сектора
                    targetSector.generator = new SectorGen(targetSector, map);
                    Log.info("Успешно заменена карта для сектора lake на файл из мода!");
                } else {
                    Log.err("Файл betterlake.msav не найден в папке maps мода!");
                }
            }
        } else {
            Log.err("Сектор lake не найден!");
        }
    } catch (err) {
        Log.err("Ошибка при замене карты сектора: " + err);
    }
}));
