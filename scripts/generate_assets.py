import os
from PIL import Image, ImageDraw, ImageFont

os.makedirs("public/images", exist_ok=True)

# 1. Generate elegant editorial placeholder profile image
width, height = 800, 1000
img = Image.new("RGB", (width, height), color="#0c0d12")
draw = ImageDraw.Draw(img)

# Subtle background gradient/vignette effect
for y in range(height):
    ratio = y / height
    r = int(10 + ratio * 8)
    g = int(11 + ratio * 8)
    b = int(16 + ratio * 10)
    draw.line([(0, y), (width, y)], fill=(r, g, b))

# Subtle decorative inner gold border
border_margin = 30
draw.rectangle(
    [border_margin, border_margin, width - border_margin, height - border_margin],
    outline="#d4af37",
    width=2
)

# Corner accents
acc_len = 40
# Top-left
draw.line([(border_margin - 8, border_margin - 8), (border_margin - 8 + acc_len, border_margin - 8)], fill="#d4af37", width=3)
draw.line([(border_margin - 8, border_margin - 8), (border_margin - 8, border_margin - 8 + acc_len)], fill="#d4af37", width=3)
# Top-right
draw.line([(width - border_margin + 8, border_margin - 8), (width - border_margin + 8 - acc_len, border_margin - 8)], fill="#d4af37", width=3)
draw.line([(width - border_margin + 8, border_margin - 8), (width - border_margin + 8, border_margin - 8 + acc_len)], fill="#d4af37", width=3)
# Bottom-left
draw.line([(border_margin - 8, height - border_margin + 8), (border_margin - 8 + acc_len, height - border_margin + 8)], fill="#d4af37", width=3)
draw.line([(border_margin - 8, height - border_margin + 8), (border_margin - 8, height - border_margin + 8 - acc_len)], fill="#d4af37", width=3)
# Bottom-right
draw.line([(width - border_margin + 8, height - border_margin + 8), (width - border_margin + 8 - acc_len, height - border_margin + 8)], fill="#d4af37", width=3)
draw.line([(width - border_margin + 8, height - border_margin + 8), (width - border_margin + 8, height - border_margin + 8 - acc_len)], fill="#d4af37", width=3)

# Central silhouette / monogram circle
center_x = width // 2
center_y = height // 2 - 60
circle_radius = 160

draw.ellipse(
    [center_x - circle_radius, center_y - circle_radius, center_x + circle_radius, center_y + circle_radius],
    fill="#161822",
    outline="#d4af37",
    width=2
)

# Monogram SP inside circle
try:
    font_large = ImageFont.truetype("arial.ttf", 96)
    font_title = ImageFont.truetype("arial.ttf", 36)
    font_subtitle = ImageFont.truetype("arial.ttf", 22)
    font_note = ImageFont.truetype("arial.ttf", 18)
except Exception:
    font_large = ImageFont.load_default()
    font_title = ImageFont.load_default()
    font_subtitle = ImageFont.load_default()
    font_note = ImageFont.load_default()

draw.text((center_x, center_y - 10), "SP", fill="#d4af37", font=font_large, anchor="mm")

# Portrait Label
draw.text((center_x, height // 2 + 150), "SHAILENDRA PATIDAR", fill="#f5f2eb", font=font_title, anchor="mm")
draw.text((center_x, height // 2 + 200), "Python Developer | AI/ML Enthusiast", fill="#c5a880", font=font_subtitle, anchor="mm")

# Instruction badge
badge_w = 480
badge_h = 44
badge_y = height - 120
draw.rectangle(
    [center_x - badge_w // 2, badge_y, center_x + badge_w // 2, badge_y + badge_h],
    fill="#13141b",
    outline="#d4af37",
    width=1
)
draw.text((center_x, badge_y + 22), "PLACEHOLDER • REPLACE WITH YOUR PHOTO", fill="#d4af37", font=font_note, anchor="mm")

img.save("public/images/profile.jpg", "JPEG", quality=95)
print("Saved public/images/profile.jpg")
