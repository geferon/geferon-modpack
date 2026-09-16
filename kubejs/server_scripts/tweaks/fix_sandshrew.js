EntityEvents.spawned((event) => {
  if (event.level.clientSide) return;

  const { entity } = event;
  if (entity.type != "cobblemon:pokemon") return;

  const mobId = entity.nbt.Pokemon?.species;

  // 2. The List of Banned Mobs
  const bannedMobs = ["cobblemon:sandshrew", "cobblemon:sandshrew-alola"];

  if (bannedMobs.includes(mobId)) {
    // console.log(`[DEBUG-SPAWN] BLOCKED: ${mobId} is on the ban list.`)
    event.cancel();
  }
});
