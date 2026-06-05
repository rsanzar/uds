# Unix Domain Sockets (UDS)

**Unix Domain Sockets (UDS)**—is fundamental operating system feature that provides a highly efficient, secure alternative to local TCP communication.

## 🧠 What is a Unix Domain Socket?

A Unix Domain Socket is a data communications endpoint for exchanging data between processes executing on the same host operating system. 

It uses the exact same API as standard network sockets (TCP/UDP), but instead of relying on an IP address and a port, it binds to a standard file path on the filesystem (e.g., `/var/run/my-app.sock`).

## 🛑 Why Do We Need It? (The Localhost Pain Points)

When building internal microservices, logging sidecars, or local tools, engineers often default to binding to a port on localhost (`127.0.0.1:8080`). While familiar, this approach introduces significant operational pain:

1. **Port Collisions & Config Hell:** No more managing a registry of local ports across multiple tools. If port `8080` is taken, your app crashes. With UDS, you use a scoped filesystem path. No collisions.
2. **Accidental Network Exposure:** Binding to `0.0.0.0` instead of `127.0.0.1` accidentally exposes internal services to the external network. UDS eliminates this risk by relying entirely on standard POSIX file permissions (`chmod`/`chown`). If a user doesn't have read/write access to the socket file, they cannot connect.
3. **Socket Exhaustion:** Thousands of short-lived local TCP requests can exhaust ephemeral ports because connections linger in a `TIME_WAIT` state. UDS bypasses ports entirely, preventing host-level network lockups.

## 🎯 Common Use Cases (What is it for?)

If you've used modern infrastructure, you've used UDS:
* **Container Runtimes:** The Docker daemon (`/var/run/docker.sock`) uses UDS. When you type `docker ps`, the CLI makes HTTP calls over this socket file.
* **Database Optimization:** PostgreSQL and MySQL default to UDS for local connections to bypass network stack latency.
* **Telemetry & Sidecars:** High-throughput logging or metrics collection on a single node (e.g., an app sending thousands of log lines per second to a local monitoring agent).

## 📊 TCP Localhost vs. Unix Domain Sockets

| Feature | TCP Localhost (`127.0.0.1`) | Unix Domain Sockets (`.sock`) |
| :--- | :--- | :--- |
| **Addressing** | IP Address & Port | Filesystem Path |
| **Security** | Firewalls / Network ACLs | File System Permissions (`chmod`) |
| **Overhead** | High (Traverses OS network stack) | Near-Zero (Direct Kernel Memory Buffer) |
| **Connection Limits** | Bound by ephemeral port limits | Bound by OS file descriptor limits |
| **Scope** | Network-wide or Machine-wide | Strictly Local Machine |

## 🏗️ Architecture Visualization

Here is a visual breakdown of the heavy TCP localhost route versus the streamlined UDS kernel route:

```mermaid
flowchart TB
    subgraph TCP["❌ TCP Localhost (High Overhead)"]
        direction TB
        AppTCP[Client Application] -- "HTTP over TCP" --> NetStack1[OS Network Stack\nOverhead: Handshakes, Headers, Checksums]
        NetStack1 -- "IP Packets" --> Loopback((Loopback Device\n127.0.0.1))
        Loopback -- "IP Packets" --> NetStack2[OS Network Stack\nOverhead: TIME_WAIT, Port Limits]
        NetStack2 -- "Port 8080" --> DaemonTCP[Target Daemon / Sidecar]
    end

    subgraph UDS["✅ Unix Domain Sockets (Zero Overhead)"]
        direction TB
        AppUDS[Client Application] -- "Standard File I/O" --> UDSFile{{"/tmp/telemetry.sock\n(Protected by File System ACLs)"}}
        UDSFile -- "Direct Kernel Memory Copy" --> DaemonUDS[Target Daemon / Sidecar]
    end
    
    style TCP fill:#ffebee,stroke:#c62828,stroke-width:2px,color:#000
    style UDS fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px,color:#000
    style UDSFile fill:#fff3e0,stroke:#e65100,stroke-width:2px,color:#000
