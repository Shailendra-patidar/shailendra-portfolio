import os
import sys

# Ensure anaconda site-packages is in sys.path if needed
for path in [r"C:\Users\shelu\anaconda3\Lib\site-packages", r"C:\Users\shelu\AppData\Roaming\Python\Python313\site-packages"]:
    if os.path.exists(path) and path not in sys.path:
        sys.path.append(path)

from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT

os.makedirs("public", exist_ok=True)
pdf_path = "public/resume.pdf"

doc = SimpleDocTemplate(
    pdf_path,
    pagesize=letter,
    rightMargin=36,
    leftMargin=36,
    topMargin=36,
    bottomMargin=36
)

styles = getSampleStyleSheet()

primary_color = colors.HexColor("#0f172a") # Deep slate
accent_color = colors.HexColor("#9b7b46")  # Warm champagne bronze
dark_neutral = colors.HexColor("#1e293b")
light_neutral = colors.HexColor("#475569")
rule_color = colors.HexColor("#cbd5e1")

name_style = ParagraphStyle(
    "Name",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=20,
    leading=24,
    textColor=primary_color,
    alignment=TA_CENTER
)

title_style = ParagraphStyle(
    "Title",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=10.5,
    leading=14,
    textColor=accent_color,
    alignment=TA_CENTER
)

contact_style = ParagraphStyle(
    "Contact",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=8.5,
    leading=11,
    textColor=light_neutral,
    alignment=TA_CENTER
)

section_heading = ParagraphStyle(
    "SectionHeading",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=10,
    leading=13,
    textColor=primary_color,
    spaceAfter=3
)

item_title = ParagraphStyle(
    "ItemTitle",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=9.5,
    leading=12,
    textColor=primary_color
)

item_meta = ParagraphStyle(
    "ItemMeta",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=8.5,
    leading=11,
    textColor=light_neutral,
    alignment=TA_RIGHT
)

body_bullet = ParagraphStyle(
    "BodyBullet",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=8,
    leading=11,
    textColor=dark_neutral,
    leftIndent=10
)

skill_label = ParagraphStyle(
    "SkillLabel",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=8.5,
    leading=11,
    textColor=primary_color
)

skill_val = ParagraphStyle(
    "SkillVal",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=8,
    leading=11,
    textColor=dark_neutral
)

story = []

# Header
story.append(Paragraph("SHAILENDRA PATIDAR", name_style))
story.append(Spacer(1, 2))
story.append(Paragraph("Python Developer  |  AI/ML Enthusiast  |  Generative AI Explorer", title_style))
story.append(Spacer(1, 3))
story.append(Paragraph(
    "Indore, India  •  shailendra.patidar.dev@gmail.com  •  linkedin.com/in/shailendra-patidar  •  github.com/shailendra-patidar",
    contact_style
))
story.append(Spacer(1, 6))
story.append(HRFlowable(width="100%", thickness=1, color=accent_color, spaceAfter=6, spaceBefore=0))

# Summary
story.append(Paragraph("PROFESSIONAL SUMMARY", section_heading))
story.append(Paragraph(
    "Results-focused Python and AI/ML Developer with practical expertise in building Retrieval-Augmented Generation (RAG) architectures, machine learning classifiers, and high-performance asynchronous FastAPI backends. Skilled in document parsing with OCR, dense vector embeddings, and engineering robust, production-oriented software solutions.",
    body_bullet
))
story.append(Spacer(1, 6))
story.append(HRFlowable(width="100%", thickness=0.5, color=rule_color, spaceAfter=6, spaceBefore=0))

# Experience
story.append(Paragraph("PROFESSIONAL EXPERIENCE", section_heading))
exp_header = Table([
    [Paragraph("<b>Encoresky Technologies</b> — AI/ML Intern", item_title), Paragraph("Indore, India | Feb 14, 2026 – Aug 14, 2026", item_meta)]
], colWidths=[360, 180])
exp_header.setStyle(TableStyle([
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("LEFTPADDING", (0, 0), (-1, -1), 0),
    ("RIGHTPADDING", (0, 0), (-1, -1), 0),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 1),
]))
story.append(exp_header)
story.append(Paragraph("• Researched and developed Retrieval-Augmented Generation (RAG) architectures with semantic vector retrieval for context-grounded document question answering.", body_bullet))
story.append(Paragraph("• Architected performant FastAPI backend endpoints, integrating Pydantic schema validation and async handling for machine learning model inference.", body_bullet))
story.append(Paragraph("• Executed exploratory data analysis, dataset cleaning, and feature engineering using Pandas and NumPy.", body_bullet))
story.append(Paragraph("• Collaborated with engineering peers on building production-ready prototypes integrating ML capabilities with web interfaces.", body_bullet))

story.append(Spacer(1, 6))
story.append(HRFlowable(width="100%", thickness=0.5, color=rule_color, spaceAfter=6, spaceBefore=0))

# Projects
story.append(Paragraph("KEY TECHNICAL PROJECTS", section_heading))

p1_table = Table([
    [Paragraph("<b>CallDR: Smart Healthcare Platform</b>", item_title), Paragraph("FastAPI, React, MySQL, Machine Learning, RAG", item_meta)]
], colWidths=[320, 220])
p1_table.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 1)]))
story.append(p1_table)
story.append(Paragraph("• Engineered an intelligent healthcare web platform integrating clinical RAG guidance and predictive symptom triage.", body_bullet))
story.append(Paragraph("• Built asynchronous REST APIs in FastAPI with secure token authorization and structured MySQL patient history schemas.", body_bullet))
story.append(Spacer(1, 4))

p2_table = Table([
    [Paragraph("<b>Medical Report Analysis System</b>", item_title), Paragraph("Python, FastAPI, PaddleOCR, LLM Integration", item_meta)]
], colWidths=[320, 220])
p2_table.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 1)]))
story.append(p2_table)
story.append(Paragraph("• Developed an automated document OCR pipeline using PaddleOCR to extract text and lab parameters from scanned medical reports.", body_bullet))
story.append(Paragraph("• Integrated LLM reasoning prompts to cross-reference biomarker reference ranges, flag anomalies, and create plain-English summaries.", body_bullet))
story.append(Spacer(1, 4))

p3_table = Table([
    [Paragraph("<b>Heart Disease Prediction Classifier</b>", item_title), Paragraph("Python, Pandas, Scikit-learn, KNN, Streamlit", item_meta)]
], colWidths=[320, 220])
p3_table.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 1)]))
story.append(p3_table)
story.append(Paragraph("• Trained a K-Nearest Neighbors (KNN) classification model on clinical attributes, applying StandardScaler normalization and validation.", body_bullet))
story.append(Paragraph("• Deployed an interactive Streamlit UI allowing clinicians and users to test parameter risk evaluations in real time.", body_bullet))
story.append(Spacer(1, 4))

p4_table = Table([
    [Paragraph("<b>RAG Document Question Answering System</b>", item_title), Paragraph("RAG, Vector Search, Embeddings, FastAPI", item_meta)]
], colWidths=[320, 220])
p4_table.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 1)]))
story.append(p4_table)
story.append(Paragraph("• Constructed end-to-end RAG architecture with recursive chunking, dense embeddings, and cosine vector similarity search.", body_bullet))
story.append(Paragraph("• Implemented context-bounded prompt templates with strict citation guardrails to minimize hallucinations on proprietary docs.", body_bullet))

story.append(Spacer(1, 6))
story.append(HRFlowable(width="100%", thickness=0.5, color=rule_color, spaceAfter=6, spaceBefore=0))

# Technical Skills
story.append(Paragraph("TECHNICAL PROFICIENCIES", section_heading))
skills_data = [
    [Paragraph("<b>AI / Machine Learning:</b>", skill_label), Paragraph("NumPy, Pandas, Scikit-learn, Machine Learning, RAG, Generative AI, LLM Integration, Embeddings, Vector Search", skill_val)],
    [Paragraph("<b>Programming:</b>", skill_label), Paragraph("Python, C, C++", skill_val)],
    [Paragraph("<b>Backend & APIs:</b>", skill_label), Paragraph("FastAPI, REST APIs, Asynchronous Programming, Pydantic", skill_val)],
    [Paragraph("<b>Databases:</b>", skill_label), Paragraph("MySQL, SQLite, Relational Data Modeling", skill_val)],
    [Paragraph("<b>Frontend:</b>", skill_label), Paragraph("HTML, CSS, JavaScript, React", skill_val)],
]
skills_table = Table(skills_data, colWidths=[120, 420])
skills_table.setStyle(TableStyle([
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("LEFTPADDING", (0, 0), (-1, -1), 0),
    ("RIGHTPADDING", (0, 0), (-1, -1), 0),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 1.5),
    ("TOPPADDING", (0, 0), (-1, -1), 1),
]))
story.append(skills_table)

story.append(Spacer(1, 6))
story.append(HRFlowable(width="100%", thickness=0.5, color=rule_color, spaceAfter=6, spaceBefore=0))

# Education
story.append(Paragraph("EDUCATION", section_heading))
edu_table = Table([
    [Paragraph("<b>Bachelor of Technology (B.Tech) — Computer Science</b>", item_title), Paragraph("Indore, India", item_meta)]
], colWidths=[360, 180])
edu_table.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 1)]))
story.append(edu_table)
story.append(Paragraph("• Relevant Coursework: Data Structures & Algorithms, Database Systems, Object-Oriented Programming, AI Foundations.", body_bullet))

doc.build(story)
print(f"Generated {pdf_path} successfully!")
