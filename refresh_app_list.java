import java.io.FileOutputStream;
import java.io.IOException;

void main() throws Exception {
    IO.println("Getting app dir list...");
    final var currentDir = Paths.get("");
    final var pathList = Files.list(currentDir)
            .filter(Files::isDirectory)
            .filter(Predicate.not(t -> {
                try {
                    return Files.isHidden(t);
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            }))
            .map(path -> "\"" + path + "\"")
            .collect(Collectors.joining(", "));

    final var appDirListPath = Paths.get("app-dir-list.json");

    try (
            final var fos = new FileOutputStream(appDirListPath.toFile());
            final var writer = new PrintWriter(fos);) {
        IO.println("Writing data...");
        writer.println("[" + pathList + "]");
        IO.println("Done.");
    } finally {
        // DO NOTHING
    }
}
