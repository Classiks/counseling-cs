from pathlib import Path
from dataclasses import dataclass

@dataclass
class Code:
    path: str
    code: str

def get_all_code(root: str|Path) -> list[Code]:
    root = ensure_path(root)

    code: list[Code] = []
    for path in root.rglob("*.ts*"):
        # code.append(path.read_text())
        code.append(Code(path, path.read_text()))
    return code


def ensure_path(path: str|Path) -> Path:
    if isinstance(path, str):
        return Path(path)
    return path

def write_code_to_file(path: str|Path, code: list[Code]) -> None:
    path = ensure_path(path)

    out: str = ""

    for c in code:
        out += "\n\n"
        out += "-" * 80 + "\n"
        out += "-" * 80 + "\n"
        out += str(c.path) + "\n"
        out += c.code
        out += "\n"
        out += "-" * 80 + "\n"
        out += "-" * 80 + "\n"

    path.write_text(out)

def main():
    code = get_all_code("src")
    write_code_to_file("all_code.txt", code)


if __name__ == "__main__":
    main()
    