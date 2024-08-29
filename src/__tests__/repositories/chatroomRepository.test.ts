import ChatroomRepository from "repositories/chatroomRepository";
import Chatroom from "models/chatroomModel";
import { syncModels } from "../sequelize.test";

describe("ChatroomRepository", () => {
  // Synchronize models before running any tests
  beforeAll(async () => {
    await syncModels();
  });

  beforeEach(async () => {
    await Chatroom.destroy({ where: {} });
  });

  test("should create a new chatroom", async () => {
    const chatroom = await ChatroomRepository.createChatroom("General");
    expect(chatroom).toBeDefined();
    expect(chatroom!.name).toBe("General");
  });

  test("should get a chatroom by ID", async () => {
    const newChatroom = await ChatroomRepository.createChatroom("Lounge");
    const chatroom = await ChatroomRepository.getChatroomById(newChatroom!.id);
    expect(chatroom).toBeDefined();
    expect(chatroom!.name).toBe("Lounge");
  });

  test("should get all chatrooms", async () => {
    await ChatroomRepository.createChatroom("General");
    await ChatroomRepository.createChatroom("Lounge");
    const chatrooms = await ChatroomRepository.getAllChatrooms();
    expect(chatrooms!.length).toBe(2);
  });

  test("should update a chatroom by ID", async () => {
    const newChatroom = await ChatroomRepository.createChatroom("General");
    const updatedChatroom = await ChatroomRepository.updateChatroom(
      newChatroom!.id,
      "New Name"
    );
    expect(updatedChatroom!.name).toBe("New Name");
  });

  test("should delete a chatroom by ID", async () => {
    const newChatroom = await ChatroomRepository.createChatroom("General");
    const response = await ChatroomRepository.deleteChatroom(newChatroom!.id);
    expect(response!.message).toBe("Chatroom deleted successfully");
    const chatroom = await Chatroom.findByPk(newChatroom!.id);
    expect(chatroom).toBeNull();
  });

  test("should delete a chatroom by name", async () => {
    await ChatroomRepository.createChatroom("General");
    const response = await ChatroomRepository.deleteChatroomByName("General");
    expect(response!.message).toBe("Chatroom deleted successfully");
    const chatroom = await Chatroom.findOne({ where: { name: "General" } });
    expect(chatroom).toBeNull();
  });
});
