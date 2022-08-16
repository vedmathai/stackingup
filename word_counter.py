import os

def count():
    page2count = {}
    folder = "public/content/page-content"
    chapters = os.listdir(folder)
    for chapter in chapters:
        chapter_path = os.path.join(folder, chapter)
        pages = os.listdir(chapter_path)
        for page in pages:
            page_path = os.path.join(chapter_path, page)
            with open(page_path) as f:
                content = f.read()
                words_count = len(content.split())
                page2count[page_path] = words_count

    print(sum(page2count.values()))
    for key, value in sorted(page2count.items(), key=lambda x: x[1]):
        print(key, value)

if __name__ == '__main__':
    count()