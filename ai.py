from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer, ListTrainer
import logging

# Bật log để xem quá trình
logging.basicConfig(level=logging.INFO)

# Tạo chatbot
bot = ChatBot(
    'Terminal',
    storage_adapter='chatterbot.storage.SQLStorageAdapter',
    logic_adapters=[
        'chatterbot.logic.BestMatch',
        'chatterbot.logic.TimeLogicAdapter',
        'chatterbot.logic.MathematicalEvaluation'
    ],
    database_uri='sqlite:///database.sqlite3'
)

# Huấn luyện với dữ liệu tiếng Anh có sẵn
corpus_trainer = ChatterBotCorpusTrainer(bot)
corpus_trainer.train(
    'chatterbot.corpus.english',
    'chatterbot.corpus.english.greetings',
    'chatterbot.corpus.english.conversations'
)

# Huấn luyện dữ liệu tiếng Việt tùy chỉnh
custom_trainer = ListTrainer(bot)
custom_trainer.train([
    "Xin chào",
    "Chào bạn! Tôi có thể giúp gì?",
    "Bạn tên là gì?",
    "Tôi là trợ lý ảo của bạn.",
    "Tạm biệt",
    "Chào tạm biệt, hẹn gặp lại!"
])

# Giao diện chat dòng lệnh
print("Nhập tin nhắn để bắt đầu (bấm Ctrl+C để thoát):")

while True:
    try:
        user_input = input("Bạn: ")
        bot_response = bot.get_response(user_input)
        print("Bot:", bot_response)

    except (KeyboardInterrupt, EOFError, SystemExit):
        print("\nĐã thoát.")
        break
