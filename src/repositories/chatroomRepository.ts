import Chatroom from "models/chatroomModel";

class ChatroomRepository {
  // Helper function to handle errors
  private handleError(error: unknown, action: string) {
    if (error instanceof Error) {
      throw new Error(`Error ${action}: ${error.message}`);
    } else {
      throw new Error(`Unknown error ${action}`);
    }
  }

  async createChatroom(name: string) {
    try {
      return await Chatroom.create({ name });
    } catch (error) {
      this.handleError(error, "creating chatroom");
    }
  }

  async getChatroomById(id: number) {
    try {
      return await Chatroom.findByPk(id);
    } catch (error) {
      this.handleError(error, "getting chatroom by ID");
    }
  }

  async getAllChatrooms() {
    try {
      return await Chatroom.findAll();
    } catch (error) {
      this.handleError(error, "getting all chatrooms");
    }
  }

  async updateChatroom(id: number, name: string) {
    try {
      const chatroom = await Chatroom.findByPk(id);
      if (!chatroom) {
        throw new Error("Chatroom not found");
      }
      await chatroom.update({ name: name });
      return chatroom;
    } catch (error) {
      this.handleError(error, "updating chatroom");
    }
  }

  async deleteChatroom(id: number) {
    try {
      await Chatroom.destroy({ where: { id } });
      return { message: "Chatroom deleted successfully" };
    } catch (error) {
      this.handleError(error, "deleting chatroom");
    }
  }

  async deleteChatroomByName(name: string) {
    try {
      const chatroom = await Chatroom.findOne({ where: { name } });
      if (!chatroom) {
        throw new Error("Chatroom not found");
      }
      await chatroom.destroy();
      return { message: "Chatroom deleted successfully" };
    } catch (error) {
      this.handleError(error, "deleting chatroom by name");
    }
  }
}

export default new ChatroomRepository();
