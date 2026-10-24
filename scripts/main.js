Events.on(ClientLoadEvent, cons(e => {
    // 1. Изменяем стартовый сектор Эркира
    Planets.erekir.startSector = 90;

    // 2. Замена карты для сектора "Озеро" (lake)
    try {
        let targetSector = SectorPresets.lake; 

        if (targetSector != null) {
            // Ищем карту в общем списке загруженных карт игры по имени файла или названию
            // (Убедитесь, что файл betterlake.msav также добавлен в стандартную папку карт игры или правильно читается модом)
            let foundMap = null;
            
            // Перебираем карты через стандартный цикл Java-коллекции, чтобы избежать проблем с Symbol.iterator
            let mapsIterator = Vars.maps.all().iterator();
            while (mapsIterator.hasNext()) {
                let m = mapsIterator.next();
                // Проверяем имя файла карты
                if (m.file.name().contains("betterlake")) {
                    foundMap = m;
                    break;
                }
            }

            if (foundMap != null) {
                targetSector.generator = new SectorGen(targetSector, foundMap);
                Log.info("Успешно заменена карта для сектора lake!");
            } else {
                Log.err("Карта с именем betterlake не найдена в реестре карт игры!");
            }
        } else {
            Log.err("Сектор lake не найден!");
        }
    } catch (err) {
        Log.err("Ошибка при замене карты сектора: " + err);
    }
}));
