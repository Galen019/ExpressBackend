import Player from "@models/playerModel";

describe("Player Model", () => {
  it("playerModelTest", () => {
    const attributes = Player.getAttributes();

    expect(Player.tableName).toBe("Players");
    expect(attributes.name.field).toBe("name");
    expect(attributes.id.primaryKey).toBe(true);
    expect(attributes.isReady.defaultValue).toBe(false);
  });
});
