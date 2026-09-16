EntityEvents.spawned((event) => {
  if (event.level.clientSide) return;

  const { entity } = event;
  if (entity.type != "cobblemon:pokemon") return;

  const bannedMobs = ["cobblemon:sandshrew", "cobblemon:sandshrew-alola"];

  const species = entity.nbt.Pokemon?.Species;

  if (bannedMobs.includes(species)) {
    event.cancel();
  }
});
