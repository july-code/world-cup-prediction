"""
简单的HTTP服务器，用于本地预览世界杯预测看板
使用方法：python server.py
然后在浏览器访问：http://localhost:8000
"""

import http.server
import socketserver
import webbrowser
import os

# 切换到脚本所在目录
os.chdir(os.path.dirname(os.path.abspath(__file__)))

PORT = 8000

Handler = http.server.SimpleHTTPRequestHandler

# 添加CORS头，允许本地fetch
class CORSRequestHandler(Handler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

with socketserver.TCPServer(("", PORT), CORSRequestHandler) as httpd:
    print(f"服务器已启动: http://localhost:{PORT}")
    print(f"预测看板: http://localhost:{PORT}/prediction-dashboard.html")
    print(f"结果汇总: http://localhost:{PORT}/results-summary.html")
    print("\n按 Ctrl+C 停止服务器")

    # 自动打开浏览器
    webbrowser.open(f"http://localhost:{PORT}/prediction-dashboard.html")

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n服务器已停止")
