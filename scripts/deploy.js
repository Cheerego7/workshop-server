const path = require("path");
const devops = require("@netless/devops-scripts");

const version = devops.version(path.resolve(__dirname, "../package.json"));

(async () => {
    const docker = new devops.Docker({
        auth: "registry-dev.netless.link",
        namespace: "app",
    });

    const tags = ["latest", `${version}-${devops.gitHash()}`];
    await docker.buildAndPush("dockerfile", "workshop-server", tags, false);
})();
