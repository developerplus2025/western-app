import wikipedia

# Đặt ngôn ngữ tiếng Việt (nếu bạn dùng tiếng Việt)
wikipedia.set_lang("vi")

# Lấy nội dung từ một bài cụ thể
topic = "Trí tuệ nhân tạo"  # Bạn có thể thay bằng bất kỳ chủ đề nào
page = wikipedia.page(topic)
content = page.content

# Tách nội dung thành từng dòng (để huấn luyện)
lines = [line.strip() for line in content.split('\n') if line.strip()]
