# import subprocess
import os
from pdf2docx import Converter
from PyQt6.QtWidgets import (
    QApplication, QWidget, QVBoxLayout, QLabel,
    QPushButton, QFileDialog, QMessageBox
)

import sys
from PyQt6.QtWidgets import QApplication, QWidget
from manim import *
text = """

 ███████╗██╗      ██████╗ ██████╗  █████╗     ██╗   ██╗ ██╗███████╗███████╗ █████╗
 ██╔════╝██║     ██╔═══██╗██╔══██╗██╔══██╗    ██║   ██║███║██╔════╝╚════██║██╔══██╗
 █████╗  ██║     ██║   ██║██████╔╝███████║    ██║   ██║╚██║███████╗    ██╔╝╚██████║
 ██╔══╝  ██║     ██║   ██║██╔══██╗██╔══██║    ╚██╗ ██╔╝ ██║╚════██║   ██╔╝  ╚═══██║
 ██║     ███████╗╚██████╔╝██║  ██║██║  ██║     ╚████╔╝  ██║███████║██╗██║██╗█████╔╝
 ╚═╝     ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝      ╚═══╝   ╚═╝╚══════╝╚═╝╚═╝╚═╝╚════╝

"""
print(text)

# subprocess.run("npm run postinstall", shell=True, check=True)
# subprocess.run("npm run dev", shell=True, check=True)


class HelloScene(Scene):
    def construct(self):
        text = Text("Xin chào, Manim!", font_size=72)
        self.play(Write(text))
        self.wait(2)


class PDFtoWordConverter(QWidget):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Chuyển PDF sang Word")
        self.resize(400, 200)

        layout = QVBoxLayout()

        self.label = QLabel("Chọn tệp PDF để chuyển đổi:")
        layout.addWidget(self.label)

        self.select_button = QPushButton("Chọn file PDF")
        self.select_button.clicked.connect(self.select_pdf)
        layout.addWidget(self.select_button)

        self.convert_button = QPushButton("Chuyển đổi sang Word")
        self.convert_button.clicked.connect(self.convert_to_word)
        self.convert_button.setEnabled(False)
        layout.addWidget(self.convert_button)

        self.setLayout(layout)
        self.pdf_path = ""

    def select_pdf(self):
        file_path, _ = QFileDialog.getOpenFileName(
            self, "Chọn file PDF", "", "PDF Files (*.pdf)")
        if file_path:
            self.pdf_path = file_path
            self.label.setText(f"Đã chọn: {os.path.basename(file_path)}")
            self.convert_button.setEnabled(True)

    def convert_to_word(self):
        if not self.pdf_path:
            QMessageBox.warning(self, "Lỗi", "Chưa chọn file PDF.")
            return

        save_path, _ = QFileDialog.getSaveFileName(
            self, "Lưu file Word", "", "Word Documents (*.docx)")
        if save_path:
            try:
                converter = Converter(self.pdf_path)
                converter.convert(save_path, start=0, end=None)
                converter.close()
                QMessageBox.information(
                    self, "Thành công", f"Đã lưu file Word tại:\n{save_path}")
            except Exception as e:
                QMessageBox.critical(
                    self, "Lỗi", f"Lỗi khi chuyển đổi:\n{str(e)}")


if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = PDFtoWordConverter()
    window.show()
    sys.exit(app.exec())
