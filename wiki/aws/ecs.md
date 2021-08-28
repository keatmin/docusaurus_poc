---
sidebar_position: 1
---

## 2021-06-30
1. If you have an environment variable that relies on Parameter Store or Secrets in your task-definition, updating your ecr repo image will make the service not receive the environment variable in the current service
2. `awslogs-stream-prefix` config in task definitions will ensure your logs from docker gets logged to ecs console.
